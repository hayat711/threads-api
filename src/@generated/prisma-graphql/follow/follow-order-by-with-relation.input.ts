import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class FollowOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    followerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    followingId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isBlocked?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isRestricted?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    follower?: UserOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    following?: UserOrderByWithRelationInput;
}
