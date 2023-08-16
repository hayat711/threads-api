import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import {
    CreateThreadInput,
    RePostThreadInput,
} from './dto/create-thread.input';
import { UpdateThreadInput } from './dto/update-thread.input';
import { PrismaService } from 'src/database/prisma.service';
import { isPrismaError } from 'src/common/utils';

@Injectable()
export class ThreadService {
    constructor(private readonly prisma: PrismaService) {}

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

    update(id: number, updateThreadInput: UpdateThreadInput) {
        return `This action updates a #${id} thread`;
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
