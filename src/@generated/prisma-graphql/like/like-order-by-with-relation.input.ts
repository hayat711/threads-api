import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ThreadOrderByWithRelationInput } from '../thread/thread-order-by-with-relation.input';
import { ReplyOrderByWithRelationInput } from '../reply/reply-order-by-with-relation.input';

@InputType()
export class LikeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    threadId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    replyId?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => ThreadOrderByWithRelationInput, {nullable:true})
    thread?: ThreadOrderByWithRelationInput;

    @Field(() => ReplyOrderByWithRelationInput, {nullable:true})
    reply?: ReplyOrderByWithRelationInput;
}
