import { InputType, Int, Field } from '@nestjs/graphql';
import {
    IsNotEmpty,
    IsOptional,
    IsString,
    Length,
    MinLength,
    NotContains,
} from 'class-validator';

@InputType()
export class CreateUserInput {
    @IsString()
    @Field(() => String, { description: 'username must be unique' })
    username: string;



    @IsOptional()
    @IsString()
    @Length(2, 255, {
        message: 'name must be between 2 and 255 characters',
    })
    @Field(() => String, {nullable: true ,description: 'name must be 2 or more characters' })
    name?: string;

    @IsNotEmpty({ message: 'Password is required' })
    @NotContains(' ', { message: 'Password cannot contain spaces' })
    @Length(6, 60, { message: 'Password must be between 6 and 60 characters' })
    @Field(() => String)
    password: string;

    @IsOptional()
    @IsNotEmpty({
        message: 'Bio can not be empty or whitespace',
    })
    @Length(3, 255, {
        message: 'Bio must be between 3 and 255 characters',
    })
    @Field(() => String, { nullable: true })
    bio?: string;

    @IsOptional()
    photo?: string;
}
