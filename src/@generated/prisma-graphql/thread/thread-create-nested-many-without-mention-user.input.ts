import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadCreateWithoutMentionUserInput } from './thread-create-without-mention-user.input';
import { Type } from 'class-transformer';
import { ThreadCreateOrConnectWithoutMentionUserInput } from './thread-create-or-connect-without-mention-user.input';
import { ThreadCreateManyMentionUserInputEnvelope } from './thread-create-many-mention-user-input-envelope.input';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';

@InputType()
export class ThreadCreateNestedManyWithoutMentionUserInput {

    @Field(() => [ThreadCreateWithoutMentionUserInput], {nullable:true})
    @Type(() => ThreadCreateWithoutMentionUserInput)
    create?: Array<ThreadCreateWithoutMentionUserInput>;

    @Field(() => [ThreadCreateOrConnectWithoutMentionUserInput], {nullable:true})
    @Type(() => ThreadCreateOrConnectWithoutMentionUserInput)
    connectOrCreate?: Array<ThreadCreateOrConnectWithoutMentionUserInput>;

    @Field(() => ThreadCreateManyMentionUserInputEnvelope, {nullable:true})
    @Type(() => ThreadCreateManyMentionUserInputEnvelope)
    createMany?: ThreadCreateManyMentionUserInputEnvelope;

    @Field(() => [ThreadWhereUniqueInput], {nullable:true})
    @Type(() => ThreadWhereUniqueInput)
    connect?: Array<ThreadWhereUniqueInput>;
}
