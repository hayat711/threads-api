import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { Type } from 'class-transformer';
import { ReplyUpdateWithoutThreadInput } from './reply-update-without-thread.input';
import { ReplyCreateWithoutThreadInput } from './reply-create-without-thread.input';

@InputType()
export class ReplyUpsertWithWhereUniqueWithoutThreadInput {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    @Type(() => ReplyWhereUniqueInput)
    where!: ReplyWhereUniqueInput;

    @Field(() => ReplyUpdateWithoutThreadInput, {nullable:false})
    @Type(() => ReplyUpdateWithoutThreadInput)
    update!: ReplyUpdateWithoutThreadInput;

    @Field(() => ReplyCreateWithoutThreadInput, {nullable:false})
    @Type(() => ReplyCreateWithoutThreadInput)
    create!: ReplyCreateWithoutThreadInput;
}
