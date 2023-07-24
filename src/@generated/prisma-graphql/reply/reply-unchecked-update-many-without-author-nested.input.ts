import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutAuthorInput } from './reply-create-without-author.input';
import { Type } from 'class-transformer';
import { ReplyCreateOrConnectWithoutAuthorInput } from './reply-create-or-connect-without-author.input';
import { ReplyUpsertWithWhereUniqueWithoutAuthorInput } from './reply-upsert-with-where-unique-without-author.input';
import { ReplyCreateManyAuthorInputEnvelope } from './reply-create-many-author-input-envelope.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyUpdateWithWhereUniqueWithoutAuthorInput } from './reply-update-with-where-unique-without-author.input';
import { ReplyUpdateManyWithWhereWithoutAuthorInput } from './reply-update-many-with-where-without-author.input';
import { ReplyScalarWhereInput } from './reply-scalar-where.input';

@InputType()
export class ReplyUncheckedUpdateManyWithoutAuthorNestedInput {

    @Field(() => [ReplyCreateWithoutAuthorInput], {nullable:true})
    @Type(() => ReplyCreateWithoutAuthorInput)
    create?: Array<ReplyCreateWithoutAuthorInput>;

    @Field(() => [ReplyCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => ReplyCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<ReplyCreateOrConnectWithoutAuthorInput>;

    @Field(() => [ReplyUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => ReplyUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<ReplyUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => ReplyCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => ReplyCreateManyAuthorInputEnvelope)
    createMany?: ReplyCreateManyAuthorInputEnvelope;

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

    @Field(() => [ReplyUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => ReplyUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<ReplyUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [ReplyUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => ReplyUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<ReplyUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [ReplyScalarWhereInput], {nullable:true})
    @Type(() => ReplyScalarWhereInput)
    deleteMany?: Array<ReplyScalarWhereInput>;
}
