import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';

@InputType()
export class ThreadCreateManyAuthorInput {

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

    @Field(() => String, {nullable:true})
    mentionUserId?: string;
}
