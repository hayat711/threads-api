import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutLikeInput } from './reply-create-without-like.input';
import { Type } from 'class-transformer';
import { ReplyCreateOrConnectWithoutLikeInput } from './reply-create-or-connect-without-like.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';

@InputType()
export class ReplyCreateNestedOneWithoutLikeInput {

    @Field(() => ReplyCreateWithoutLikeInput, {nullable:true})
    @Type(() => ReplyCreateWithoutLikeInput)
    create?: ReplyCreateWithoutLikeInput;

    @Field(() => ReplyCreateOrConnectWithoutLikeInput, {nullable:true})
    @Type(() => ReplyCreateOrConnectWithoutLikeInput)
    connectOrCreate?: ReplyCreateOrConnectWithoutLikeInput;

    @Field(() => ReplyWhereUniqueInput, {nullable:true})
    @Type(() => ReplyWhereUniqueInput)
    connect?: ReplyWhereUniqueInput;
}
