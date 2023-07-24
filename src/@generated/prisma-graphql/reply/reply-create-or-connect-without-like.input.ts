import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { Type } from 'class-transformer';
import { ReplyCreateWithoutLikeInput } from './reply-create-without-like.input';

@InputType()
export class ReplyCreateOrConnectWithoutLikeInput {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    @Type(() => ReplyWhereUniqueInput)
    where!: ReplyWhereUniqueInput;

    @Field(() => ReplyCreateWithoutLikeInput, {nullable:false})
    @Type(() => ReplyCreateWithoutLikeInput)
    create!: ReplyCreateWithoutLikeInput;
}
