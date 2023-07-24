import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRepliesInput } from './user-create-without-replies.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRepliesInput } from './user-create-or-connect-without-replies.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutRepliesInput {

    @Field(() => UserCreateWithoutRepliesInput, {nullable:true})
    @Type(() => UserCreateWithoutRepliesInput)
    create?: UserCreateWithoutRepliesInput;

    @Field(() => UserCreateOrConnectWithoutRepliesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRepliesInput)
    connectOrCreate?: UserCreateOrConnectWithoutRepliesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
