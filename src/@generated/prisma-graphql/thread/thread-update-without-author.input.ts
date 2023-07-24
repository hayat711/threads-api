import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { ReplyUpdateManyWithoutThreadNestedInput } from '../reply/reply-update-many-without-thread-nested.input';
import { UserUpdateOneWithoutMentionedThreadsNestedInput } from '../user/user-update-one-without-mentioned-threads-nested.input';
import { LikeUpdateManyWithoutThreadNestedInput } from '../like/like-update-many-without-thread-nested.input';

@InputType()
export class ThreadUpdateWithoutAuthorInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    image?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    repliesCount?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    likesCount?: IntFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    mention?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => ReplyUpdateManyWithoutThreadNestedInput, {nullable:true})
    replies?: ReplyUpdateManyWithoutThreadNestedInput;

    @Field(() => UserUpdateOneWithoutMentionedThreadsNestedInput, {nullable:true})
    mentionUser?: UserUpdateOneWithoutMentionedThreadsNestedInput;

    @Field(() => LikeUpdateManyWithoutThreadNestedInput, {nullable:true})
    Like?: LikeUpdateManyWithoutThreadNestedInput;
}
