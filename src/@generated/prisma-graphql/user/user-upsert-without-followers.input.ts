import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFollowersInput } from './user-update-without-followers.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';

@InputType()
export class UserUpsertWithoutFollowersInput {

    @Field(() => UserUpdateWithoutFollowersInput, {nullable:false})
    @Type(() => UserUpdateWithoutFollowersInput)
    update!: UserUpdateWithoutFollowersInput;

    @Field(() => UserCreateWithoutFollowersInput, {nullable:false})
    @Type(() => UserCreateWithoutFollowersInput)
    create!: UserCreateWithoutFollowersInput;
}
