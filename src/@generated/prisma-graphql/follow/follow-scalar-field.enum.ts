import { registerEnumType } from '@nestjs/graphql';

export enum FollowScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    followerId = "followerId",
    followingId = "followingId",
    isBlocked = "isBlocked",
    isRestricted = "isRestricted"
}


registerEnumType(FollowScalarFieldEnum, { name: 'FollowScalarFieldEnum', description: undefined })
