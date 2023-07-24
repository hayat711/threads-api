import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplyWhereInput } from './reply-where.input';
import { Type } from 'class-transformer';
import { ReplyOrderByWithAggregationInput } from './reply-order-by-with-aggregation.input';
import { ReplyScalarFieldEnum } from './reply-scalar-field.enum';
import { ReplyScalarWhereWithAggregatesInput } from './reply-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ReplyCountAggregateInput } from './reply-count-aggregate.input';
import { ReplyAvgAggregateInput } from './reply-avg-aggregate.input';
import { ReplySumAggregateInput } from './reply-sum-aggregate.input';
import { ReplyMinAggregateInput } from './reply-min-aggregate.input';
import { ReplyMaxAggregateInput } from './reply-max-aggregate.input';

@ArgsType()
export class ReplyGroupByArgs {

    @Field(() => ReplyWhereInput, {nullable:true})
    @Type(() => ReplyWhereInput)
    where?: ReplyWhereInput;

    @Field(() => [ReplyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReplyOrderByWithAggregationInput>;

    @Field(() => [ReplyScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReplyScalarFieldEnum>;

    @Field(() => ReplyScalarWhereWithAggregatesInput, {nullable:true})
    having?: ReplyScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReplyCountAggregateInput, {nullable:true})
    _count?: ReplyCountAggregateInput;

    @Field(() => ReplyAvgAggregateInput, {nullable:true})
    _avg?: ReplyAvgAggregateInput;

    @Field(() => ReplySumAggregateInput, {nullable:true})
    _sum?: ReplySumAggregateInput;

    @Field(() => ReplyMinAggregateInput, {nullable:true})
    _min?: ReplyMinAggregateInput;

    @Field(() => ReplyMaxAggregateInput, {nullable:true})
    _max?: ReplyMaxAggregateInput;
}
