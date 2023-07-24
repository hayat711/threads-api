import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class FollowWhereInput {

    @Field(() => [FollowWhereInput], {nullable:true})
    AND?: Array<FollowWhereInput>;

    @Field(() => [FollowWhereInput], {nullable:true})
    OR?: Array<FollowWhereInput>;

    @Field(() => [FollowWhereInput], {nullable:true})
    NOT?: Array<FollowWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    follower?: UserRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    following?: UserRelationFilter;
}
