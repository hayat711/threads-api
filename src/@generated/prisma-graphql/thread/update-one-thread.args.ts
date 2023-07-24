import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadUpdateInput } from './thread-update.input';
import { Type } from 'class-transformer';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';

@ArgsType()
export class UpdateOneThreadArgs {

    @Field(() => ThreadUpdateInput, {nullable:false})
    @Type(() => ThreadUpdateInput)
    data!: ThreadUpdateInput;

    @Field(() => ThreadWhereUniqueInput, {nullable:false})
    @Type(() => ThreadWhereUniqueInput)
    where!: ThreadWhereUniqueInput;
}
