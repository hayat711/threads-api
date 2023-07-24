import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplyCreateManyInput } from './reply-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyReplyArgs {

    @Field(() => [ReplyCreateManyInput], {nullable:false})
    @Type(() => ReplyCreateManyInput)
    data!: Array<ReplyCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
