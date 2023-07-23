import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Length, NotContains } from 'class-validator';
import { Profile } from 'src/user/entities/user.entity';

@InputType()
export class CredentialsInput {
    @IsString()
    @IsNotEmpty({
        message: 'Username cannot be empty or whitespace',
    })
    @Field(() => String)
    username: string;

    @IsNotEmpty({
        message: 'Password cannot be empty or whitespace',
    })
    @NotContains(' ', {
        message: 'Password cannot be empty or whitespace',
    })
    @Length(6, 60, {
        message: 'Password must be between 6 and 60 characters long',
    })
    @Field(() => String)
    password: string;
}

type UserProfile = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    username: string;
    password: string;
    bio: string;
    photo: string;
    verified: boolean;
    link: string;
  };
  

@ObjectType()
export class AuthResult {
    @Field(() => Int, { nullable: true })
    statusCode?: number;

    @Field(() => String, { nullable: true })
    message?: string;

    @Field(() => Profile, { nullable: true })   
    profile?: UserProfile;
}