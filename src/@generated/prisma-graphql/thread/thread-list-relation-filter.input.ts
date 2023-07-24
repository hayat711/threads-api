import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadWhereInput } from './thread-where.input';

@InputType()
export class ThreadListRelationFilter {

    @Field(() => ThreadWhereInput, {nullable:true})
    every?: ThreadWhereInput;

    @Field(() => ThreadWhereInput, {nullable:true})
    some?: ThreadWhereInput;

    @Field(() => ThreadWhereInput, {nullable:true})
    none?: ThreadWhereInput;
}
