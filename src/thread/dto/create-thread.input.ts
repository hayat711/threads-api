import { InputType, Int, Field,  } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateThreadInput {
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    content: string;

    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    image?: string;

    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    mentionUserId?: string;
}

