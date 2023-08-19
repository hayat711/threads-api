import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NotificationService } from './notification.service';
import { Notification } from './entities/notification.entity';
import { CreateNotificationInput } from './dto/create-notification.input';
import { FollowResponse } from 'src/follow/entities/follow.entity';

@Resolver(() => Notification)
export class NotificationResolver {
    constructor(private readonly notificationService: NotificationService) {}

    @Mutation(() => Notification)
    async createNotification(
        @Args('createNotificationInput')
        createNotificationInput: CreateNotificationInput,
    ) {
        return await this.notificationService.create(createNotificationInput);
    }

    @Query(() => [FollowResponse])
    public async getNotification(
        @Args('receiverId', { type: () => String }) receiverId: string,
    ) {
        return await this.notificationService.getNotification(receiverId);
    }
}
