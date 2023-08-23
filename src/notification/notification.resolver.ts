import {
    Resolver,
    Query,
    Mutation,
    Args,
    Int,
    Subscription,
    Context,
} from '@nestjs/graphql';
import { NotificationService } from './notification.service';
import { Notification,  } from './entities/notification.entity';
import { CreateNotificationInput } from './dto/create-notification.input';
import { NotificationType } from '@prisma/client';
import { UseGuards } from '@nestjs/common';
import { SessionGuard } from 'src/common/guards/auth.guard';
import { PubSub } from 'graphql-subscriptions';
import { GqlFastifyContext } from 'src/common/types/graphql.types';

@Resolver(() => Notification)
export class NotificationResolver {
    private pubsub: PubSub;
    constructor(private readonly notificationService: NotificationService) {
        this.pubsub = new PubSub();
    }

    @UseGuards(SessionGuard)
    @Mutation(() => Notification)
    async createNotification(
        @Args('createNotificationInput')
        createNotificationInput: CreateNotificationInput,
    ) {
        return await this.notificationService.create(createNotificationInput);
    }

    @UseGuards(SessionGuard)
    @Query(() => [Notification], { name: 'notifications' })
    public async getNotification(
        @Args('receiverId', { type: () => String }) receiverId: string,
        @Args('type', { type: () => NotificationType, nullable: true })
        type: NotificationType,
    ) {
        const notifications = await this.notificationService.getNotifications(receiverId, type);
        console.log('notifications 🚀', notifications);
        return notifications || [];
    }

    @UseGuards(SessionGuard)
    @Mutation(() => Notification, { name: 'followRequest' })
    async followRequest(
        @Args('followingId', { type: () => String }) followingId: string,
        @Context() ctx: GqlFastifyContext
    ) {
        console.log('follow request mutation is called ', followingId);
        const user = await ctx.req.session.get('user');
        const followRequestNotification =
            this.notificationService.followRequest(followingId, user.id);
        (await followRequestNotification).userId = followingId;

        this.pubsub.publish('followRequestSent', {
            followRequestSent: followRequestNotification,
        });
        return followRequestNotification;
    }

    @Subscription(() => Notification, {
        name: 'followRequestSent',
        filter(payload : Notification, variables, context) {
            return payload.userId === variables.followingId;
        },
    })
    followRequestSent(
        @Args('followingId', { type: () => String }) followingId: string,
    ) {
        console.log('subscription executed 🚀');
        return this.pubsub.asyncIterator('followRequestSent');
    }
}
