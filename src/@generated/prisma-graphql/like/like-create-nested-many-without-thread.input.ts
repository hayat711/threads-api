import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateWithoutThreadInput } from './like-create-without-thread.input';
import { Type } from 'class-transformer';
import { LikeCreateOrConnectWithoutThreadInput } from './like-create-or-connect-without-thread.input';
import { LikeCreateManyThreadInputEnvelope } from './like-create-many-thread-input-envelope.input';
import { LikeWhereUniqueInput } from './like-where-unique.input';

@InputType()
export class LikeCreateNestedManyWithoutThreadInput {

    @Field(() => [LikeCreateWithoutThreadInput], {nullable:true})
    @Type(() => LikeCreateWithoutThreadInput)
    create?: Array<LikeCreateWithoutThreadInput>;

    @Field(() => [LikeCreateOrConnectWithoutThreadInput], {nullable:true})
    @Type(() => LikeCreateOrConnectWithoutThreadInput)
    connectOrCreate?: Array<LikeCreateOrConnectWithoutThreadInput>;

    @Field(() => LikeCreateManyThreadInputEnvelope, {nullable:true})
    @Type(() => LikeCreateManyThreadInputEnvelope)
    createMany?: LikeCreateManyThreadInputEnvelope;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    connect?: Array<LikeWhereUniqueInput>;
}
