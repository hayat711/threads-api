import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMentionedThreadsInput } from './user-create-without-mentioned-threads.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMentionedThreadsInput } from './user-create-or-connect-without-mentioned-threads.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutMentionedThreadsInput {

    @Field(() => UserCreateWithoutMentionedThreadsInput, {nullable:true})
    @Type(() => UserCreateWithoutMentionedThreadsInput)
    create?: UserCreateWithoutMentionedThreadsInput;

    @Field(() => UserCreateOrConnectWithoutMentionedThreadsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMentionedThreadsInput)
    connectOrCreate?: UserCreateOrConnectWithoutMentionedThreadsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
