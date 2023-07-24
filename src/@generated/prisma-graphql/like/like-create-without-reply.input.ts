import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutLikesInput } from '../user/user-create-nested-one-without-likes.input';
import { ThreadCreateNestedOneWithoutLikeInput } from '../thread/thread-create-nested-one-without-like.input';

@InputType()
export class LikeCreateWithoutReplyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutLikesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutLikesInput;

    @Field(() => ThreadCreateNestedOneWithoutLikeInput, {nullable:false})
    thread!: ThreadCreateNestedOneWithoutLikeInput;
}
