import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplyWhereInput } from './reply-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyReplyArgs {

    @Field(() => ReplyWhereInput, {nullable:true})
    @Type(() => ReplyWhereInput)
    where?: ReplyWhereInput;
}
