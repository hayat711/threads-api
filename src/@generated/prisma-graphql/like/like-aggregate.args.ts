import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LikeWhereInput } from './like-where.input';
import { Type } from 'class-transformer';
import { LikeOrderByWithRelationInput } from './like-order-by-with-relation.input';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LikeCountAggregateInput } from './like-count-aggregate.input';
import { LikeMinAggregateInput } from './like-min-aggregate.input';
import { LikeMaxAggregateInput } from './like-max-aggregate.input';

@ArgsType()
export class LikeAggregateArgs {

    @Field(() => LikeWhereInput, {nullable:true})
    @Type(() => LikeWhereInput)
    where?: LikeWhereInput;

    @Field(() => [LikeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LikeOrderByWithRelationInput>;

    @Field(() => LikeWhereUniqueInput, {nullable:true})
    cursor?: LikeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LikeCountAggregateInput, {nullable:true})
    _count?: LikeCountAggregateInput;

    @Field(() => LikeMinAggregateInput, {nullable:true})
    _min?: LikeMinAggregateInput;

    @Field(() => LikeMaxAggregateInput, {nullable:true})
    _max?: LikeMaxAggregateInput;
}
