import { Injectable } from '@nestjs/common';
import { CreateNotificationInput } from './dto/create-notification.input';
import { PrismaService } from 'src/database/prisma.service';
import { isPrismaError } from 'src/common/utils';
import { NotificationType } from '@prisma/client';
import { Notification } from './entities/notification.entity';

@Injectable()
export class NotificationService {
    constructor(private readonly prisma: PrismaService) {}
    private getMessage(type: NotificationType): string {
        switch (type) {
            case NotificationType.POST:
                return 'You have a new post 🔔';
            case NotificationType.REPLIES:
                return 'Someone replied to your post 🔔';
            case NotificationType.REQUESTS:
                return 'You have a new follow request 🔔';
            case NotificationType.MENTIONS:
                return 'Someone mentioned you in a post 🔔';
            case NotificationType.QUOTES:
                return 'Someone quoted your post 🔔';
            case NotificationType.REPOSTS:
                return 'Someone reposted your post 🔔';
            default:
                return 'You have a new notification 🔔';
        }
    }

    public create = async (data: CreateNotificationInput) => {
        try {
            const { isDismissed, isRead, type } = data;
            const message = this.getMessage(type);
            const notification = await this.prisma.notification.create({
                //@ts-ignore
                data: {
                    message,
                    isDismissed,
                    isRead,
                    type,
                },
            });
            return notification;
        } catch (error) {
            console.log(error);
            isPrismaError(error);
            throw error;
        }
    };

    public async getNotifications(
        receiverId: string,
        type?: NotificationType,
    ){
        try {
            const actualType = type ?? NotificationType.ALL;
            const notifications = await this.prisma.notification.findMany({
                where: {
                    user: {
                        id: receiverId,
                    },
                    type: actualType,
                },
                include: {
                    user: {
                        select: {
                            username: true,
                            photo: true,
                            verified: true,
                            id: true,
                            isPrivate: true,
                            
                        },
                    },
                },
            });
            return notifications;
        } catch (error) {
            console.log(error);
            isPrismaError(error);
            throw error;
        }
    }

    public async followRequest(followingId: string, userId: string) {
        try {
            const followRequest = await this.prisma.notification.create({
                data: {
                    message: 'You have a new follow request 🔔',
                    user: {
                        connect: {
                            id: followingId,
                        },
                    },
                    sender: {
                        connect: {
                            id: userId,
                        },
                    },
                    type: NotificationType.REQUESTS,
                },
                include: {
                    user: {
                        select: {
                            username: true,
                            photo: true,
                            verified: true,
                            id: true,
                            isPrivate: true,
                        }
                    }
                }
            });
            return followRequest;
        } catch (error) {
            console.log(error);
            isPrismaError(error);
            throw error;
        }
    }
}
