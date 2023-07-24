import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class ReplyScalarWhereWithAggregatesInput {

    @Field(() => [ReplyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReplyScalarWhereWithAggregatesInput>;

    @Field(() => [ReplyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReplyScalarWhereWithAggregatesInput>;

    @Field(() => [ReplyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReplyScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    authorId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    likes?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    threadId?: StringWithAggregatesFilter;
}
