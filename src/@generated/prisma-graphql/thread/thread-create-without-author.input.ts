import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { ReplyCreateNestedManyWithoutThreadInput } from '../reply/reply-create-nested-many-without-thread.input';
import { UserCreateNestedOneWithoutMentionedThreadsInput } from '../user/user-create-nested-one-without-mentioned-threads.input';
import { LikeCreateNestedManyWithoutThreadInput } from '../like/like-create-nested-many-without-thread.input';

@InputType()
export class ThreadCreateWithoutAuthorInput {

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

    @Field(() => ReplyCreateNestedManyWithoutThreadInput, {nullable:true})
    replies?: ReplyCreateNestedManyWithoutThreadInput;

    @Field(() => UserCreateNestedOneWithoutMentionedThreadsInput, {nullable:true})
    mentionUser?: UserCreateNestedOneWithoutMentionedThreadsInput;

    @Field(() => LikeCreateNestedManyWithoutThreadInput, {nullable:true})
    Like?: LikeCreateNestedManyWithoutThreadInput;
}
