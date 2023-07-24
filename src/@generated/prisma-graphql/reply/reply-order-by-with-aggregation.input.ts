import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReplyCountOrderByAggregateInput } from './reply-count-order-by-aggregate.input';
import { ReplyAvgOrderByAggregateInput } from './reply-avg-order-by-aggregate.input';
import { ReplyMaxOrderByAggregateInput } from './reply-max-order-by-aggregate.input';
import { ReplyMinOrderByAggregateInput } from './reply-min-order-by-aggregate.input';
import { ReplySumOrderByAggregateInput } from './reply-sum-order-by-aggregate.input';

@InputType()
export class ReplyOrderByWithAggregationInput {

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

    @Field(() => ReplyCountOrderByAggregateInput, {nullable:true})
    _count?: ReplyCountOrderByAggregateInput;

    @Field(() => ReplyAvgOrderByAggregateInput, {nullable:true})
    _avg?: ReplyAvgOrderByAggregateInput;

    @Field(() => ReplyMaxOrderByAggregateInput, {nullable:true})
    _max?: ReplyMaxOrderByAggregateInput;

    @Field(() => ReplyMinOrderByAggregateInput, {nullable:true})
    _min?: ReplyMinOrderByAggregateInput;

    @Field(() => ReplySumOrderByAggregateInput, {nullable:true})
    _sum?: ReplySumOrderByAggregateInput;
}
