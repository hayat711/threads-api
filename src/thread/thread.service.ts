import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateThreadInput } from './dto/create-thread.input';
import { UpdateThreadInput } from './dto/update-thread.input';
import { PrismaService } from 'src/database/prisma.service';
import { isPrismaError } from 'src/common/utils';

@Injectable()
export class ThreadService {
    constructor(private readonly prisma: PrismaService) {}

    public async createThread(data: CreateThreadInput, userId: string) {
        const { content, images, mentionUserId } = data;
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

    public async getAllThreads() {
        try {
            const threads = await this.prisma.thread.findMany({
                include: {
                    author: true,
                    replies: true,
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

    public async getUserThreads(userId: string) {
        try {
            return await this.prisma.thread.findMany({
                where: {
                    authorId: userId,
                },
                orderBy: {
                    createdAt: 'desc',
                },
                include: {
                    author: true,
                    replies: true,
                },
            });
        } catch (error) {
            console.log(error);
        }
    }

    update(id: number, updateThreadInput: UpdateThreadInput) {
        return `This action updates a #${id} thread`;
    }

    remove(id: number) {
        return `This action removes a #${id} thread`;
    }

    // mutation to add like to thread
    public async addLikeToThread(
        threadId: string,
        userId: string,
        replyId: string | null = null,
    ) {
        try {
            const thread = await this.prisma.thread.findFirst({
                where: {
                    id: threadId,
                },
                include: { likes: true },
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
            console.log(updatedThread);
            // const newLike = await this.prisma.like.create({
            //     data: {
            //         userId,
            //         threadId,
            //         replyId,
            //     },
            // });
            // console.log(newLike);
            await this.addLike(userId, threadId, replyId);

            return { updatedThread };
        } catch (error) {
            throw error;
        }
    }

    public async removeLikeFromThread(threadId: string, userId: string) {
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
                        decrement: 1,
                    },
                },
            });
            return updatedThread;
        } catch (error) {
            console.log(error);
        }
    }

    private async addLike(
        userId: string,
        threadId: string,
        replyId: string | null = null,
    ) {
        try {
            const newLike = await this.prisma.like.create({
                data: {
                    userId,
                    threadId,
                    replyId
                },
            });
            return newLike;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public async getThreadLikes(threadId: string) {
        try {
            const likes = await this.prisma.like.findMany({
                where: {
                    threadId,
                },
                select: {
                    id: true,
                    user: {
                        select: {
                            id: true,
                            username: true,
                            photo: true,         
                        }
                    }
                }
            });
            return likes;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
