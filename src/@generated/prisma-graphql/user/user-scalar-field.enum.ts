import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    username = "username",
    password = "password",
    bio = "bio",
    photo = "photo",
    verified = "verified",
    link = "link",
    isPrivate = "isPrivate"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
