import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadCreateWithoutRepliesInput } from './thread-create-without-replies.input';
import { Type } from 'class-transformer';
import { ThreadCreateOrConnectWithoutRepliesInput } from './thread-create-or-connect-without-replies.input';
import { ThreadUpsertWithoutRepliesInput } from './thread-upsert-without-replies.input';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';
import { ThreadUpdateWithoutRepliesInput } from './thread-update-without-replies.input';

@InputType()
export class ThreadUpdateOneRequiredWithoutRepliesNestedInput {

    @Field(() => ThreadCreateWithoutRepliesInput, {nullable:true})
    @Type(() => ThreadCreateWithoutRepliesInput)
    create?: ThreadCreateWithoutRepliesInput;

    @Field(() => ThreadCreateOrConnectWithoutRepliesInput, {nullable:true})
    @Type(() => ThreadCreateOrConnectWithoutRepliesInput)
    connectOrCreate?: ThreadCreateOrConnectWithoutRepliesInput;

    @Field(() => ThreadUpsertWithoutRepliesInput, {nullable:true})
    @Type(() => ThreadUpsertWithoutRepliesInput)
    upsert?: ThreadUpsertWithoutRepliesInput;

    @Field(() => ThreadWhereUniqueInput, {nullable:true})
    @Type(() => ThreadWhereUniqueInput)
    connect?: ThreadWhereUniqueInput;

    @Field(() => ThreadUpdateWithoutRepliesInput, {nullable:true})
    @Type(() => ThreadUpdateWithoutRepliesInput)
    update?: ThreadUpdateWithoutRepliesInput;
}
