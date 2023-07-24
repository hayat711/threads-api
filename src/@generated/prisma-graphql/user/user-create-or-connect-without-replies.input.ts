import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRepliesInput } from './user-create-without-replies.input';

@InputType()
export class UserCreateOrConnectWithoutRepliesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutRepliesInput, {nullable:false})
    @Type(() => UserCreateWithoutRepliesInput)
    create!: UserCreateWithoutRepliesInput;
}
