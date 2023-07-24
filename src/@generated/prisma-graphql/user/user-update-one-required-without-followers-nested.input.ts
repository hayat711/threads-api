import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFollowersInput } from './user-create-or-connect-without-followers.input';
import { UserUpsertWithoutFollowersInput } from './user-upsert-without-followers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFollowersInput } from './user-update-without-followers.input';

@InputType()
export class UserUpdateOneRequiredWithoutFollowersNestedInput {

    @Field(() => UserCreateWithoutFollowersInput, {nullable:true})
    @Type(() => UserCreateWithoutFollowersInput)
    create?: UserCreateWithoutFollowersInput;

    @Field(() => UserCreateOrConnectWithoutFollowersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFollowersInput)
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput;

    @Field(() => UserUpsertWithoutFollowersInput, {nullable:true})
    @Type(() => UserUpsertWithoutFollowersInput)
    upsert?: UserUpsertWithoutFollowersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFollowersInput, {nullable:true})
    @Type(() => UserUpdateWithoutFollowersInput)
    update?: UserUpdateWithoutFollowersInput;
}
