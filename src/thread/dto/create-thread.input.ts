import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateThreadInput {
    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    content?: string;

    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    image?: string;

    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    mentionUserId?: string;

    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    originalThreadId?: string;

    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    quoteContent?: string;
}

@InputType()
export class RePostThreadInput {
    @IsNotEmpty()
    @IsString()
    @Field(() => String, { nullable: false })
    originalThreadId: string;

    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    quoteContent?: string;
}
