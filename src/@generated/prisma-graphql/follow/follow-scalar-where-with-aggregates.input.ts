import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class FollowScalarWhereWithAggregatesInput {

    @Field(() => [FollowScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FollowScalarWhereWithAggregatesInput>;

    @Field(() => [FollowScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FollowScalarWhereWithAggregatesInput>;

    @Field(() => [FollowScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FollowScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    followerId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    followingId?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isBlocked?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isRestricted?: BoolWithAggregatesFilter;
}
