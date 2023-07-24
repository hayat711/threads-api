import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutLikesInput } from './user-create-without-likes.input';

@InputType()
export class UserCreateOrConnectWithoutLikesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutLikesInput, {nullable:false})
    @Type(() => UserCreateWithoutLikesInput)
    create!: UserCreateWithoutLikesInput;
}
