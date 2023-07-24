import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadCreateWithoutLikeInput } from './thread-create-without-like.input';
import { Type } from 'class-transformer';
import { ThreadCreateOrConnectWithoutLikeInput } from './thread-create-or-connect-without-like.input';
import { ThreadUpsertWithoutLikeInput } from './thread-upsert-without-like.input';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';
import { ThreadUpdateWithoutLikeInput } from './thread-update-without-like.input';

@InputType()
export class ThreadUpdateOneRequiredWithoutLikeNestedInput {

    @Field(() => ThreadCreateWithoutLikeInput, {nullable:true})
    @Type(() => ThreadCreateWithoutLikeInput)
    create?: ThreadCreateWithoutLikeInput;

    @Field(() => ThreadCreateOrConnectWithoutLikeInput, {nullable:true})
    @Type(() => ThreadCreateOrConnectWithoutLikeInput)
    connectOrCreate?: ThreadCreateOrConnectWithoutLikeInput;

    @Field(() => ThreadUpsertWithoutLikeInput, {nullable:true})
    @Type(() => ThreadUpsertWithoutLikeInput)
    upsert?: ThreadUpsertWithoutLikeInput;

    @Field(() => ThreadWhereUniqueInput, {nullable:true})
    @Type(() => ThreadWhereUniqueInput)
    connect?: ThreadWhereUniqueInput;

    @Field(() => ThreadUpdateWithoutLikeInput, {nullable:true})
    @Type(() => ThreadUpdateWithoutLikeInput)
    update?: ThreadUpdateWithoutLikeInput;
}
