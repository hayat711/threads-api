import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ThreadCountAggregate } from './thread-count-aggregate.output';
import { ThreadAvgAggregate } from './thread-avg-aggregate.output';
import { ThreadSumAggregate } from './thread-sum-aggregate.output';
import { ThreadMinAggregate } from './thread-min-aggregate.output';
import { ThreadMaxAggregate } from './thread-max-aggregate.output';

@ObjectType()
export class ThreadGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => Int, {nullable:false})
    repliesCount!: number;

    @Field(() => Int, {nullable:false})
    likesCount!: number;

    @Field(() => Boolean, {nullable:true})
    mention?: boolean;

    @Field(() => String, {nullable:true})
    mentionUserId?: string;

    @Field(() => ThreadCountAggregate, {nullable:true})
    _count?: ThreadCountAggregate;

    @Field(() => ThreadAvgAggregate, {nullable:true})
    _avg?: ThreadAvgAggregate;

    @Field(() => ThreadSumAggregate, {nullable:true})
    _sum?: ThreadSumAggregate;

    @Field(() => ThreadMinAggregate, {nullable:true})
    _min?: ThreadMinAggregate;

    @Field(() => ThreadMaxAggregate, {nullable:true})
    _max?: ThreadMaxAggregate;
}
