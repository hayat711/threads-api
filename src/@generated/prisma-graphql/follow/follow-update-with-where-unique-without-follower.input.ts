import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FollowWhereUniqueInput } from './follow-where-unique.input';
import { Type } from 'class-transformer';
import { FollowUpdateWithoutFollowerInput } from './follow-update-without-follower.input';

@InputType()
export class FollowUpdateWithWhereUniqueWithoutFollowerInput {

    @Field(() => FollowWhereUniqueInput, {nullable:false})
    @Type(() => FollowWhereUniqueInput)
    where!: FollowWhereUniqueInput;

    @Field(() => FollowUpdateWithoutFollowerInput, {nullable:false})
    @Type(() => FollowUpdateWithoutFollowerInput)
    data!: FollowUpdateWithoutFollowerInput;
}
