import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ThreadAvgAggregate {

    @Field(() => Float, {nullable:true})
    repliesCount?: number;

    @Field(() => Float, {nullable:true})
    likesCount?: number;
}
