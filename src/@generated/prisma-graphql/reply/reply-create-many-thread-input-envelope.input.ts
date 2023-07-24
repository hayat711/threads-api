import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateManyThreadInput } from './reply-create-many-thread.input';
import { Type } from 'class-transformer';

@InputType()
export class ReplyCreateManyThreadInputEnvelope {

    @Field(() => [ReplyCreateManyThreadInput], {nullable:false})
    @Type(() => ReplyCreateManyThreadInput)
    data!: Array<ReplyCreateManyThreadInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
