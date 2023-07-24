import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutThreadsInput } from './user-create-without-threads.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutThreadsInput } from './user-create-or-connect-without-threads.input';
import { UserUpsertWithoutThreadsInput } from './user-upsert-without-threads.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutThreadsInput } from './user-update-without-threads.input';

@InputType()
export class UserUpdateOneRequiredWithoutThreadsNestedInput {

    @Field(() => UserCreateWithoutThreadsInput, {nullable:true})
    @Type(() => UserCreateWithoutThreadsInput)
    create?: UserCreateWithoutThreadsInput;

    @Field(() => UserCreateOrConnectWithoutThreadsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutThreadsInput)
    connectOrCreate?: UserCreateOrConnectWithoutThreadsInput;

    @Field(() => UserUpsertWithoutThreadsInput, {nullable:true})
    @Type(() => UserUpsertWithoutThreadsInput)
    upsert?: UserUpsertWithoutThreadsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutThreadsInput, {nullable:true})
    @Type(() => UserUpdateWithoutThreadsInput)
    update?: UserUpdateWithoutThreadsInput;
}
