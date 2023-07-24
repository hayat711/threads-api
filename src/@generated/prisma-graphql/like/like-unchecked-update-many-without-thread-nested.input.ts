import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateWithoutThreadInput } from './like-create-without-thread.input';
import { Type } from 'class-transformer';
import { LikeCreateOrConnectWithoutThreadInput } from './like-create-or-connect-without-thread.input';
import { LikeUpsertWithWhereUniqueWithoutThreadInput } from './like-upsert-with-where-unique-without-thread.input';
import { LikeCreateManyThreadInputEnvelope } from './like-create-many-thread-input-envelope.input';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeUpdateWithWhereUniqueWithoutThreadInput } from './like-update-with-where-unique-without-thread.input';
import { LikeUpdateManyWithWhereWithoutThreadInput } from './like-update-many-with-where-without-thread.input';
import { LikeScalarWhereInput } from './like-scalar-where.input';

@InputType()
export class LikeUncheckedUpdateManyWithoutThreadNestedInput {

    @Field(() => [LikeCreateWithoutThreadInput], {nullable:true})
    @Type(() => LikeCreateWithoutThreadInput)
    create?: Array<LikeCreateWithoutThreadInput>;

    @Field(() => [LikeCreateOrConnectWithoutThreadInput], {nullable:true})
    @Type(() => LikeCreateOrConnectWithoutThreadInput)
    connectOrCreate?: Array<LikeCreateOrConnectWithoutThreadInput>;

    @Field(() => [LikeUpsertWithWhereUniqueWithoutThreadInput], {nullable:true})
    @Type(() => LikeUpsertWithWhereUniqueWithoutThreadInput)
    upsert?: Array<LikeUpsertWithWhereUniqueWithoutThreadInput>;

    @Field(() => LikeCreateManyThreadInputEnvelope, {nullable:true})
    @Type(() => LikeCreateManyThreadInputEnvelope)
    createMany?: LikeCreateManyThreadInputEnvelope;

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

    @Field(() => [LikeUpdateWithWhereUniqueWithoutThreadInput], {nullable:true})
    @Type(() => LikeUpdateWithWhereUniqueWithoutThreadInput)
    update?: Array<LikeUpdateWithWhereUniqueWithoutThreadInput>;

    @Field(() => [LikeUpdateManyWithWhereWithoutThreadInput], {nullable:true})
    @Type(() => LikeUpdateManyWithWhereWithoutThreadInput)
    updateMany?: Array<LikeUpdateManyWithWhereWithoutThreadInput>;

    @Field(() => [LikeScalarWhereInput], {nullable:true})
    @Type(() => LikeScalarWhereInput)
    deleteMany?: Array<LikeScalarWhereInput>;
}
