import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FollowWhereUniqueInput } from './follow-where-unique.input';
import { Type } from 'class-transformer';
import { FollowUpdateWithoutFollowingInput } from './follow-update-without-following.input';
import { FollowCreateWithoutFollowingInput } from './follow-create-without-following.input';

@InputType()
export class FollowUpsertWithWhereUniqueWithoutFollowingInput {

    @Field(() => FollowWhereUniqueInput, {nullable:false})
    @Type(() => FollowWhereUniqueInput)
    where!: FollowWhereUniqueInput;

    @Field(() => FollowUpdateWithoutFollowingInput, {nullable:false})
    @Type(() => FollowUpdateWithoutFollowingInput)
    update!: FollowUpdateWithoutFollowingInput;

    @Field(() => FollowCreateWithoutFollowingInput, {nullable:false})
    @Type(() => FollowCreateWithoutFollowingInput)
    create!: FollowCreateWithoutFollowingInput;
}
