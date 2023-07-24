import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ThreadUpdateOneRequiredWithoutLikeNestedInput } from '../thread/thread-update-one-required-without-like-nested.input';
import { ReplyUpdateOneRequiredWithoutLikeNestedInput } from '../reply/reply-update-one-required-without-like-nested.input';

@InputType()
export class LikeUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ThreadUpdateOneRequiredWithoutLikeNestedInput, {nullable:true})
    thread?: ThreadUpdateOneRequiredWithoutLikeNestedInput;

    @Field(() => ReplyUpdateOneRequiredWithoutLikeNestedInput, {nullable:true})
    reply?: ReplyUpdateOneRequiredWithoutLikeNestedInput;
}
