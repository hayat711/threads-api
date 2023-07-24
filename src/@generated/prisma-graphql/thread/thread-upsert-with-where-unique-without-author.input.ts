import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';
import { Type } from 'class-transformer';
import { ThreadUpdateWithoutAuthorInput } from './thread-update-without-author.input';
import { ThreadCreateWithoutAuthorInput } from './thread-create-without-author.input';

@InputType()
export class ThreadUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => ThreadWhereUniqueInput, {nullable:false})
    @Type(() => ThreadWhereUniqueInput)
    where!: ThreadWhereUniqueInput;

    @Field(() => ThreadUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => ThreadUpdateWithoutAuthorInput)
    update!: ThreadUpdateWithoutAuthorInput;

    @Field(() => ThreadCreateWithoutAuthorInput, {nullable:false})
    @Type(() => ThreadCreateWithoutAuthorInput)
    create!: ThreadCreateWithoutAuthorInput;
}
