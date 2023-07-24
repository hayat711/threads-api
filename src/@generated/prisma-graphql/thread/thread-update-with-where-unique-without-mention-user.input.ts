import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';
import { Type } from 'class-transformer';
import { ThreadUpdateWithoutMentionUserInput } from './thread-update-without-mention-user.input';

@InputType()
export class ThreadUpdateWithWhereUniqueWithoutMentionUserInput {

    @Field(() => ThreadWhereUniqueInput, {nullable:false})
    @Type(() => ThreadWhereUniqueInput)
    where!: ThreadWhereUniqueInput;

    @Field(() => ThreadUpdateWithoutMentionUserInput, {nullable:false})
    @Type(() => ThreadUpdateWithoutMentionUserInput)
    data!: ThreadUpdateWithoutMentionUserInput;
}
