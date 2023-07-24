import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReplyAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    likes?: true;
}
