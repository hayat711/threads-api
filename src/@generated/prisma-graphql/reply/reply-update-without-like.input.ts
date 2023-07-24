import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { UserUpdateOneRequiredWithoutRepliesNestedInput } from '../user/user-update-one-required-without-replies-nested.input';
import { ThreadUpdateOneRequiredWithoutRepliesNestedInput } from '../thread/thread-update-one-required-without-replies-nested.input';

@InputType()
export class ReplyUpdateWithoutLikeInput {

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

    @Field(() => UserUpdateOneRequiredWithoutRepliesNestedInput, {nullable:true})
    author?: UserUpdateOneRequiredWithoutRepliesNestedInput;

    @Field(() => ThreadUpdateOneRequiredWithoutRepliesNestedInput, {nullable:true})
    thread?: ThreadUpdateOneRequiredWithoutRepliesNestedInput;
}
