import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadCreateWithoutAuthorInput } from './thread-create-without-author.input';
import { Type } from 'class-transformer';
import { ThreadCreateOrConnectWithoutAuthorInput } from './thread-create-or-connect-without-author.input';
import { ThreadCreateManyAuthorInputEnvelope } from './thread-create-many-author-input-envelope.input';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';

@InputType()
export class ThreadCreateNestedManyWithoutAuthorInput {

    @Field(() => [ThreadCreateWithoutAuthorInput], {nullable:true})
    @Type(() => ThreadCreateWithoutAuthorInput)
    create?: Array<ThreadCreateWithoutAuthorInput>;

    @Field(() => [ThreadCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => ThreadCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<ThreadCreateOrConnectWithoutAuthorInput>;

    @Field(() => ThreadCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => ThreadCreateManyAuthorInputEnvelope)
    createMany?: ThreadCreateManyAuthorInputEnvelope;

    @Field(() => [ThreadWhereUniqueInput], {nullable:true})
    @Type(() => ThreadWhereUniqueInput)
    connect?: Array<ThreadWhereUniqueInput>;
}
