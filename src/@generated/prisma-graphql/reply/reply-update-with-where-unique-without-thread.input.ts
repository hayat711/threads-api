import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { Type } from 'class-transformer';
import { ReplyUpdateWithoutThreadInput } from './reply-update-without-thread.input';

@InputType()
export class ReplyUpdateWithWhereUniqueWithoutThreadInput {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    @Type(() => ReplyWhereUniqueInput)
    where!: ReplyWhereUniqueInput;

    @Field(() => ReplyUpdateWithoutThreadInput, {nullable:false})
    @Type(() => ReplyUpdateWithoutThreadInput)
    data!: ReplyUpdateWithoutThreadInput;
}
