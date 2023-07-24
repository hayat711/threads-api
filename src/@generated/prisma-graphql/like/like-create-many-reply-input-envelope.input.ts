import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateManyReplyInput } from './like-create-many-reply.input';
import { Type } from 'class-transformer';

@InputType()
export class LikeCreateManyReplyInputEnvelope {

    @Field(() => [LikeCreateManyReplyInput], {nullable:false})
    @Type(() => LikeCreateManyReplyInput)
    data!: Array<LikeCreateManyReplyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
