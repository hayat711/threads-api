import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadCreateWithoutLikeInput } from './thread-create-without-like.input';
import { Type } from 'class-transformer';
import { ThreadCreateOrConnectWithoutLikeInput } from './thread-create-or-connect-without-like.input';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';

@InputType()
export class ThreadCreateNestedOneWithoutLikeInput {

    @Field(() => ThreadCreateWithoutLikeInput, {nullable:true})
    @Type(() => ThreadCreateWithoutLikeInput)
    create?: ThreadCreateWithoutLikeInput;

    @Field(() => ThreadCreateOrConnectWithoutLikeInput, {nullable:true})
    @Type(() => ThreadCreateOrConnectWithoutLikeInput)
    connectOrCreate?: ThreadCreateOrConnectWithoutLikeInput;

    @Field(() => ThreadWhereUniqueInput, {nullable:true})
    @Type(() => ThreadWhereUniqueInput)
    connect?: ThreadWhereUniqueInput;
}
