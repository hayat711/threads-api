import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateManyThreadInput } from './like-create-many-thread.input';
import { Type } from 'class-transformer';

@InputType()
export class LikeCreateManyThreadInputEnvelope {

    @Field(() => [LikeCreateManyThreadInput], {nullable:false})
    @Type(() => LikeCreateManyThreadInput)
    data!: Array<LikeCreateManyThreadInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
