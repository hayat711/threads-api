import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

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
}
