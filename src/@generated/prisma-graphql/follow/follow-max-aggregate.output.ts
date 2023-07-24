import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FollowMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    followerId?: string;

    @Field(() => String, {nullable:true})
    followingId?: string;

    @Field(() => Boolean, {nullable:true})
    isBlocked?: boolean;

    @Field(() => Boolean, {nullable:true})
    isRestricted?: boolean;
}
