import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadCreateWithoutMentionUserInput } from './thread-create-without-mention-user.input';
import { Type } from 'class-transformer';
import { ThreadCreateOrConnectWithoutMentionUserInput } from './thread-create-or-connect-without-mention-user.input';
import { ThreadUpsertWithWhereUniqueWithoutMentionUserInput } from './thread-upsert-with-where-unique-without-mention-user.input';
import { ThreadCreateManyMentionUserInputEnvelope } from './thread-create-many-mention-user-input-envelope.input';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';
import { ThreadUpdateWithWhereUniqueWithoutMentionUserInput } from './thread-update-with-where-unique-without-mention-user.input';
import { ThreadUpdateManyWithWhereWithoutMentionUserInput } from './thread-update-many-with-where-without-mention-user.input';
import { ThreadScalarWhereInput } from './thread-scalar-where.input';

@InputType()
export class ThreadUpdateManyWithoutMentionUserNestedInput {

    @Field(() => [ThreadCreateWithoutMentionUserInput], {nullable:true})
    @Type(() => ThreadCreateWithoutMentionUserInput)
    create?: Array<ThreadCreateWithoutMentionUserInput>;

    @Field(() => [ThreadCreateOrConnectWithoutMentionUserInput], {nullable:true})
    @Type(() => ThreadCreateOrConnectWithoutMentionUserInput)
    connectOrCreate?: Array<ThreadCreateOrConnectWithoutMentionUserInput>;

    @Field(() => [ThreadUpsertWithWhereUniqueWithoutMentionUserInput], {nullable:true})
    @Type(() => ThreadUpsertWithWhereUniqueWithoutMentionUserInput)
    upsert?: Array<ThreadUpsertWithWhereUniqueWithoutMentionUserInput>;

    @Field(() => ThreadCreateManyMentionUserInputEnvelope, {nullable:true})
    @Type(() => ThreadCreateManyMentionUserInputEnvelope)
    createMany?: ThreadCreateManyMentionUserInputEnvelope;

    @Field(() => [ThreadWhereUniqueInput], {nullable:true})
    @Type(() => ThreadWhereUniqueInput)
    set?: Array<ThreadWhereUniqueInput>;

    @Field(() => [ThreadWhereUniqueInput], {nullable:true})
    @Type(() => ThreadWhereUniqueInput)
    disconnect?: Array<ThreadWhereUniqueInput>;

    @Field(() => [ThreadWhereUniqueInput], {nullable:true})
    @Type(() => ThreadWhereUniqueInput)
    delete?: Array<ThreadWhereUniqueInput>;

    @Field(() => [ThreadWhereUniqueInput], {nullable:true})
    @Type(() => ThreadWhereUniqueInput)
    connect?: Array<ThreadWhereUniqueInput>;

    @Field(() => [ThreadUpdateWithWhereUniqueWithoutMentionUserInput], {nullable:true})
    @Type(() => ThreadUpdateWithWhereUniqueWithoutMentionUserInput)
    update?: Array<ThreadUpdateWithWhereUniqueWithoutMentionUserInput>;

    @Field(() => [ThreadUpdateManyWithWhereWithoutMentionUserInput], {nullable:true})
    @Type(() => ThreadUpdateManyWithWhereWithoutMentionUserInput)
    updateMany?: Array<ThreadUpdateManyWithWhereWithoutMentionUserInput>;

    @Field(() => [ThreadScalarWhereInput], {nullable:true})
    @Type(() => ThreadScalarWhereInput)
    deleteMany?: Array<ThreadScalarWhereInput>;
}
