import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFollowingsInput } from './user-create-without-followings.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFollowingsInput } from './user-create-or-connect-without-followings.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFollowingsInput {

    @Field(() => UserCreateWithoutFollowingsInput, {nullable:true})
    @Type(() => UserCreateWithoutFollowingsInput)
    create?: UserCreateWithoutFollowingsInput;

    @Field(() => UserCreateOrConnectWithoutFollowingsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFollowingsInput)
    connectOrCreate?: UserCreateOrConnectWithoutFollowingsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
