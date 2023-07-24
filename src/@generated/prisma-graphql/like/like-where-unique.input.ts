import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeUserIdThreadIdCompoundUniqueInput } from './like-user-id-thread-id-compound-unique.input';

@InputType()
export class LikeWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => LikeUserIdThreadIdCompoundUniqueInput, {nullable:true})
    userId_threadId?: LikeUserIdThreadIdCompoundUniqueInput;
}
