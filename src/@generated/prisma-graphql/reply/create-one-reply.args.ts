import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplyCreateInput } from './reply-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneReplyArgs {

    @Field(() => ReplyCreateInput, {nullable:false})
    @Type(() => ReplyCreateInput)
    data!: ReplyCreateInput;
}
