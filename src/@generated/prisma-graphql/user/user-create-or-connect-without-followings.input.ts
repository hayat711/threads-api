import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFollowingsInput } from './user-create-without-followings.input';

@InputType()
export class UserCreateOrConnectWithoutFollowingsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutFollowingsInput, {nullable:false})
    @Type(() => UserCreateWithoutFollowingsInput)
    create!: UserCreateWithoutFollowingsInput;
}
