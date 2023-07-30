import { IsNotEmpty, IsOptional, Length } from 'class-validator';
import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
    @Field(() => String)
    id: string;

    @IsOptional()
    @IsNotEmpty({
        message: 'Username can not be empty',
    })
    @Field(() => String, { nullable: true })
    username?: string;

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
    @Field(() => String, { nullable: true })
    photo?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    link?: string;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    isPrivate?: boolean;
}
