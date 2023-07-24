import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';
import { LikeUpdateWithoutReplyInput } from './like-update-without-reply.input';
import { LikeCreateWithoutReplyInput } from './like-create-without-reply.input';

@InputType()
export class LikeUpsertWithWhereUniqueWithoutReplyInput {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    @Type(() => LikeWhereUniqueInput)
    where!: LikeWhereUniqueInput;

    @Field(() => LikeUpdateWithoutReplyInput, {nullable:false})
    @Type(() => LikeUpdateWithoutReplyInput)
    update!: LikeUpdateWithoutReplyInput;

    @Field(() => LikeCreateWithoutReplyInput, {nullable:false})
    @Type(() => LikeCreateWithoutReplyInput)
    create!: LikeCreateWithoutReplyInput;
}
