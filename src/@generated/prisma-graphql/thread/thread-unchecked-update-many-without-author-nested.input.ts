import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadCreateWithoutAuthorInput } from './thread-create-without-author.input';
import { Type } from 'class-transformer';
import { ThreadCreateOrConnectWithoutAuthorInput } from './thread-create-or-connect-without-author.input';
import { ThreadUpsertWithWhereUniqueWithoutAuthorInput } from './thread-upsert-with-where-unique-without-author.input';
import { ThreadCreateManyAuthorInputEnvelope } from './thread-create-many-author-input-envelope.input';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';
import { ThreadUpdateWithWhereUniqueWithoutAuthorInput } from './thread-update-with-where-unique-without-author.input';
import { ThreadUpdateManyWithWhereWithoutAuthorInput } from './thread-update-many-with-where-without-author.input';
import { ThreadScalarWhereInput } from './thread-scalar-where.input';

@InputType()
export class ThreadUncheckedUpdateManyWithoutAuthorNestedInput {

    @Field(() => [ThreadCreateWithoutAuthorInput], {nullable:true})
    @Type(() => ThreadCreateWithoutAuthorInput)
    create?: Array<ThreadCreateWithoutAuthorInput>;

    @Field(() => [ThreadCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => ThreadCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<ThreadCreateOrConnectWithoutAuthorInput>;

    @Field(() => [ThreadUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => ThreadUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<ThreadUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => ThreadCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => ThreadCreateManyAuthorInputEnvelope)
    createMany?: ThreadCreateManyAuthorInputEnvelope;

    @Field(() => [ThreadWhereUniqueInput], {nullable:true})
    @Type(() => ThreadWhereUniqueInput)
    set?: Array<ThreadWhereUniqueInput>;

    @Field(() => [ThreadWhereUniqueInput], {nullable:true})
    @Type(() => ThreadWhereUniqueInput)
    disconnect?: Array<ThreadWhereUniqueInput>;

    @Field(() => [ThreadWhereUniqueInput], {nullable:true})
    @Type(() => ThreadWhereUniqueInput)
    delete?: Array<ThreadWhereUniqueInput>;

    @Field(() => [ThreadWhereUniqueInput], {nullable:true})
    @Type(() => ThreadWhereUniqueInput)
    connect?: Array<ThreadWhereUniqueInput>;

    @Field(() => [ThreadUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => ThreadUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<ThreadUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [ThreadUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => ThreadUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<ThreadUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [ThreadScalarWhereInput], {nullable:true})
    @Type(() => ThreadScalarWhereInput)
    deleteMany?: Array<ThreadScalarWhereInput>;
}
