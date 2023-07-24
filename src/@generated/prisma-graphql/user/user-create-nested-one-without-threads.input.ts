import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutThreadsInput } from './user-create-without-threads.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutThreadsInput } from './user-create-or-connect-without-threads.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutThreadsInput {

    @Field(() => UserCreateWithoutThreadsInput, {nullable:true})
    @Type(() => UserCreateWithoutThreadsInput)
    create?: UserCreateWithoutThreadsInput;

    @Field(() => UserCreateOrConnectWithoutThreadsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutThreadsInput)
    connectOrCreate?: UserCreateOrConnectWithoutThreadsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
