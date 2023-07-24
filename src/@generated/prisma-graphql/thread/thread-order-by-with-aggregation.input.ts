import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ThreadCountOrderByAggregateInput } from './thread-count-order-by-aggregate.input';
import { ThreadAvgOrderByAggregateInput } from './thread-avg-order-by-aggregate.input';
import { ThreadMaxOrderByAggregateInput } from './thread-max-order-by-aggregate.input';
import { ThreadMinOrderByAggregateInput } from './thread-min-order-by-aggregate.input';
import { ThreadSumOrderByAggregateInput } from './thread-sum-order-by-aggregate.input';

@InputType()
export class ThreadOrderByWithAggregationInput {

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

    @Field(() => ThreadCountOrderByAggregateInput, {nullable:true})
    _count?: ThreadCountOrderByAggregateInput;

    @Field(() => ThreadAvgOrderByAggregateInput, {nullable:true})
    _avg?: ThreadAvgOrderByAggregateInput;

    @Field(() => ThreadMaxOrderByAggregateInput, {nullable:true})
    _max?: ThreadMaxOrderByAggregateInput;

    @Field(() => ThreadMinOrderByAggregateInput, {nullable:true})
    _min?: ThreadMinOrderByAggregateInput;

    @Field(() => ThreadSumOrderByAggregateInput, {nullable:true})
    _sum?: ThreadSumOrderByAggregateInput;
}
