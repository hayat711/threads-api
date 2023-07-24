import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';
import { Type } from 'class-transformer';
import { ThreadCreateWithoutLikeInput } from './thread-create-without-like.input';

@InputType()
export class ThreadCreateOrConnectWithoutLikeInput {

    @Field(() => ThreadWhereUniqueInput, {nullable:false})
    @Type(() => ThreadWhereUniqueInput)
    where!: ThreadWhereUniqueInput;

    @Field(() => ThreadCreateWithoutLikeInput, {nullable:false})
    @Type(() => ThreadCreateWithoutLikeInput)
    create!: ThreadCreateWithoutLikeInput;
}
