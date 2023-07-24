import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ThreadSumAggregate {

    @Field(() => Int, {nullable:true})
    repliesCount?: number;

    @Field(() => Int, {nullable:true})
    likesCount?: number;
}
