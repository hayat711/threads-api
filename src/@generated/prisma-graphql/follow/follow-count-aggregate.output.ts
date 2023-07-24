import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FollowCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    followerId!: number;

    @Field(() => Int, {nullable:false})
    followingId!: number;

    @Field(() => Int, {nullable:false})
    isBlocked!: number;

    @Field(() => Int, {nullable:false})
    isRestricted!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
