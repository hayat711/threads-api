import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRepliesInput } from './user-create-without-replies.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRepliesInput } from './user-create-or-connect-without-replies.input';
import { UserUpsertWithoutRepliesInput } from './user-upsert-without-replies.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutRepliesInput } from './user-update-without-replies.input';

@InputType()
export class UserUpdateOneRequiredWithoutRepliesNestedInput {

    @Field(() => UserCreateWithoutRepliesInput, {nullable:true})
    @Type(() => UserCreateWithoutRepliesInput)
    create?: UserCreateWithoutRepliesInput;

    @Field(() => UserCreateOrConnectWithoutRepliesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRepliesInput)
    connectOrCreate?: UserCreateOrConnectWithoutRepliesInput;

    @Field(() => UserUpsertWithoutRepliesInput, {nullable:true})
    @Type(() => UserUpsertWithoutRepliesInput)
    upsert?: UserUpsertWithoutRepliesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutRepliesInput, {nullable:true})
    @Type(() => UserUpdateWithoutRepliesInput)
    update?: UserUpdateWithoutRepliesInput;
}
