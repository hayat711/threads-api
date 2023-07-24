import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutThreadsInput } from './user-update-without-threads.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutThreadsInput } from './user-create-without-threads.input';

@InputType()
export class UserUpsertWithoutThreadsInput {

    @Field(() => UserUpdateWithoutThreadsInput, {nullable:false})
    @Type(() => UserUpdateWithoutThreadsInput)
    update!: UserUpdateWithoutThreadsInput;

    @Field(() => UserCreateWithoutThreadsInput, {nullable:false})
    @Type(() => UserCreateWithoutThreadsInput)
    create!: UserCreateWithoutThreadsInput;
}
