import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutThreadsInput } from '../user/user-create-nested-one-without-threads.input';
import { ReplyCreateNestedManyWithoutThreadInput } from '../reply/reply-create-nested-many-without-thread.input';
import { UserCreateNestedOneWithoutMentionedThreadsInput } from '../user/user-create-nested-one-without-mentioned-threads.input';

@InputType()
export class ThreadCreateWithoutLikeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    @Validator.MaxLength(500)
    content!: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => Int, {nullable:true})
    repliesCount?: number;

    @Field(() => Int, {nullable:true})
    likesCount?: number;

    @Field(() => Boolean, {nullable:true})
    mention?: boolean;

    @Field(() => UserCreateNestedOneWithoutThreadsInput, {nullable:false})
    author!: UserCreateNestedOneWithoutThreadsInput;

    @Field(() => ReplyCreateNestedManyWithoutThreadInput, {nullable:true})
    replies?: ReplyCreateNestedManyWithoutThreadInput;

    @Field(() => UserCreateNestedOneWithoutMentionedThreadsInput, {nullable:true})
    mentionUser?: UserCreateNestedOneWithoutMentionedThreadsInput;
}
