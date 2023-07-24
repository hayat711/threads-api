import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ThreadOrderByWithRelationInput } from '../thread/thread-order-by-with-relation.input';
import { LikeOrderByRelationAggregateInput } from '../like/like-order-by-relation-aggregate.input';

@InputType()
export class ReplyOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    threadId?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: UserOrderByWithRelationInput;

    @Field(() => ThreadOrderByWithRelationInput, {nullable:true})
    thread?: ThreadOrderByWithRelationInput;

    @Field(() => LikeOrderByRelationAggregateInput, {nullable:true})
    Like?: LikeOrderByRelationAggregateInput;
}
