import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FollowWhereUniqueInput } from './follow-where-unique.input';
import { Type } from 'class-transformer';
import { FollowCreateWithoutFollowingInput } from './follow-create-without-following.input';

@InputType()
export class FollowCreateOrConnectWithoutFollowingInput {

    @Field(() => FollowWhereUniqueInput, {nullable:false})
    @Type(() => FollowWhereUniqueInput)
    where!: FollowWhereUniqueInput;

    @Field(() => FollowCreateWithoutFollowingInput, {nullable:false})
    @Type(() => FollowCreateWithoutFollowingInput)
    create!: FollowCreateWithoutFollowingInput;
}
