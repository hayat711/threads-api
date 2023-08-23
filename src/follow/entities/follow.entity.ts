import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseEntity } from 'src/common/entity/base.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Follow extends BaseEntity {
    @Field(() => User)
    follower: User;

    @Field(() => String)
    followerId: string;

    @Field(() => User)
    following: User;
    @Field(() => String)
    followingId: string;

    @Field(() => Boolean)
    isBlocked: boolean;

    @Field(() => Boolean)
    isRestricted: boolean;
}

@ObjectType()
export class FollowResponse {
    @Field(() => String)
    userId: string;

    @Field(() => String)
    username: string;

    @Field(() => String, { nullable: true })
    photo: string | null;

    @Field(() => Boolean, { nullable: false})
    isPrivate: boolean;

    @Field(() => Boolean, { nullable: false})
    verified: boolean
}
