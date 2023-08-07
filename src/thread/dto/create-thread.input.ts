import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateThreadInput {
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    content: string;

    @IsOptional()
    @IsString({ each: true })
    @Field(() => [String], { nullable: true })
    images?: string[];

    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    mentionUserId?: string;
}
