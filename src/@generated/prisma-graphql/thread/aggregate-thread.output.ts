import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ThreadCountAggregate } from './thread-count-aggregate.output';
import { ThreadAvgAggregate } from './thread-avg-aggregate.output';
import { ThreadSumAggregate } from './thread-sum-aggregate.output';
import { ThreadMinAggregate } from './thread-min-aggregate.output';
import { ThreadMaxAggregate } from './thread-max-aggregate.output';

@ObjectType()
export class AggregateThread {

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
