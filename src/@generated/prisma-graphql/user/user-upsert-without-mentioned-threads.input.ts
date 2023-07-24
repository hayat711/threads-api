import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutMentionedThreadsInput } from './user-update-without-mentioned-threads.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMentionedThreadsInput } from './user-create-without-mentioned-threads.input';

@InputType()
export class UserUpsertWithoutMentionedThreadsInput {

    @Field(() => UserUpdateWithoutMentionedThreadsInput, {nullable:false})
    @Type(() => UserUpdateWithoutMentionedThreadsInput)
    update!: UserUpdateWithoutMentionedThreadsInput;

    @Field(() => UserCreateWithoutMentionedThreadsInput, {nullable:false})
    @Type(() => UserCreateWithoutMentionedThreadsInput)
    create!: UserCreateWithoutMentionedThreadsInput;
}
