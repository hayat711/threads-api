import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FollowMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    followerId?: true;

    @Field(() => Boolean, {nullable:true})
    followingId?: true;

    @Field(() => Boolean, {nullable:true})
    isBlocked?: true;

    @Field(() => Boolean, {nullable:true})
    isRestricted?: true;
}
