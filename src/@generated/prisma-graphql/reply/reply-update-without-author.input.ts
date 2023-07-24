import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ThreadUpdateOneRequiredWithoutRepliesNestedInput } from '../thread/thread-update-one-required-without-replies-nested.input';
import { LikeUpdateManyWithoutReplyNestedInput } from '../like/like-update-many-without-reply-nested.input';

@InputType()
export class ReplyUpdateWithoutAuthorInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    likes?: IntFieldUpdateOperationsInput;

    @Field(() => ThreadUpdateOneRequiredWithoutRepliesNestedInput, {nullable:true})
    thread?: ThreadUpdateOneRequiredWithoutRepliesNestedInput;

    @Field(() => LikeUpdateManyWithoutReplyNestedInput, {nullable:true})
    Like?: LikeUpdateManyWithoutReplyNestedInput;
}
