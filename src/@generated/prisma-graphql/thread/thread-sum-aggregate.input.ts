import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ThreadSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    repliesCount?: true;

    @Field(() => Boolean, {nullable:true})
    likesCount?: true;
}
