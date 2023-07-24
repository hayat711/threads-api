import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReplyCountAggregate } from './reply-count-aggregate.output';
import { ReplyAvgAggregate } from './reply-avg-aggregate.output';
import { ReplySumAggregate } from './reply-sum-aggregate.output';
import { ReplyMinAggregate } from './reply-min-aggregate.output';
import { ReplyMaxAggregate } from './reply-max-aggregate.output';

@ObjectType()
export class AggregateReply {

    @Field(() => ReplyCountAggregate, {nullable:true})
    _count?: ReplyCountAggregate;

    @Field(() => ReplyAvgAggregate, {nullable:true})
    _avg?: ReplyAvgAggregate;

    @Field(() => ReplySumAggregate, {nullable:true})
    _sum?: ReplySumAggregate;

    @Field(() => ReplyMinAggregate, {nullable:true})
    _min?: ReplyMinAggregate;

    @Field(() => ReplyMaxAggregate, {nullable:true})
    _max?: ReplyMaxAggregate;
}
