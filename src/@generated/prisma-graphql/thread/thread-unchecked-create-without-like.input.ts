import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { ReplyUncheckedCreateNestedManyWithoutThreadInput } from '../reply/reply-unchecked-create-nested-many-without-thread.input';

@InputType()
export class ThreadUncheckedCreateWithoutLikeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    @Validator.MaxLength(500)
    content!: string;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => Int, {nullable:true})
    repliesCount?: number;

    @Field(() => Int, {nullable:true})
    likesCount?: number;

    @Field(() => Boolean, {nullable:true})
    mention?: boolean;

    @Field(() => String, {nullable:true})
    mentionUserId?: string;

    @Field(() => ReplyUncheckedCreateNestedManyWithoutThreadInput, {nullable:true})
    replies?: ReplyUncheckedCreateNestedManyWithoutThreadInput;
}
