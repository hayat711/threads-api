import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { isPrismaError } from 'src/common/utils';

@Injectable()
export class LikeService {
    constructor(private readonly prisma: PrismaService) {}

    public async addLikeToThread(threadId: string, userId: string) {
        try {
            const like = await this.prisma.like.create({
                data: {
                    thread: {
                        connect: {
                            id: threadId,
                        },
                    },
                    user: {
                        connect: {
                            id: userId,
                        },
                    },
                },
            });

            await this.prisma.thread.update({
                where: {
                    id: threadId,
                },
                data: {
                    likesCount: { increment: 1 },
                },
            });

            return like;
        } catch (error) {
            console.log(error);
        }
    }

    public async removeLikeFromThread(threadId: string, userId: string) {
        try {
            const like = await this.prisma.like.delete({
                where: {
                    userId_threadId: {
                        userId,
                        threadId,
                    },
                },
            });
            await this.prisma.thread.update({
                where: {
                    id: threadId,
                },
                data: {
                    likesCount: { decrement: 1 },
                },
            });
            return like;
        } catch (error) {
            throw error;
        }
    }

    public async addLikeToReply(replyId: string, userId: string) {
        try {
            const like = await this.prisma.like.create({
                data: {
                    user: {
                        connect: { id: userId },
                    },
                    reply: {
                        connect: { id: replyId },
                    },
                },
            });
            await this.prisma.reply.update({
                where: {
                    id: replyId,
                },
                data: {
                    likesCount: { increment: 1 },
                },
            });
            console.log('created like 🤚', like);
            return like.id;
        } catch (error) {
            console.log(error);
            isPrismaError(error);
            throw Error;
        }
    }

    public async addLikeToParentReply(parentId: string, userId: string) {
        try {
            const like = await this.prisma.like.create({
                data: {
                    user: {
                        connect: { id: userId },
                    },
                    reply: {
                        connect: {
                            id: parentId,
                        },
                    },
                },
            });

            // update the likes count for the parent reply

            await this.prisma.reply.update({
                where: {
                    id: parentId,
                },
                data: {
                    likesCount: { increment: 1 },
                },
            });
            console.log('created parent reply like 👍 ', like);
            return like.id;
        } catch (error) {
            console.log(error);
            isPrismaError(error);
            throw Error;
        }
    }

    public async removeLikeFromReply(replyId: string, userId: string) {
        try {
            const like = await this.prisma.like.delete({
                where: {
                    userId_replyId: {
                        userId,
                        replyId,
                    },
                },
            });
            await this.prisma.reply.update({
                where: {
                    id: replyId,
                },
                data: {
                    likesCount: { decrement: 1 },
                },
            });
            return like.id;
        } catch (error) {
            console.log(error);
            isPrismaError(error);
            throw Error;
        }
    }

    public async removeLikeFromParentReply(parentId: string, userId: string) {
        try {
            const like = await this.prisma.like.delete({
                where: {
                    userId_replyId: {
                        userId,
                        replyId: parentId,
                    },
                },
            });
            await this.prisma.reply.update({
                where: {
                    id: parentId,
                },
                data: {
                    likesCount: { decrement: 1 },
                },
            });
            return like.id;
        } catch (error) {
            console.log(error);
            isPrismaError(error);
            throw Error;
        }
    }

    public async getUserLikes(userId: string) {
        try {
            const likes = await this.prisma.like.findMany({
                where: {
                    userId,
                },
            });
            return likes;
        } catch (error) {}
    }

    public async getThreadLikes(threadId: string) {
        try {
            const likes = await this.prisma.like.findMany({
                where: {
                    threadId,
                },
                select: {
                    id: true,
                    threadId: true,
                    userId: true,
                    user: {
                        select: {
                            username: true,
                            photo: true,
                        },
                    },
                },
            });
            return likes;
        } catch (error) {
            console.log(error);
            isPrismaError(error);
            throw Error;
        }
    }

    public async getReplyLikes(replyId: string) {
        try {
            const likes = await this.prisma.like.findMany({
                where: {
                    replyId,
                },
                select: {
                    id: true,
                    replyId: true,
                    userId: true,
                    user: {
                        select: {
                            username: true,
                            photo: true,
                        },
                    },
                },
            });
            return likes;
        } catch (error) {
            console.log(error);
            isPrismaError(error);
            throw Error;

        }
    }
   
}
