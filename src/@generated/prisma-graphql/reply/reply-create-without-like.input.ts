import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRepliesInput } from '../user/user-create-nested-one-without-replies.input';
import { ThreadCreateNestedOneWithoutRepliesInput } from '../thread/thread-create-nested-one-without-replies.input';

@InputType()
export class ReplyCreateWithoutLikeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    @Validator.MaxLength(200)
    content!: string;

    @Field(() => Int, {nullable:true})
    likes?: number;

    @Field(() => UserCreateNestedOneWithoutRepliesInput, {nullable:false})
    author!: UserCreateNestedOneWithoutRepliesInput;

    @Field(() => ThreadCreateNestedOneWithoutRepliesInput, {nullable:false})
    thread!: ThreadCreateNestedOneWithoutRepliesInput;
}
