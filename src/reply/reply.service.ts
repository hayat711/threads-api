import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReplyInput } from './dto/create-reply.input';
import { UpdateReplyInput } from './dto/update-reply.input';
import { PrismaService } from 'src/database/prisma.service';
import { isPrismaError } from 'src/common/utils';

@Injectable()
export class ReplyService {
    constructor(private readonly prisma: PrismaService) {}

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

    public async getAllReplies(threadId: string) {
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
                take: 20,
            });
            return replies;
        } catch (error) {
            console.log(error.message);
            isPrismaError(error);
            throw error;
        }
    }

    public async getParentReplies(parentId: string) {
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
                take: 20,
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
            });
        } catch (error) {
            console.log(error.message);
            isPrismaError(error);
            throw error;
        }
    }
}
