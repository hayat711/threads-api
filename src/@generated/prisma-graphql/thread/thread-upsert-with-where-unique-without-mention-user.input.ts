import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';
import { Type } from 'class-transformer';
import { ThreadUpdateWithoutMentionUserInput } from './thread-update-without-mention-user.input';
import { ThreadCreateWithoutMentionUserInput } from './thread-create-without-mention-user.input';

@InputType()
export class ThreadUpsertWithWhereUniqueWithoutMentionUserInput {

    @Field(() => ThreadWhereUniqueInput, {nullable:false})
    @Type(() => ThreadWhereUniqueInput)
    where!: ThreadWhereUniqueInput;

    @Field(() => ThreadUpdateWithoutMentionUserInput, {nullable:false})
    @Type(() => ThreadUpdateWithoutMentionUserInput)
    update!: ThreadUpdateWithoutMentionUserInput;

    @Field(() => ThreadCreateWithoutMentionUserInput, {nullable:false})
    @Type(() => ThreadCreateWithoutMentionUserInput)
    create!: ThreadCreateWithoutMentionUserInput;
}
