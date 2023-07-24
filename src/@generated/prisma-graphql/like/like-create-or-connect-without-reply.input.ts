import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';
import { LikeCreateWithoutReplyInput } from './like-create-without-reply.input';

@InputType()
export class LikeCreateOrConnectWithoutReplyInput {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    @Type(() => LikeWhereUniqueInput)
    where!: LikeWhereUniqueInput;

    @Field(() => LikeCreateWithoutReplyInput, {nullable:false})
    @Type(() => LikeCreateWithoutReplyInput)
    create!: LikeCreateWithoutReplyInput;
}
