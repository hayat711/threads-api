import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { Type } from 'class-transformer';
import { ReplyCreateWithoutAuthorInput } from './reply-create-without-author.input';

@InputType()
export class ReplyCreateOrConnectWithoutAuthorInput {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    @Type(() => ReplyWhereUniqueInput)
    where!: ReplyWhereUniqueInput;

    @Field(() => ReplyCreateWithoutAuthorInput, {nullable:false})
    @Type(() => ReplyCreateWithoutAuthorInput)
    create!: ReplyCreateWithoutAuthorInput;
}
