import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import {
    CreateThreadInput,
    RePostThreadInput,
} from './dto/create-thread.input';
import { PrismaService } from 'src/database/prisma.service';
import { isPrismaError } from 'src/common/utils';
import * as DataLoader from 'dataloader';
import { Reply, Thread, User } from '@prisma/client';

@Injectable()
export class ThreadService {
    private authorLoader: DataLoader<string, User>;
    private repliesLoader: DataLoader<string, Reply[]>;
    private repostedFromLoader: DataLoader<string, Thread | null>;

    constructor(private readonly prisma: PrismaService) {
        this.authorLoader = new DataLoader<string, User>(this.batchAuthors);
        this.repliesLoader = new DataLoader<string, Reply[]>(this.batchReplies);
        this.repostedFromLoader = new DataLoader<string, Thread | null>(
            this.batchRepostedFrom,
        );
    }

    private batchAuthors = async (ids: string[]) => {
        try {
            const authors = await this.prisma.user.findMany({
                where: {
                    id: {
                        in: ids,
                    },
                },
            });

            // Create a map of authors by id for efficient lookup
            const authorMap: Record<string, User> = {};
            authors.forEach((author) => {
                authorMap[author.id] = author;
            });

            // Map ids to authors
            return ids.map((id) => authorMap[id]);
        } catch (error) {
            console.log(error);
            isPrismaError(error);
            throw error;
        }
    };

    private batchReplies = async (ids: readonly string[]) => {
        const mutableIds = [...ids];

        try {
            const replies = await this.prisma.reply.findMany({
                where: {
                    threadId: {
                        in: mutableIds,
                    },
                },
            });

            // Group replies by threadId
            const replyMap: { [key: string]: Reply[] } = {};
            replies.forEach((reply) => {
                const { threadId } = reply;
                if (replyMap[threadId]) {
                    replyMap[threadId].push(reply);
                } else {
                    replyMap[threadId] = [reply];
                }
            });

            return ids.map((id) => replyMap[id] || []);
        } catch (error) {
            console.log(error);
            isPrismaError(error);
            throw error;
        }
    };

    private batchRepostedFrom = async (ids: string[]) => {
        try {
            const repostedThreads = await this.prisma.thread.findMany({
                where: {
                    id: {
                        in: ids,
                    },
                },
                include: {
                    repostedFrom: {
                        include: {
                            author: {
                                select: {
                                    id: true,
                                    username: true,
                                    photo: true,
                                },
                            },
                        },
                    },
                },
            });

            return ids.map((id) =>
                repostedThreads.find((thread) => thread.id === id),
            );
        } catch (error) {
            console.log(error);
            isPrismaError(error);
            throw error;
        }
    };

    public async createThread(data: CreateThreadInput, userId: string) {
        const { content, image, mentionUserId } = data;
        if (mentionUserId === '') {
            delete data.mentionUserId;
        }

        try {
            const thread = await this.prisma.thread.create({
                data: {
                    ...data,
                    authorId: userId,
                },
            });
            return thread;
        } catch (error) {
            console.log('error in creating thread', error);
            isPrismaError(error);
            throw error;
        }
    }

    public async rePostThread(data: RePostThreadInput, userId: string) {
        const { originalThreadId, quoteContent } = data;
        try {
            const originalThread = await this.prisma.thread.findFirst({
                where: {
                    id: originalThreadId,
                },
                select: {
                    id: true,
                    repostsCount: true,
                },
            });

            if (!originalThread) {
                throw new NotFoundException('Original Thread not found');
            }

            let thread;

            if (quoteContent) {
                // Quoting: create a new thread with the quote content reference to original thread
                thread = await this.prisma.thread.create({
                    data: {
                        author: { connect: { id: userId } },
                        repostedFrom: { connect: { id: originalThreadId } },
                        quoteContent,
                    },
                });
            } else {
                //Re-posting:
                thread = await this.prisma.thread.create({
                    data: {
                        author: { connect: { id: userId } },
                        repostedFrom: { connect: { id: originalThreadId } },
                    },
                });
                // increment re-post count of the original thread
                await this.prisma.thread.update({
                    where: {
                        id: originalThreadId,
                    },
                    data: {
                        repostsCount: { increment: 1 },
                    },
                });
            }
            return thread;
        } catch (error) {
            console.log('error in re-posting thread', error);
            isPrismaError(error);
            throw error;
        }
    }

    public async getAllThreads() {
        try {
            const threads = await this.prisma.thread.findMany({
                include: {
                    author: {
                        select: {
                            id: true,
                            username: true,
                            photo: true,
                            verified: true,
                        },
                    },
                    replies: {
                        select: {
                            id: true,
                            repliesCount: true,
                            image: true,
                            authorId: true,
                            content: true,
                            likesCount: true,
                        },
                    },
                    repostedFrom: {
                        select: {
                            id: true,
                            author: {
                                select: {
                                    id: true,
                                    username: true,
                                    photo: true,
                                },
                            },
                            content: true,
                            createdAt: true,
                            updatedAt: true,
                            image: true,
                            likesCount: true,
                            repostsCount: true,
                            repostedFrom: {
                                select: {
                                    id: true,
                                    authorId: true,
                                    content: true,
                                    createdAt: true,
                                },
                            },
                        },
                    },
                },
                orderBy: {
                    createdAt: 'desc',
                },
                take: 20,
                //TODO : Add pagination
            });

            // await and resolve Dataloader calls
            const threadsWithResolvedData = await Promise.all(
                threads.map(async (thread) => {
                    const author = await this.authorLoader.load(
                        thread.authorId,
                    );

                    return {
                        ...thread,
                        author, // Author is guaranteed to be present
                        replies: await this.repliesLoader.load(thread.id),
                        repostedFrom: await this.repostedFromLoader.load(
                            thread.id,
                        ),
                    };
                }),
            );

            // return threadsWithResolvedData;
            return threads;
        } catch (error) {
            console.log('error in getting thread', error);
            isPrismaError(error);
            throw error;
        }
    }

    public async getThread(id: string) {
        try {
            return await this.prisma.thread.findFirst({
                where: {
                    id,
                },
            });
        } catch (error) {
            throw error;
            isPrismaError(error);
            throw error;
        }
    }

    public async getUserThreads(userId: string) {
        try {
            const threads = await this.prisma.thread.findMany({
                where: {
                    authorId: userId,
                },
                include: {
                    author: {
                        select: {
                            id: true,
                            username: true,
                            photo: true,
                            verified: true
                        },
                    },
                    replies: {
                        select: {
                            id: true,
                            repliesCount: true,
                            image: true,
                            authorId: true,
                            content: true,
                            likesCount: true,
                        },
                    },
                    repostedFrom: {
                        select: {
                            id: true,
                            author: {
                                select: {
                                    id: true,
                                    username: true,
                                    photo: true,
                                },
                            },
                            content: true,
                            createdAt: true,
                            updatedAt: true,
                            image: true,
                            likesCount: true,
                            repostsCount: true,
                            repostedFrom: {
                                select: {
                                    id: true,
                                    authorId: true,
                                    content: true,
                                    createdAt: true,
                                },
                            },
                        },
                    },
                },
                orderBy: {
                    createdAt: 'desc',
                },
                take: 20,
                //TODO : Add pagination
            });
            return threads;
        } catch (error) {
            console.log('error in getting user threads', error);
            isPrismaError(error);
            throw error;
        }
    }

    public async getSingleUserThreads(userId: string) {
        try {
            const threads = await this.prisma.thread.findMany({
                where: {
                    authorId: userId,
                },
                include: {
                    author: {
                        select: {
                            id: true,
                            username: true,
                            photo: true,
                            verified: true
                        },
                    },
                    replies: {
                        select: {
                            id: true,
                            repliesCount: true,
                            image: true,
                            authorId: true,
                            content: true,
                            likesCount: true,
                        },
                    },
                    repostedFrom: {
                        select: {
                            id: true,
                            author: {
                                select: {
                                    id: true,
                                    username: true,
                                    photo: true,
                                },
                            },
                            content: true,
                            createdAt: true,
                            updatedAt: true,
                            image: true,
                            likesCount: true,
                            repostsCount: true,
                            repostedFrom: {
                                select: {
                                    id: true,
                                    authorId: true,
                                    content: true,
                                    createdAt: true,
                                },
                            },
                        },
                    },
                },
                orderBy: {
                    createdAt: 'desc',
                },
                take: 20,
                //TODO : Add pagination
            });
            return threads;
        } catch (error) {
            console.log(error);
            isPrismaError(error);
            throw error;
        }
    }

    public async remove(threadId: string, userId: string) {
        try {
            const thread = await this.prisma.thread.findFirst({
                where: {
                    id: threadId,
                },
                select: {
                    id: true,
                    authorId: true,
                },
            });

            if (!thread) {
                throw new NotFoundException('Thread not found');
            }

            if (thread.authorId !== userId) {
                throw new UnauthorizedException('Unauthorized for this action');
            }

            const threadWithReplies = await this.prisma.thread.findFirst({
                where: {
                    id: threadId,
                },
                include: {
                    replies: true,
                },
            });

            // delete associated replies first
            if (
                threadWithReplies &&
                threadWithReplies.replies &&
                threadWithReplies.replies.length > 0
            ) {
                await Promise.all(
                    threadWithReplies.replies.map(async (reply) => {
                        await this.prisma.reply.delete({
                            where: {
                                id: reply.id,
                            },
                        });
                    }),
                );
            }

            // delete the thread
            await this.prisma.thread.delete({
                where: {
                    id: threadId,
                },
            });

            return thread.id;
        } catch (error) {
            console.log(error);
            isPrismaError(error);
            throw error;
        }
    }
}
