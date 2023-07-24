import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ReplyOrderByRelationAggregateInput } from '../reply/reply-order-by-relation-aggregate.input';
import { LikeOrderByRelationAggregateInput } from '../like/like-order-by-relation-aggregate.input';

@InputType()
export class ThreadOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    repliesCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likesCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mention?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mentionUserId?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: UserOrderByWithRelationInput;

    @Field(() => ReplyOrderByRelationAggregateInput, {nullable:true})
    replies?: ReplyOrderByRelationAggregateInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    mentionUser?: UserOrderByWithRelationInput;

    @Field(() => LikeOrderByRelationAggregateInput, {nullable:true})
    Like?: LikeOrderByRelationAggregateInput;
}
