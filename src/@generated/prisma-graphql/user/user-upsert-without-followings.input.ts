import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFollowingsInput } from './user-update-without-followings.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFollowingsInput } from './user-create-without-followings.input';

@InputType()
export class UserUpsertWithoutFollowingsInput {

    @Field(() => UserUpdateWithoutFollowingsInput, {nullable:false})
    @Type(() => UserUpdateWithoutFollowingsInput)
    update!: UserUpdateWithoutFollowingsInput;

    @Field(() => UserCreateWithoutFollowingsInput, {nullable:false})
    @Type(() => UserCreateWithoutFollowingsInput)
    create!: UserCreateWithoutFollowingsInput;
}
