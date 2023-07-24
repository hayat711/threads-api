import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadUpdateWithoutLikeInput } from './thread-update-without-like.input';
import { Type } from 'class-transformer';
import { ThreadCreateWithoutLikeInput } from './thread-create-without-like.input';

@InputType()
export class ThreadUpsertWithoutLikeInput {

    @Field(() => ThreadUpdateWithoutLikeInput, {nullable:false})
    @Type(() => ThreadUpdateWithoutLikeInput)
    update!: ThreadUpdateWithoutLikeInput;

    @Field(() => ThreadCreateWithoutLikeInput, {nullable:false})
    @Type(() => ThreadCreateWithoutLikeInput)
    create!: ThreadCreateWithoutLikeInput;
}
