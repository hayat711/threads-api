import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ThreadCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    content!: number;

    @Field(() => Int, {nullable:false})
    authorId!: number;

    @Field(() => Int, {nullable:false})
    image!: number;

    @Field(() => Int, {nullable:false})
    repliesCount!: number;

    @Field(() => Int, {nullable:false})
    likesCount!: number;

    @Field(() => Int, {nullable:false})
    mention!: number;

    @Field(() => Int, {nullable:false})
    mentionUserId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
