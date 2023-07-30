import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateThreadInput } from './dto/create-thread.input';
import { UpdateThreadInput } from './dto/update-thread.input';
import { PrismaService } from 'src/database/prisma.service';
import { isPrismaError } from 'src/common/utils';

@Injectable()
export class ThreadService {
    constructor(private readonly prisma: PrismaService) {}
    public async createThread(data: CreateThreadInput, userId: string) {
        console.log('thread data', data);
        
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

    public async getAllThreads() {
        try {
            const threads = await this.prisma.thread.findMany({
                include: {
                    author: true,
                    // replies: true,
                },
                orderBy: {
                    createdAt: 'desc',
                },
                //TODO : Add pagination
            });
            return threads;
        } catch (error) {
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
        }
    }

    update(id: number, updateThreadInput: UpdateThreadInput) {
        return `This action updates a #${id} thread`;
    }

    remove(id: number) {
        return `This action removes a #${id} thread`;
    }

    // mutation to add like to thread
    public async addLikeToThread(threadId: string, userId: string) {
        try {
            const thread = await this.prisma.thread.findFirst({
                where: {
                    id: threadId,
                },
            });

            if (!thread) {
                throw new NotFoundException('Thread not found');
            }

            const updatedThread = await this.prisma.thread.update({
                where: {
                    id: threadId,
                },
                data: {
                    likesCount: {
                        increment: 1,
                    },
                },
            });

            return updatedThread;
        } catch (error) {
            throw error;
        }
    }
}
