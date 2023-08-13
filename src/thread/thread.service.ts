import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { CreateThreadInput } from './dto/create-thread.input';
import { UpdateThreadInput } from './dto/update-thread.input';
import { PrismaService } from 'src/database/prisma.service';
import { isPrismaError } from 'src/common/utils';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class ThreadService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly cloudinaryService: CloudinaryService,
    ) {}

    public async createThread(data: CreateThreadInput, userId: string) {
        const { content, image, mentionUserId, originalThreadId } = data;
        if (mentionUserId === '') {
            delete data.mentionUserId;
        }

        if (image && image !== '') {
            try {
                const uri = await this.cloudinaryService.uploadImage(image);
                if (uri) {
                    data.image = uri;
                }
            } catch (error) {
                console.log('unable to upload image to cloud');
            }
        }

        try {
            let thread;
            if (originalThreadId) {
                // Re-posting: create a new thread that references the original thread
                thread = await this.prisma.thread.create({
                    data: {
                        author: { connect: { id: userId } },
                        repostedFrom: { connect: { id: originalThreadId } },
                        content,
                    },
                });

                // increment repost count of the original thread
                await this.prisma.thread.update({
                    where: {
                        id: originalThreadId,
                    },
                    data: {
                        repostsCount: { increment: 1 },
                    },
                });
            } else {
                thread = await this.prisma.thread.create({
                    data: {
                        ...data,
                        authorId: userId,
                    },
                });
            }
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
            isPrismaError(error);
            throw error;
        }
    }

    public async getSingleUserThreads(userId: string) {
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
                }
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
                    replies: true
                }
            });

            // delete associated replies first
            if (threadWithReplies && threadWithReplies.replies && threadWithReplies.replies.length > 0) {
                await Promise.all(threadWithReplies.replies.map ( async (reply) => {
                    await this.prisma.reply.delete({
                        where: {
                            id : reply.id
                        },
                    });
                }));
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
