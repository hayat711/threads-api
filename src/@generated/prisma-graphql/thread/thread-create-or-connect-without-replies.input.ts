import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';
import { Type } from 'class-transformer';
import { ThreadCreateWithoutRepliesInput } from './thread-create-without-replies.input';

@InputType()
export class ThreadCreateOrConnectWithoutRepliesInput {

    @Field(() => ThreadWhereUniqueInput, {nullable:false})
    @Type(() => ThreadWhereUniqueInput)
    where!: ThreadWhereUniqueInput;

    @Field(() => ThreadCreateWithoutRepliesInput, {nullable:false})
    @Type(() => ThreadCreateWithoutRepliesInput)
    create!: ThreadCreateWithoutRepliesInput;
}
