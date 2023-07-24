import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutLikesInput } from './user-update-without-likes.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutLikesInput } from './user-create-without-likes.input';

@InputType()
export class UserUpsertWithoutLikesInput {

    @Field(() => UserUpdateWithoutLikesInput, {nullable:false})
    @Type(() => UserUpdateWithoutLikesInput)
    update!: UserUpdateWithoutLikesInput;

    @Field(() => UserCreateWithoutLikesInput, {nullable:false})
    @Type(() => UserCreateWithoutLikesInput)
    create!: UserCreateWithoutLikesInput;
}
