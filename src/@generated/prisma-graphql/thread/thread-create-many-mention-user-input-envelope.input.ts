import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadCreateManyMentionUserInput } from './thread-create-many-mention-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ThreadCreateManyMentionUserInputEnvelope {

    @Field(() => [ThreadCreateManyMentionUserInput], {nullable:false})
    @Type(() => ThreadCreateManyMentionUserInput)
    data!: Array<ThreadCreateManyMentionUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
