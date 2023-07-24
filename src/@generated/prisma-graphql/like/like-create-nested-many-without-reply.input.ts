import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateWithoutReplyInput } from './like-create-without-reply.input';
import { Type } from 'class-transformer';
import { LikeCreateOrConnectWithoutReplyInput } from './like-create-or-connect-without-reply.input';
import { LikeCreateManyReplyInputEnvelope } from './like-create-many-reply-input-envelope.input';
import { LikeWhereUniqueInput } from './like-where-unique.input';

@InputType()
export class LikeCreateNestedManyWithoutReplyInput {

    @Field(() => [LikeCreateWithoutReplyInput], {nullable:true})
    @Type(() => LikeCreateWithoutReplyInput)
    create?: Array<LikeCreateWithoutReplyInput>;

    @Field(() => [LikeCreateOrConnectWithoutReplyInput], {nullable:true})
    @Type(() => LikeCreateOrConnectWithoutReplyInput)
    connectOrCreate?: Array<LikeCreateOrConnectWithoutReplyInput>;

    @Field(() => LikeCreateManyReplyInputEnvelope, {nullable:true})
    @Type(() => LikeCreateManyReplyInputEnvelope)
    createMany?: LikeCreateManyReplyInputEnvelope;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    connect?: Array<LikeWhereUniqueInput>;
}
