import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateReplyInput {
    @IsString()
    @IsNotEmpty()
    @Field(() => String)
    content: string;

    @IsString()
    @IsNotEmpty()
    @Field(() => String)
    threadId: string;

    @IsOptional()
    @IsString({ each: true })
    @Field(() => String, { nullable: true })
    image?: string;
}

