import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLikesInput } from './user-create-without-likes.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutLikesInput } from './user-create-or-connect-without-likes.input';
import { UserUpsertWithoutLikesInput } from './user-upsert-without-likes.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutLikesInput } from './user-update-without-likes.input';

@InputType()
export class UserUpdateOneRequiredWithoutLikesNestedInput {

    @Field(() => UserCreateWithoutLikesInput, {nullable:true})
    @Type(() => UserCreateWithoutLikesInput)
    create?: UserCreateWithoutLikesInput;

    @Field(() => UserCreateOrConnectWithoutLikesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLikesInput)
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput;

    @Field(() => UserUpsertWithoutLikesInput, {nullable:true})
    @Type(() => UserUpsertWithoutLikesInput)
    upsert?: UserUpsertWithoutLikesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutLikesInput, {nullable:true})
    @Type(() => UserUpdateWithoutLikesInput)
    update?: UserUpdateWithoutLikesInput;
}
