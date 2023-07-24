import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { Type } from 'class-transformer';
import { ReplyCreateInput } from './reply-create.input';
import { ReplyUpdateInput } from './reply-update.input';

@ArgsType()
export class UpsertOneReplyArgs {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    @Type(() => ReplyWhereUniqueInput)
    where!: ReplyWhereUniqueInput;

    @Field(() => ReplyCreateInput, {nullable:false})
    @Type(() => ReplyCreateInput)
    create!: ReplyCreateInput;

    @Field(() => ReplyUpdateInput, {nullable:false})
    @Type(() => ReplyUpdateInput)
    update!: ReplyUpdateInput;
}
