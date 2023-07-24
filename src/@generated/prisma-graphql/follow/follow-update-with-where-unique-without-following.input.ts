import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FollowWhereUniqueInput } from './follow-where-unique.input';
import { Type } from 'class-transformer';
import { FollowUpdateWithoutFollowingInput } from './follow-update-without-following.input';

@InputType()
export class FollowUpdateWithWhereUniqueWithoutFollowingInput {

    @Field(() => FollowWhereUniqueInput, {nullable:false})
    @Type(() => FollowWhereUniqueInput)
    where!: FollowWhereUniqueInput;

    @Field(() => FollowUpdateWithoutFollowingInput, {nullable:false})
    @Type(() => FollowUpdateWithoutFollowingInput)
    data!: FollowUpdateWithoutFollowingInput;
}
