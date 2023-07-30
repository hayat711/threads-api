import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadUncheckedCreateNestedManyWithoutAuthorInput } from '../thread/thread-unchecked-create-nested-many-without-author.input';
import { ThreadUncheckedCreateNestedManyWithoutMentionUserInput } from '../thread/thread-unchecked-create-nested-many-without-mention-user.input';
import { ReplyUncheckedCreateNestedManyWithoutAuthorInput } from '../reply/reply-unchecked-create-nested-many-without-author.input';
import { LikeUncheckedCreateNestedManyWithoutUserInput } from '../like/like-unchecked-create-nested-many-without-user.input';
import { FollowUncheckedCreateNestedManyWithoutFollowerInput } from '../follow/follow-unchecked-create-nested-many-without-follower.input';

@InputType()
export class UserUncheckedCreateWithoutFollowingsInput {

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

    @Field(() => Boolean, {nullable:true})
    isPrivate?: boolean;

    @Field(() => ThreadUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    threads?: ThreadUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => ThreadUncheckedCreateNestedManyWithoutMentionUserInput, {nullable:true})
    mentionedThreads?: ThreadUncheckedCreateNestedManyWithoutMentionUserInput;

    @Field(() => ReplyUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    replies?: ReplyUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => LikeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => FollowUncheckedCreateNestedManyWithoutFollowerInput, {nullable:true})
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput;
}
