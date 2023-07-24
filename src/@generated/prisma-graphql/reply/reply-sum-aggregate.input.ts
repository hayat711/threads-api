import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReplySumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    likes?: true;
}
