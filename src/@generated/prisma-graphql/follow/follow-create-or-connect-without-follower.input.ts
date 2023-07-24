import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FollowWhereUniqueInput } from './follow-where-unique.input';
import { Type } from 'class-transformer';
import { FollowCreateWithoutFollowerInput } from './follow-create-without-follower.input';

@InputType()
export class FollowCreateOrConnectWithoutFollowerInput {

    @Field(() => FollowWhereUniqueInput, {nullable:false})
    @Type(() => FollowWhereUniqueInput)
    where!: FollowWhereUniqueInput;

    @Field(() => FollowCreateWithoutFollowerInput, {nullable:false})
    @Type(() => FollowCreateWithoutFollowerInput)
    create!: FollowCreateWithoutFollowerInput;
}
