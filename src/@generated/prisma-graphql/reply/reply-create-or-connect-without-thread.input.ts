import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { Type } from 'class-transformer';
import { ReplyCreateWithoutThreadInput } from './reply-create-without-thread.input';

@InputType()
export class ReplyCreateOrConnectWithoutThreadInput {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    @Type(() => ReplyWhereUniqueInput)
    where!: ReplyWhereUniqueInput;

    @Field(() => ReplyCreateWithoutThreadInput, {nullable:false})
    @Type(() => ReplyCreateWithoutThreadInput)
    create!: ReplyCreateWithoutThreadInput;
}
