import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class FollowScalarWhereInput {

    @Field(() => [FollowScalarWhereInput], {nullable:true})
    AND?: Array<FollowScalarWhereInput>;

    @Field(() => [FollowScalarWhereInput], {nullable:true})
    OR?: Array<FollowScalarWhereInput>;

    @Field(() => [FollowScalarWhereInput], {nullable:true})
    NOT?: Array<FollowScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    followerId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    followingId?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isBlocked?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isRestricted?: BoolFilter;
}
