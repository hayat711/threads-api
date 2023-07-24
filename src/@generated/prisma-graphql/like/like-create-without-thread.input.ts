import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutLikesInput } from '../user/user-create-nested-one-without-likes.input';
import { ReplyCreateNestedOneWithoutLikeInput } from '../reply/reply-create-nested-one-without-like.input';

@InputType()
export class LikeCreateWithoutThreadInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutLikesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutLikesInput;

    @Field(() => ReplyCreateNestedOneWithoutLikeInput, {nullable:false})
    reply!: ReplyCreateNestedOneWithoutLikeInput;
}
