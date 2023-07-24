import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateManyAuthorInput } from './reply-create-many-author.input';
import { Type } from 'class-transformer';

@InputType()
export class ReplyCreateManyAuthorInputEnvelope {

    @Field(() => [ReplyCreateManyAuthorInput], {nullable:false})
    @Type(() => ReplyCreateManyAuthorInput)
    data!: Array<ReplyCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
