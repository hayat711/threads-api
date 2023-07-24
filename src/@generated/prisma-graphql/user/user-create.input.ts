import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadCreateNestedManyWithoutAuthorInput } from '../thread/thread-create-nested-many-without-author.input';
import { ThreadCreateNestedManyWithoutMentionUserInput } from '../thread/thread-create-nested-many-without-mention-user.input';
import { ReplyCreateNestedManyWithoutAuthorInput } from '../reply/reply-create-nested-many-without-author.input';
import { LikeCreateNestedManyWithoutUserInput } from '../like/like-create-nested-many-without-user.input';
import { FollowCreateNestedManyWithoutFollowerInput } from '../follow/follow-create-nested-many-without-follower.input';
import { FollowCreateNestedManyWithoutFollowingInput } from '../follow/follow-create-nested-many-without-following.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    bio?: string;

    @Field(() => String, {nullable:true})
    photo?: string;

    @Field(() => Boolean, {nullable:true})
    verified?: boolean;

    @Field(() => String, {nullable:true})
    link?: string;

    @Field(() => ThreadCreateNestedManyWithoutAuthorInput, {nullable:true})
    threads?: ThreadCreateNestedManyWithoutAuthorInput;

    @Field(() => ThreadCreateNestedManyWithoutMentionUserInput, {nullable:true})
    mentionedThreads?: ThreadCreateNestedManyWithoutMentionUserInput;

    @Field(() => ReplyCreateNestedManyWithoutAuthorInput, {nullable:true})
    replies?: ReplyCreateNestedManyWithoutAuthorInput;

    @Field(() => LikeCreateNestedManyWithoutUserInput, {nullable:true})
    likes?: LikeCreateNestedManyWithoutUserInput;

    @Field(() => FollowCreateNestedManyWithoutFollowerInput, {nullable:true})
    followers?: FollowCreateNestedManyWithoutFollowerInput;

    @Field(() => FollowCreateNestedManyWithoutFollowingInput, {nullable:true})
    followings?: FollowCreateNestedManyWithoutFollowingInput;
}
