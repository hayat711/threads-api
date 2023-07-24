import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ThreadSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    repliesCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likesCount?: keyof typeof SortOrder;
}
