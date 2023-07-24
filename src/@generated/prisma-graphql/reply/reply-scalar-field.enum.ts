import { registerEnumType } from '@nestjs/graphql';

export enum ReplyScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    authorId = "authorId",
    content = "content",
    likes = "likes",
    threadId = "threadId"
}


registerEnumType(ReplyScalarFieldEnum, { name: 'ReplyScalarFieldEnum', description: undefined })
