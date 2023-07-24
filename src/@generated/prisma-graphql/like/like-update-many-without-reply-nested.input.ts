import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateWithoutReplyInput } from './like-create-without-reply.input';
import { Type } from 'class-transformer';
import { LikeCreateOrConnectWithoutReplyInput } from './like-create-or-connect-without-reply.input';
import { LikeUpsertWithWhereUniqueWithoutReplyInput } from './like-upsert-with-where-unique-without-reply.input';
import { LikeCreateManyReplyInputEnvelope } from './like-create-many-reply-input-envelope.input';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeUpdateWithWhereUniqueWithoutReplyInput } from './like-update-with-where-unique-without-reply.input';
import { LikeUpdateManyWithWhereWithoutReplyInput } from './like-update-many-with-where-without-reply.input';
import { LikeScalarWhereInput } from './like-scalar-where.input';

@InputType()
export class LikeUpdateManyWithoutReplyNestedInput {

    @Field(() => [LikeCreateWithoutReplyInput], {nullable:true})
    @Type(() => LikeCreateWithoutReplyInput)
    create?: Array<LikeCreateWithoutReplyInput>;

    @Field(() => [LikeCreateOrConnectWithoutReplyInput], {nullable:true})
    @Type(() => LikeCreateOrConnectWithoutReplyInput)
    connectOrCreate?: Array<LikeCreateOrConnectWithoutReplyInput>;

    @Field(() => [LikeUpsertWithWhereUniqueWithoutReplyInput], {nullable:true})
    @Type(() => LikeUpsertWithWhereUniqueWithoutReplyInput)
    upsert?: Array<LikeUpsertWithWhereUniqueWithoutReplyInput>;

    @Field(() => LikeCreateManyReplyInputEnvelope, {nullable:true})
    @Type(() => LikeCreateManyReplyInputEnvelope)
    createMany?: LikeCreateManyReplyInputEnvelope;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    set?: Array<LikeWhereUniqueInput>;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    disconnect?: Array<LikeWhereUniqueInput>;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    delete?: Array<LikeWhereUniqueInput>;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    connect?: Array<LikeWhereUniqueInput>;

    @Field(() => [LikeUpdateWithWhereUniqueWithoutReplyInput], {nullable:true})
    @Type(() => LikeUpdateWithWhereUniqueWithoutReplyInput)
    update?: Array<LikeUpdateWithWhereUniqueWithoutReplyInput>;

    @Field(() => [LikeUpdateManyWithWhereWithoutReplyInput], {nullable:true})
    @Type(() => LikeUpdateManyWithWhereWithoutReplyInput)
    updateMany?: Array<LikeUpdateManyWithWhereWithoutReplyInput>;

    @Field(() => [LikeScalarWhereInput], {nullable:true})
    @Type(() => LikeScalarWhereInput)
    deleteMany?: Array<LikeScalarWhereInput>;
}
