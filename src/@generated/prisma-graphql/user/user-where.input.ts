import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { ThreadListRelationFilter } from '../thread/thread-list-relation-filter.input';
import { ReplyListRelationFilter } from '../reply/reply-list-relation-filter.input';
import { LikeListRelationFilter } from '../like/like-list-relation-filter.input';
import { FollowListRelationFilter } from '../follow/follow-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bio?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    photo?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    verified?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    link?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPrivate?: BoolFilter;

    @Field(() => ThreadListRelationFilter, {nullable:true})
    threads?: ThreadListRelationFilter;

    @Field(() => ThreadListRelationFilter, {nullable:true})
    mentionedThreads?: ThreadListRelationFilter;

    @Field(() => ReplyListRelationFilter, {nullable:true})
    replies?: ReplyListRelationFilter;

    @Field(() => LikeListRelationFilter, {nullable:true})
    likes?: LikeListRelationFilter;

    @Field(() => FollowListRelationFilter, {nullable:true})
    followers?: FollowListRelationFilter;

    @Field(() => FollowListRelationFilter, {nullable:true})
    followings?: FollowListRelationFilter;
}
