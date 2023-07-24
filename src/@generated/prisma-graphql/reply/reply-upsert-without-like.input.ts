import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyUpdateWithoutLikeInput } from './reply-update-without-like.input';
import { Type } from 'class-transformer';
import { ReplyCreateWithoutLikeInput } from './reply-create-without-like.input';

@InputType()
export class ReplyUpsertWithoutLikeInput {

    @Field(() => ReplyUpdateWithoutLikeInput, {nullable:false})
    @Type(() => ReplyUpdateWithoutLikeInput)
    update!: ReplyUpdateWithoutLikeInput;

    @Field(() => ReplyCreateWithoutLikeInput, {nullable:false})
    @Type(() => ReplyCreateWithoutLikeInput)
    create!: ReplyCreateWithoutLikeInput;
}
