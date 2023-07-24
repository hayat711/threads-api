import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';

@InputType()
export class ThreadScalarWhereInput {

    @Field(() => [ThreadScalarWhereInput], {nullable:true})
    AND?: Array<ThreadScalarWhereInput>;

    @Field(() => [ThreadScalarWhereInput], {nullable:true})
    OR?: Array<ThreadScalarWhereInput>;

    @Field(() => [ThreadScalarWhereInput], {nullable:true})
    NOT?: Array<ThreadScalarWhereInput>;

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
}
