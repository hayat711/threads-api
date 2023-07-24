import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplyUpdateManyMutationInput } from './reply-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ReplyWhereInput } from './reply-where.input';

@ArgsType()
export class UpdateManyReplyArgs {

    @Field(() => ReplyUpdateManyMutationInput, {nullable:false})
    @Type(() => ReplyUpdateManyMutationInput)
    data!: ReplyUpdateManyMutationInput;

    @Field(() => ReplyWhereInput, {nullable:true})
    @Type(() => ReplyWhereInput)
    where?: ReplyWhereInput;
}
