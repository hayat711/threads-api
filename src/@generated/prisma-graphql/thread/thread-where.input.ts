import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ReplyListRelationFilter } from '../reply/reply-list-relation-filter.input';
import { LikeListRelationFilter } from '../like/like-list-relation-filter.input';

@InputType()
export class ThreadWhereInput {

    @Field(() => [ThreadWhereInput], {nullable:true})
    AND?: Array<ThreadWhereInput>;

    @Field(() => [ThreadWhereInput], {nullable:true})
    OR?: Array<ThreadWhereInput>;

    @Field(() => [ThreadWhereInput], {nullable:true})
    NOT?: Array<ThreadWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    authorId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    image?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    repliesCount?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    likesCount?: IntFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    mention?: BoolNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    mentionUserId?: StringNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    author?: UserRelationFilter;

    @Field(() => ReplyListRelationFilter, {nullable:true})
    replies?: ReplyListRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    mentionUser?: UserRelationFilter;

    @Field(() => LikeListRelationFilter, {nullable:true})
    Like?: LikeListRelationFilter;
}
