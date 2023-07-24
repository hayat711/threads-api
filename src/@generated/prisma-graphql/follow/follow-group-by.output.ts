import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FollowCountAggregate } from './follow-count-aggregate.output';
import { FollowMinAggregate } from './follow-min-aggregate.output';
import { FollowMaxAggregate } from './follow-max-aggregate.output';

@ObjectType()
export class FollowGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    followerId!: string;

    @Field(() => String, {nullable:false})
    followingId!: string;

    @Field(() => Boolean, {nullable:false})
    isBlocked!: boolean;

    @Field(() => Boolean, {nullable:false})
    isRestricted!: boolean;

    @Field(() => FollowCountAggregate, {nullable:true})
    _count?: FollowCountAggregate;

    @Field(() => FollowMinAggregate, {nullable:true})
    _min?: FollowMinAggregate;

    @Field(() => FollowMaxAggregate, {nullable:true})
    _max?: FollowMaxAggregate;
}
