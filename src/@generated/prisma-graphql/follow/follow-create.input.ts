import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutFollowersInput } from '../user/user-create-nested-one-without-followers.input';
import { UserCreateNestedOneWithoutFollowingsInput } from '../user/user-create-nested-one-without-followings.input';

@InputType()
export class FollowCreateInput {

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

    @Field(() => UserCreateNestedOneWithoutFollowingsInput, {nullable:false})
    following!: UserCreateNestedOneWithoutFollowingsInput;
}
