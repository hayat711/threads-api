import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadCreateNestedOneWithoutLikeInput } from '../thread/thread-create-nested-one-without-like.input';
import { ReplyCreateNestedOneWithoutLikeInput } from '../reply/reply-create-nested-one-without-like.input';

@InputType()
export class LikeCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ThreadCreateNestedOneWithoutLikeInput, {nullable:false})
    thread!: ThreadCreateNestedOneWithoutLikeInput;

    @Field(() => ReplyCreateNestedOneWithoutLikeInput, {nullable:false})
    reply!: ReplyCreateNestedOneWithoutLikeInput;
}
