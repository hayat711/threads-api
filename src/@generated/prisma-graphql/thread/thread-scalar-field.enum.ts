import { registerEnumType } from '@nestjs/graphql';

export enum ThreadScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    content = "content",
    authorId = "authorId",
    image = "image",
    repliesCount = "repliesCount",
    likesCount = "likesCount",
    mention = "mention",
    mentionUserId = "mentionUserId"
}


registerEnumType(ThreadScalarFieldEnum, { name: 'ThreadScalarFieldEnum', description: undefined })
