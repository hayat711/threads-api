import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutThreadInput } from './reply-create-without-thread.input';
import { Type } from 'class-transformer';
import { ReplyCreateOrConnectWithoutThreadInput } from './reply-create-or-connect-without-thread.input';
import { ReplyCreateManyThreadInputEnvelope } from './reply-create-many-thread-input-envelope.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';

@InputType()
export class ReplyUncheckedCreateNestedManyWithoutThreadInput {

    @Field(() => [ReplyCreateWithoutThreadInput], {nullable:true})
    @Type(() => ReplyCreateWithoutThreadInput)
    create?: Array<ReplyCreateWithoutThreadInput>;

    @Field(() => [ReplyCreateOrConnectWithoutThreadInput], {nullable:true})
    @Type(() => ReplyCreateOrConnectWithoutThreadInput)
    connectOrCreate?: Array<ReplyCreateOrConnectWithoutThreadInput>;

    @Field(() => ReplyCreateManyThreadInputEnvelope, {nullable:true})
    @Type(() => ReplyCreateManyThreadInputEnvelope)
    createMany?: ReplyCreateManyThreadInputEnvelope;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    @Type(() => ReplyWhereUniqueInput)
    connect?: Array<ReplyWhereUniqueInput>;
}
