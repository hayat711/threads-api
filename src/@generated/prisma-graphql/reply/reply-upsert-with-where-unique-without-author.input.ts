import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { Type } from 'class-transformer';
import { ReplyUpdateWithoutAuthorInput } from './reply-update-without-author.input';
import { ReplyCreateWithoutAuthorInput } from './reply-create-without-author.input';

@InputType()
export class ReplyUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    @Type(() => ReplyWhereUniqueInput)
    where!: ReplyWhereUniqueInput;

    @Field(() => ReplyUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => ReplyUpdateWithoutAuthorInput)
    update!: ReplyUpdateWithoutAuthorInput;

    @Field(() => ReplyCreateWithoutAuthorInput, {nullable:false})
    @Type(() => ReplyCreateWithoutAuthorInput)
    create!: ReplyCreateWithoutAuthorInput;
}
