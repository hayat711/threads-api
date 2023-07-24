import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadUpdateWithoutRepliesInput } from './thread-update-without-replies.input';
import { Type } from 'class-transformer';
import { ThreadCreateWithoutRepliesInput } from './thread-create-without-replies.input';

@InputType()
export class ThreadUpsertWithoutRepliesInput {

    @Field(() => ThreadUpdateWithoutRepliesInput, {nullable:false})
    @Type(() => ThreadUpdateWithoutRepliesInput)
    update!: ThreadUpdateWithoutRepliesInput;

    @Field(() => ThreadCreateWithoutRepliesInput, {nullable:false})
    @Type(() => ThreadCreateWithoutRepliesInput)
    create!: ThreadCreateWithoutRepliesInput;
}
