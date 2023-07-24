import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Follow {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    followerId!: string;

    @Field(() => String, {nullable:false})
    followingId!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isBlocked!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isRestricted!: boolean;

    @Field(() => User, {nullable:false})
    follower?: User;

    @Field(() => User, {nullable:false})
    following?: User;
}
