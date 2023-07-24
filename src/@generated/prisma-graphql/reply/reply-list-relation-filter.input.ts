import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyWhereInput } from './reply-where.input';

@InputType()
export class ReplyListRelationFilter {

    @Field(() => ReplyWhereInput, {nullable:true})
    every?: ReplyWhereInput;

    @Field(() => ReplyWhereInput, {nullable:true})
    some?: ReplyWhereInput;

    @Field(() => ReplyWhereInput, {nullable:true})
    none?: ReplyWhereInput;
}
