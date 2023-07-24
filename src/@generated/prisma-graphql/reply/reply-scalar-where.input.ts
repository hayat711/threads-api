import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class ReplyScalarWhereInput {

    @Field(() => [ReplyScalarWhereInput], {nullable:true})
    AND?: Array<ReplyScalarWhereInput>;

    @Field(() => [ReplyScalarWhereInput], {nullable:true})
    OR?: Array<ReplyScalarWhereInput>;

    @Field(() => [ReplyScalarWhereInput], {nullable:true})
    NOT?: Array<ReplyScalarWhereInput>;

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
}
