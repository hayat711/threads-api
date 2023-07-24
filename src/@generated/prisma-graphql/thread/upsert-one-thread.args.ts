import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';
import { Type } from 'class-transformer';
import { ThreadCreateInput } from './thread-create.input';
import { ThreadUpdateInput } from './thread-update.input';

@ArgsType()
export class UpsertOneThreadArgs {

    @Field(() => ThreadWhereUniqueInput, {nullable:false})
    @Type(() => ThreadWhereUniqueInput)
    where!: ThreadWhereUniqueInput;

    @Field(() => ThreadCreateInput, {nullable:false})
    @Type(() => ThreadCreateInput)
    create!: ThreadCreateInput;

    @Field(() => ThreadUpdateInput, {nullable:false})
    @Type(() => ThreadUpdateInput)
    update!: ThreadUpdateInput;
}
