import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMentionedThreadsInput } from './user-create-without-mentioned-threads.input';

@InputType()
export class UserCreateOrConnectWithoutMentionedThreadsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutMentionedThreadsInput, {nullable:false})
    @Type(() => UserCreateWithoutMentionedThreadsInput)
    create!: UserCreateWithoutMentionedThreadsInput;
}
