import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateOneRequiredWithoutFollowersNestedInput } from '../user/user-update-one-required-without-followers-nested.input';
import { UserUpdateOneRequiredWithoutFollowingsNestedInput } from '../user/user-update-one-required-without-followings-nested.input';

@InputType()
export class FollowUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isBlocked?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isRestricted?: BoolFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutFollowersNestedInput, {nullable:true})
    follower?: UserUpdateOneRequiredWithoutFollowersNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutFollowingsNestedInput, {nullable:true})
    following?: UserUpdateOneRequiredWithoutFollowingsNestedInput;
}
