import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';

@InputType()
export class ReplyCreateManyThreadInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => String, {nullable:false})
    @Validator.MaxLength(200)
    content!: string;

    @Field(() => Int, {nullable:true})
    likes?: number;
}
