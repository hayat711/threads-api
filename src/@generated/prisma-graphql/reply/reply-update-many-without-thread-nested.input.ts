import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutThreadInput } from './reply-create-without-thread.input';
import { Type } from 'class-transformer';
import { ReplyCreateOrConnectWithoutThreadInput } from './reply-create-or-connect-without-thread.input';
import { ReplyUpsertWithWhereUniqueWithoutThreadInput } from './reply-upsert-with-where-unique-without-thread.input';
import { ReplyCreateManyThreadInputEnvelope } from './reply-create-many-thread-input-envelope.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyUpdateWithWhereUniqueWithoutThreadInput } from './reply-update-with-where-unique-without-thread.input';
import { ReplyUpdateManyWithWhereWithoutThreadInput } from './reply-update-many-with-where-without-thread.input';
import { ReplyScalarWhereInput } from './reply-scalar-where.input';

@InputType()
export class ReplyUpdateManyWithoutThreadNestedInput {

    @Field(() => [ReplyCreateWithoutThreadInput], {nullable:true})
    @Type(() => ReplyCreateWithoutThreadInput)
    create?: Array<ReplyCreateWithoutThreadInput>;

    @Field(() => [ReplyCreateOrConnectWithoutThreadInput], {nullable:true})
    @Type(() => ReplyCreateOrConnectWithoutThreadInput)
    connectOrCreate?: Array<ReplyCreateOrConnectWithoutThreadInput>;

    @Field(() => [ReplyUpsertWithWhereUniqueWithoutThreadInput], {nullable:true})
    @Type(() => ReplyUpsertWithWhereUniqueWithoutThreadInput)
    upsert?: Array<ReplyUpsertWithWhereUniqueWithoutThreadInput>;

    @Field(() => ReplyCreateManyThreadInputEnvelope, {nullable:true})
    @Type(() => ReplyCreateManyThreadInputEnvelope)
    createMany?: ReplyCreateManyThreadInputEnvelope;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    @Type(() => ReplyWhereUniqueInput)
    set?: Array<ReplyWhereUniqueInput>;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    @Type(() => ReplyWhereUniqueInput)
    disconnect?: Array<ReplyWhereUniqueInput>;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    @Type(() => ReplyWhereUniqueInput)
    delete?: Array<ReplyWhereUniqueInput>;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    @Type(() => ReplyWhereUniqueInput)
    connect?: Array<ReplyWhereUniqueInput>;

    @Field(() => [ReplyUpdateWithWhereUniqueWithoutThreadInput], {nullable:true})
    @Type(() => ReplyUpdateWithWhereUniqueWithoutThreadInput)
    update?: Array<ReplyUpdateWithWhereUniqueWithoutThreadInput>;

    @Field(() => [ReplyUpdateManyWithWhereWithoutThreadInput], {nullable:true})
    @Type(() => ReplyUpdateManyWithWhereWithoutThreadInput)
    updateMany?: Array<ReplyUpdateManyWithWhereWithoutThreadInput>;

    @Field(() => [ReplyScalarWhereInput], {nullable:true})
    @Type(() => ReplyScalarWhereInput)
    deleteMany?: Array<ReplyScalarWhereInput>;
}
