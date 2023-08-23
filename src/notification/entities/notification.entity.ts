import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Notification as NotificationDB } from '@prisma/client';
import { BaseEntity } from 'src/common/entity/base.entity';

@ObjectType()
export class Notification extends BaseEntity {
    @Field(() => User, { nullable: false })
    user: User;

    @Field(() => String, { nullable: false })
    userId: NotificationDB['userId'];

    @Field(() => String, {
        nullable: false,
        description: 'the text of a notification',
    })
    message: NotificationDB['message'];

    @Field(() => Boolean, { nullable: false })
    isRead: NotificationDB['isRead'];

    @Field(() => Boolean, { nullable: false })
    isDismissed: NotificationDB['isDismissed'];

    @Field(() => String, { nullable: false })
    type: NotificationDB['type'];

    @Field(() => String, { nullable: true })
    senderId?: NotificationDB['senderId'];

    @Field(() => User, { nullable: true })
    sender?: User;
}
