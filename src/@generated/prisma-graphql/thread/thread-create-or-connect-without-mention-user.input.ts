import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';
import { Type } from 'class-transformer';
import { ThreadCreateWithoutMentionUserInput } from './thread-create-without-mention-user.input';

@InputType()
export class ThreadCreateOrConnectWithoutMentionUserInput {

    @Field(() => ThreadWhereUniqueInput, {nullable:false})
    @Type(() => ThreadWhereUniqueInput)
    where!: ThreadWhereUniqueInput;

    @Field(() => ThreadCreateWithoutMentionUserInput, {nullable:false})
    @Type(() => ThreadCreateWithoutMentionUserInput)
    create!: ThreadCreateWithoutMentionUserInput;
}
