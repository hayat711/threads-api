import { InputType, Int, Field } from '@nestjs/graphql';

import { registerEnumType } from '@nestjs/graphql';

export enum NotificationType {
    POST = 'post',
    REPLIES = 'replies',
    REQUESTS = 'requests',
    MENTIONS = 'mentions',
    QUOTES = 'quotes',
    REPOSTS = 'reposts',
}

registerEnumType(NotificationType, {
    name: 'NotificationType',
});


@InputType()
export class CreateNotificationInput {
  @Field(() => Boolean, {nullable: false})
  isDismissed: boolean;

  @Field(() => Boolean, { nullable: false })
  isRead: boolean;

  @Field(() => NotificationType, { nullable: false})
  type: NotificationType;
}
