import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutFollowersInput } from '../user/user-create-nested-one-without-followers.input';

@InputType()
export class FollowCreateWithoutFollowingInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isBlocked?: boolean;

    @Field(() => Boolean, {nullable:true})
    isRestricted?: boolean;

    @Field(() => UserCreateNestedOneWithoutFollowersInput, {nullable:false})
    follower!: UserCreateNestedOneWithoutFollowersInput;
}
