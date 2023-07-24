import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';
import { Type } from 'class-transformer';
import { ThreadCreateWithoutAuthorInput } from './thread-create-without-author.input';

@InputType()
export class ThreadCreateOrConnectWithoutAuthorInput {

    @Field(() => ThreadWhereUniqueInput, {nullable:false})
    @Type(() => ThreadWhereUniqueInput)
    where!: ThreadWhereUniqueInput;

    @Field(() => ThreadCreateWithoutAuthorInput, {nullable:false})
    @Type(() => ThreadCreateWithoutAuthorInput)
    create!: ThreadCreateWithoutAuthorInput;
}
