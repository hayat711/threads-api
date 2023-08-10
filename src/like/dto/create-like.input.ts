import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateLikeThread {
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    threadId: string;


    
}


@InputType()
export class CreateLikeReply {
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    replyId: string;
}
