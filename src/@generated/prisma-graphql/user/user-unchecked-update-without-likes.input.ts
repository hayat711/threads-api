import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { ThreadUncheckedUpdateManyWithoutAuthorNestedInput } from '../thread/thread-unchecked-update-many-without-author-nested.input';
import { ThreadUncheckedUpdateManyWithoutMentionUserNestedInput } from '../thread/thread-unchecked-update-many-without-mention-user-nested.input';
import { ReplyUncheckedUpdateManyWithoutAuthorNestedInput } from '../reply/reply-unchecked-update-many-without-author-nested.input';
import { FollowUncheckedUpdateManyWithoutFollowerNestedInput } from '../follow/follow-unchecked-update-many-without-follower-nested.input';
import { FollowUncheckedUpdateManyWithoutFollowingNestedInput } from '../follow/follow-unchecked-update-many-without-following-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutLikesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bio?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    photo?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    verified?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    link?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPrivate?: BoolFieldUpdateOperationsInput;

    @Field(() => ThreadUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    threads?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput;

    @Field(() => ThreadUncheckedUpdateManyWithoutMentionUserNestedInput, {nullable:true})
    mentionedThreads?: ThreadUncheckedUpdateManyWithoutMentionUserNestedInput;

    @Field(() => ReplyUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    replies?: ReplyUncheckedUpdateManyWithoutAuthorNestedInput;

    @Field(() => FollowUncheckedUpdateManyWithoutFollowerNestedInput, {nullable:true})
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput;

    @Field(() => FollowUncheckedUpdateManyWithoutFollowingNestedInput, {nullable:true})
    followings?: FollowUncheckedUpdateManyWithoutFollowingNestedInput;
}
