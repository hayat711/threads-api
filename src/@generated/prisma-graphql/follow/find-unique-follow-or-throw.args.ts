import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FollowWhereUniqueInput } from './follow-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueFollowOrThrowArgs {

    @Field(() => FollowWhereUniqueInput, {nullable:false})
    @Type(() => FollowWhereUniqueInput)
    where!: FollowWhereUniqueInput;
}
