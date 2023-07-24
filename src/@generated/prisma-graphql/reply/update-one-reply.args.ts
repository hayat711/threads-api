import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplyUpdateInput } from './reply-update.input';
import { Type } from 'class-transformer';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';

@ArgsType()
export class UpdateOneReplyArgs {

    @Field(() => ReplyUpdateInput, {nullable:false})
    @Type(() => ReplyUpdateInput)
    data!: ReplyUpdateInput;

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    @Type(() => ReplyWhereUniqueInput)
    where!: ReplyWhereUniqueInput;
}
