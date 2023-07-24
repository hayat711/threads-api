import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ThreadOrderByRelationAggregateInput } from '../thread/thread-order-by-relation-aggregate.input';
import { ReplyOrderByRelationAggregateInput } from '../reply/reply-order-by-relation-aggregate.input';
import { LikeOrderByRelationAggregateInput } from '../like/like-order-by-relation-aggregate.input';
import { FollowOrderByRelationAggregateInput } from '../follow/follow-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    photo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    verified?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;

    @Field(() => ThreadOrderByRelationAggregateInput, {nullable:true})
    threads?: ThreadOrderByRelationAggregateInput;

    @Field(() => ThreadOrderByRelationAggregateInput, {nullable:true})
    mentionedThreads?: ThreadOrderByRelationAggregateInput;

    @Field(() => ReplyOrderByRelationAggregateInput, {nullable:true})
    replies?: ReplyOrderByRelationAggregateInput;

    @Field(() => LikeOrderByRelationAggregateInput, {nullable:true})
    likes?: LikeOrderByRelationAggregateInput;

    @Field(() => FollowOrderByRelationAggregateInput, {nullable:true})
    followers?: FollowOrderByRelationAggregateInput;

    @Field(() => FollowOrderByRelationAggregateInput, {nullable:true})
    followings?: FollowOrderByRelationAggregateInput;
}
