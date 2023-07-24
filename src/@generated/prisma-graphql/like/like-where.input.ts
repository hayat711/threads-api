import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ThreadRelationFilter } from '../thread/thread-relation-filter.input';
import { ReplyRelationFilter } from '../reply/reply-relation-filter.input';

@InputType()
export class LikeWhereInput {

    @Field(() => [LikeWhereInput], {nullable:true})
    AND?: Array<LikeWhereInput>;

    @Field(() => [LikeWhereInput], {nullable:true})
    OR?: Array<LikeWhereInput>;

    @Field(() => [LikeWhereInput], {nullable:true})
    NOT?: Array<LikeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    threadId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    replyId?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => ThreadRelationFilter, {nullable:true})
    thread?: ThreadRelationFilter;

    @Field(() => ReplyRelationFilter, {nullable:true})
    reply?: ReplyRelationFilter;
}
