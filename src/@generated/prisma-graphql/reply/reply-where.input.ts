import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ThreadRelationFilter } from '../thread/thread-relation-filter.input';
import { LikeListRelationFilter } from '../like/like-list-relation-filter.input';

@InputType()
export class ReplyWhereInput {

    @Field(() => [ReplyWhereInput], {nullable:true})
    AND?: Array<ReplyWhereInput>;

    @Field(() => [ReplyWhereInput], {nullable:true})
    OR?: Array<ReplyWhereInput>;

    @Field(() => [ReplyWhereInput], {nullable:true})
    NOT?: Array<ReplyWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    authorId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    likes?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    threadId?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    author?: UserRelationFilter;

    @Field(() => ThreadRelationFilter, {nullable:true})
    thread?: ThreadRelationFilter;

    @Field(() => LikeListRelationFilter, {nullable:true})
    Like?: LikeListRelationFilter;
}
