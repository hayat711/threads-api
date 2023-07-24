import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadCreateWithoutRepliesInput } from './thread-create-without-replies.input';
import { Type } from 'class-transformer';
import { ThreadCreateOrConnectWithoutRepliesInput } from './thread-create-or-connect-without-replies.input';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';

@InputType()
export class ThreadCreateNestedOneWithoutRepliesInput {

    @Field(() => ThreadCreateWithoutRepliesInput, {nullable:true})
    @Type(() => ThreadCreateWithoutRepliesInput)
    create?: ThreadCreateWithoutRepliesInput;

    @Field(() => ThreadCreateOrConnectWithoutRepliesInput, {nullable:true})
    @Type(() => ThreadCreateOrConnectWithoutRepliesInput)
    connectOrCreate?: ThreadCreateOrConnectWithoutRepliesInput;

    @Field(() => ThreadWhereUniqueInput, {nullable:true})
    @Type(() => ThreadWhereUniqueInput)
    connect?: ThreadWhereUniqueInput;
}
