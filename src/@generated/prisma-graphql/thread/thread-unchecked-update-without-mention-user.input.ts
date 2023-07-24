import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { ReplyUncheckedUpdateManyWithoutThreadNestedInput } from '../reply/reply-unchecked-update-many-without-thread-nested.input';
import { LikeUncheckedUpdateManyWithoutThreadNestedInput } from '../like/like-unchecked-update-many-without-thread-nested.input';

@InputType()
export class ThreadUncheckedUpdateWithoutMentionUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    image?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    repliesCount?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    likesCount?: IntFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    mention?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => ReplyUncheckedUpdateManyWithoutThreadNestedInput, {nullable:true})
    replies?: ReplyUncheckedUpdateManyWithoutThreadNestedInput;

    @Field(() => LikeUncheckedUpdateManyWithoutThreadNestedInput, {nullable:true})
    Like?: LikeUncheckedUpdateManyWithoutThreadNestedInput;
}
