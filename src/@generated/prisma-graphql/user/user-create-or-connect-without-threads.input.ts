import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutThreadsInput } from './user-create-without-threads.input';

@InputType()
export class UserCreateOrConnectWithoutThreadsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutThreadsInput, {nullable:false})
    @Type(() => UserCreateWithoutThreadsInput)
    create!: UserCreateWithoutThreadsInput;
}
