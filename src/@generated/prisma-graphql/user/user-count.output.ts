import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    threads?: number;

    @Field(() => Int, {nullable:false})
    mentionedThreads?: number;

    @Field(() => Int, {nullable:false})
    replies?: number;

    @Field(() => Int, {nullable:false})
    likes?: number;

    @Field(() => Int, {nullable:false})
    followers?: number;

    @Field(() => Int, {nullable:false})
    followings?: number;
}
