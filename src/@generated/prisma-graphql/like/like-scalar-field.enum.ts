import { registerEnumType } from '@nestjs/graphql';

export enum LikeScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId",
    threadId = "threadId",
    replyId = "replyId"
}


registerEnumType(LikeScalarFieldEnum, { name: 'LikeScalarFieldEnum', description: undefined })
