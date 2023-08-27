import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReplyInput } from './dto/create-reply.input';
import { UpdateReplyInput } from './dto/update-reply.input';
import { PrismaService } from 'src/database/prisma.service';
import { isPrismaError } from 'src/common/utils';
import * as DataLoader from 'dataloader';
import { Thread, User } from '@prisma/client';

@Injectable()
export class ReplyService {
    private threadLoader: DataLoader<string, Thread>;
    private authorLoader: DataLoader<string, User>;

    constructor(private readonly prisma: PrismaService) {
        this.authorLoader = new DataLoader<string, User>(this.batchAuthors);
        this.threadLoader = new DataLoader<string, Thread>(this.batchThreads);
    }

    public async createReply(data: CreateReplyInput, userId: string) {
        try {
            const { content, threadId, parentId, image } = data;
            const reply = await this.prisma.reply.create({
                data: {
                    content,
                    threadId,
                    authorId: userId,
                    image,
                },
            });
            // increment reply count of the corresponding thread
            await this.prisma.thread.update({
                where: {
                    id: threadId,
                },
                data: {
                    repliesCount: {
                        increment: 1,
                    },
                },
            });
            return reply;
        } catch (error) {
            console.log(error);
            isPrismaError(error);
            throw error;
        }
    }

    public async replyToParentReply(
        data: CreateReplyInput,
        userId: string,
        parentId: string,
    ) {
        try {
            const { content } = data;
            // fetch parent reply
            const parentReply = await this.prisma.reply.findUnique({
                where: {
                    id: parentId,
                },
                include: {
                    thread: true,
                },
            });
            if (!parentReply) {
                throw new Error('Parent reply not found.');
            }

            const threadId = parentReply.threadId;

            const reply = await this.prisma.reply.create({
                data: {
                    content,
                    threadId,
                    authorId: userId,
                    parentId,
                },
            });

            await this.prisma.thread.update({
                where: {
                    id: threadId,
                },
                data: {
                    repliesCount: {
                        increment: 1,
                    },
                },
            });

            await this.prisma.reply.update({
                where: {
                    id: parentId,
                },
                data: {
                    repliesCount: {
                        increment: 1,
                    },
                },
            });
            return reply;
        } catch (error) {
            console.log(error);
            isPrismaError(error);
            throw error;
        }
    }

    public async getAllReplies(threadId: string, offset?: number, limit?:number) {
        try {
            const replies = await this.prisma.reply.findMany({
                where: {
                    threadId,
                    parentId: null,
                },
                orderBy: {
                    createdAt: 'desc',
                    
                },
                include: {
                    author: {
                        select: {
                            id: true,
                            bio: true,
                            isPrivate: true,
                            photo: true,
                            username: true,
                        },
                    },
                },
                take: limit,
                skip: offset,

            });
            return replies;
        } catch (error) {
            console.log(error.message);
            isPrismaError(error);
            throw error;
        }
    }

    public getRepliesWithThread = async (authorId: string, offset?: number, limit?: number) => {
        try {
            const replies = await this.prisma.reply.findMany({
                where: {
                    authorId: authorId,
                },
                orderBy: {
                    createdAt: 'desc',
                },
                take: limit,
                skip: offset,

            });
            const repliesWithDetails = await Promise.all(
                replies.map(async (reply) => ({
                    ...reply,
                    author: await this.authorLoader.load(reply.authorId),
                    thread: await this.threadLoader.load(reply.threadId),
                })),
            );

            return repliesWithDetails;
        } catch (error) {
            console.log(error.message);
            isPrismaError(error);
            throw error;
        }
    };
    public async getParentReplies(parentId: string,  offset?: number, limit?:number) {
        try {
            const replies = await this.prisma.reply.findMany({
                where: {
                    parentId,
                },
                orderBy: {
                    createdAt: 'desc',
                },
                include: {
                    author: {
                        select: {
                            id: true,
                            bio: true,
                            isPrivate: true,
                            photo: true,
                            username: true,
                        },
                    },
                },
                take: limit,
                skip: offset,
            });
            return replies;
        } catch (error) {
            console.log(error.message);
            isPrismaError(error);
            throw error;
        }
    }
    public async getReply(id: string) {
        try {
            return await this.prisma.reply.findFirst({
                where: {
                    id,
                },
                include: {
                    author: {
                        select: {
                            id: true,
                            username: true,
                            name: true,
                            photo: true,
                            isPrivate: true,
                            verified: true,
                        }
                    },
                    thread: {
                        select: {
                            id: true,
                            content: true,
                        }
                    }, 
                    replies: {
                        select: {
                            id: true,
                            content: true,
                            createdAt: true,
                            repliesCount: true,
                            likesCount: true,
                            author: {
                                select: {
                                    id: true,
                                    username: true,
                                    photo: true,
                                    name: true,
                                    isPrivate: true,
                                    verified: true,
                                }
                            }
                        }
                    }
                }
            });
        } catch (error) {
            console.log(error.message);
            isPrismaError(error);
            throw error;
        }
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

            return ids.map((id) => authors.find((author) => author.id === id));
        } catch (error) {
            console.log(error);
            isPrismaError(error);
            throw error;
        }
    };

    private batchThreads = async (ids: string[]) => {
        try {
            const threads = await this.prisma.thread.findMany({
                where: {
                    id: {
                        in: ids,
                    },
                },
                include: {
                    author: {
                        select: {
                            id: true,
                            username: true,
                            photo: true,
                            bio: true,
                            isPrivate: true,
                        },
                    },
                },
            });

            return ids.map((id) => threads.find((thread) => thread.id === id));
        } catch (error) {
            console.log(error);
            isPrismaError(error);
            throw error;
        }
    };
}
