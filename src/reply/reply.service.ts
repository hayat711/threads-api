import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReplyInput, } from './dto/create-reply.input';
import { UpdateReplyInput } from './dto/update-reply.input';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ReplyService {
    constructor(private readonly prisma: PrismaService) {}

    public async createReply(data: CreateReplyInput, userId: string) {
        try {
            const { content, threadId } = data;
            const reply = await this.prisma.reply.create({
                data: {
                    content,
                    threadId,
                    authorId: userId
                    // author: {
                    //     connect: {
                    //         id: userId,
                    //     },
                    // },
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
            throw error;
        }
    }

    public async getAllReplies(threadId: string) {
        try {
            const replies = await this.prisma.reply.findMany({
                where: {
                    threadId,
                },
                orderBy: {
                    createdAt: 'asc',
                },
            });
            return replies;
        } catch (error) {
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
            throw error;
        }
    }

    update(id: number, updateReplyInput: UpdateReplyInput) {
        return `This action updates a #${id} reply`;
    }

    remove(id: number) {
        return `This action removes a #${id} reply`;
    }

    // mutation to add like to reply
    public async addLikeToReply(replyId: string, userId: string) {
        try {
            const reply = await this.prisma.reply.findFirst({
                where: {
                    id: replyId,
                },
            });

            if (!reply) {
                throw new NotFoundException('Reply not found');
            }

            const updatedReply = await this.prisma.reply.update({
                where: {
                    id: replyId,
                },
                data: {
                    likesCount: {
                        increment: 1,
                    },
                },
            });

            const newLike = await this.prisma.like.create({
                data: {
                    userId: userId,
                    replyId: replyId,
                    threadId: null,
                },
            });

            return { updatedReply, newLike };
        } catch (error) {
            throw error;
        }
    }

    // mutation to remove like from reply
    public async removeLikeFromReply(replyId: string, userId: string) {
        try {
            const reply = await this.prisma.reply.findFirst({
                where: {
                    id: replyId,
                },
            });

            if (!reply) {
                throw new NotFoundException('Reply not found');
            }

            const updatedReply = await this.prisma.reply.update({
                where: {
                    id: replyId,
                },
                data: {
                    likesCount: {
                        decrement: 1,
                    },
                },
            });
            console.log(updatedReply);
            return updatedReply;
        } catch (error) {}
    }
}
