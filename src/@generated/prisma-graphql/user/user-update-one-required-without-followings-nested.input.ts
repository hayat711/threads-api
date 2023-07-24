import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFollowingsInput } from './user-create-without-followings.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFollowingsInput } from './user-create-or-connect-without-followings.input';
import { UserUpsertWithoutFollowingsInput } from './user-upsert-without-followings.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFollowingsInput } from './user-update-without-followings.input';

@InputType()
export class UserUpdateOneRequiredWithoutFollowingsNestedInput {

    @Field(() => UserCreateWithoutFollowingsInput, {nullable:true})
    @Type(() => UserCreateWithoutFollowingsInput)
    create?: UserCreateWithoutFollowingsInput;

    @Field(() => UserCreateOrConnectWithoutFollowingsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFollowingsInput)
    connectOrCreate?: UserCreateOrConnectWithoutFollowingsInput;

    @Field(() => UserUpsertWithoutFollowingsInput, {nullable:true})
    @Type(() => UserUpsertWithoutFollowingsInput)
    upsert?: UserUpsertWithoutFollowingsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFollowingsInput, {nullable:true})
    @Type(() => UserUpdateWithoutFollowingsInput)
    update?: UserUpdateWithoutFollowingsInput;
}
