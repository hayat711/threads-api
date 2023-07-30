import { Injectable } from '@nestjs/common';
import { CreateReplyInput } from './dto/create-reply.input';
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
                    authorId: userId,
                    threadId,
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
}
