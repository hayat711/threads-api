import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FollowCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    followerId!: string;

    @Field(() => String, {nullable:false})
    followingId!: string;

    @Field(() => Boolean, {nullable:true})
    isBlocked?: boolean;

    @Field(() => Boolean, {nullable:true})
    isRestricted?: boolean;
}
