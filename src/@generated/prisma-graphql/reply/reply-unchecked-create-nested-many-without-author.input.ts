import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutAuthorInput } from './reply-create-without-author.input';
import { Type } from 'class-transformer';
import { ReplyCreateOrConnectWithoutAuthorInput } from './reply-create-or-connect-without-author.input';
import { ReplyCreateManyAuthorInputEnvelope } from './reply-create-many-author-input-envelope.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';

@InputType()
export class ReplyUncheckedCreateNestedManyWithoutAuthorInput {

    @Field(() => [ReplyCreateWithoutAuthorInput], {nullable:true})
    @Type(() => ReplyCreateWithoutAuthorInput)
    create?: Array<ReplyCreateWithoutAuthorInput>;

    @Field(() => [ReplyCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => ReplyCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<ReplyCreateOrConnectWithoutAuthorInput>;

    @Field(() => ReplyCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => ReplyCreateManyAuthorInputEnvelope)
    createMany?: ReplyCreateManyAuthorInputEnvelope;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    @Type(() => ReplyWhereUniqueInput)
    connect?: Array<ReplyWhereUniqueInput>;
}
