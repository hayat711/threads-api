import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { ThreadUpdateManyWithoutAuthorNestedInput } from '../thread/thread-update-many-without-author-nested.input';
import { ReplyUpdateManyWithoutAuthorNestedInput } from '../reply/reply-update-many-without-author-nested.input';
import { LikeUpdateManyWithoutUserNestedInput } from '../like/like-update-many-without-user-nested.input';
import { FollowUpdateManyWithoutFollowerNestedInput } from '../follow/follow-update-many-without-follower-nested.input';
import { FollowUpdateManyWithoutFollowingNestedInput } from '../follow/follow-update-many-without-following-nested.input';

@InputType()
export class UserUpdateWithoutMentionedThreadsInput {

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

    @Field(() => ThreadUpdateManyWithoutAuthorNestedInput, {nullable:true})
    threads?: ThreadUpdateManyWithoutAuthorNestedInput;

    @Field(() => ReplyUpdateManyWithoutAuthorNestedInput, {nullable:true})
    replies?: ReplyUpdateManyWithoutAuthorNestedInput;

    @Field(() => LikeUpdateManyWithoutUserNestedInput, {nullable:true})
    likes?: LikeUpdateManyWithoutUserNestedInput;

    @Field(() => FollowUpdateManyWithoutFollowerNestedInput, {nullable:true})
    followers?: FollowUpdateManyWithoutFollowerNestedInput;

    @Field(() => FollowUpdateManyWithoutFollowingNestedInput, {nullable:true})
    followings?: FollowUpdateManyWithoutFollowingNestedInput;
}
