import { Injectable } from '@nestjs/common';
import { CreateLikeThread } from './dto/create-like.input';
import { UpdateLikeInput } from './dto/update-like.input';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class LikeService {
    constructor(private readonly prisma: PrismaService) {}

    public async addLikeToThread(threadId: string, userId: string) {
        console.log('i am called ', userId);
        try {
            const like = await this.prisma.like.create({
                data: {
                    thread: {
                        connect: {
                            id: threadId,
                        }
                    },
                    user: {
                        connect: {
                            id: userId,
                        }
                    },
                },
            });

            await this.prisma.thread.update({
                where: {
                    id: threadId,
                }, 
                data: {
                    likesCount: { increment: 1}
                }
            });

            console.log('crated like ✋',like);
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
                    }
                },
            });
            await this.prisma.thread.update({
                where: {
                    id: threadId,
                }, 
                data: {
                    likesCount: { decrement : 1}
                }
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
                        connect: { id: userId}
                    },
                    reply: {
                        connect: { id: replyId}
                    }
                }
            });
            await this.prisma.reply.update({
                where: {
                    id: replyId,
                }, 
                data: {
                    likesCount: { increment: 1}
                }
            });
            console.log('created like 🤚', like);
            return like;
        } catch (error) {
            
        }
    }

    public async removeLikeFromReply(replyId: string, userId: string) {
        try {
            const like = await this.prisma.like.delete({
                where: {
                    userId_replyId: {
                        userId,
                        replyId,
                    }
                }
            });
            await this.prisma.reply.update({
                where: {
                    id: replyId,
                }, 
                data: {
                    likesCount: { decrement: 1}
                }
            });
            return like;
        } catch (error) {
            console.log(error);
        }
    }

    findAll() {
        return `This action returns all like`;
    }

    findOne(id: number) {
        return `This action returns a #${id} like`;
    }

    update(id: number, updateLikeInput: UpdateLikeInput) {
        return `This action updates a #${id} like`;
    }

    remove(id: number) {
        return `This action removes a #${id} like`;
    }
}
