import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutLikeInput } from './reply-create-without-like.input';
import { Type } from 'class-transformer';
import { ReplyCreateOrConnectWithoutLikeInput } from './reply-create-or-connect-without-like.input';
import { ReplyUpsertWithoutLikeInput } from './reply-upsert-without-like.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyUpdateWithoutLikeInput } from './reply-update-without-like.input';

@InputType()
export class ReplyUpdateOneRequiredWithoutLikeNestedInput {

    @Field(() => ReplyCreateWithoutLikeInput, {nullable:true})
    @Type(() => ReplyCreateWithoutLikeInput)
    create?: ReplyCreateWithoutLikeInput;

    @Field(() => ReplyCreateOrConnectWithoutLikeInput, {nullable:true})
    @Type(() => ReplyCreateOrConnectWithoutLikeInput)
    connectOrCreate?: ReplyCreateOrConnectWithoutLikeInput;

    @Field(() => ReplyUpsertWithoutLikeInput, {nullable:true})
    @Type(() => ReplyUpsertWithoutLikeInput)
    upsert?: ReplyUpsertWithoutLikeInput;

    @Field(() => ReplyWhereUniqueInput, {nullable:true})
    @Type(() => ReplyWhereUniqueInput)
    connect?: ReplyWhereUniqueInput;

    @Field(() => ReplyUpdateWithoutLikeInput, {nullable:true})
    @Type(() => ReplyUpdateWithoutLikeInput)
    update?: ReplyUpdateWithoutLikeInput;
}
