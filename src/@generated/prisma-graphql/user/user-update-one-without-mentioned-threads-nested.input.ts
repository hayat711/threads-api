import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMentionedThreadsInput } from './user-create-without-mentioned-threads.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMentionedThreadsInput } from './user-create-or-connect-without-mentioned-threads.input';
import { UserUpsertWithoutMentionedThreadsInput } from './user-upsert-without-mentioned-threads.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutMentionedThreadsInput } from './user-update-without-mentioned-threads.input';

@InputType()
export class UserUpdateOneWithoutMentionedThreadsNestedInput {

    @Field(() => UserCreateWithoutMentionedThreadsInput, {nullable:true})
    @Type(() => UserCreateWithoutMentionedThreadsInput)
    create?: UserCreateWithoutMentionedThreadsInput;

    @Field(() => UserCreateOrConnectWithoutMentionedThreadsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMentionedThreadsInput)
    connectOrCreate?: UserCreateOrConnectWithoutMentionedThreadsInput;

    @Field(() => UserUpsertWithoutMentionedThreadsInput, {nullable:true})
    @Type(() => UserUpsertWithoutMentionedThreadsInput)
    upsert?: UserUpsertWithoutMentionedThreadsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutMentionedThreadsInput, {nullable:true})
    @Type(() => UserUpdateWithoutMentionedThreadsInput)
    update?: UserUpdateWithoutMentionedThreadsInput;
}
