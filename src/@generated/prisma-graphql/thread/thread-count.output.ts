import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ThreadCount {

    @Field(() => Int, {nullable:false})
    replies?: number;

    @Field(() => Int, {nullable:false})
    Like?: number;
}
