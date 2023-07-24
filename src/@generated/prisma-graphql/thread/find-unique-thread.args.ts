import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueThreadArgs {

    @Field(() => ThreadWhereUniqueInput, {nullable:false})
    @Type(() => ThreadWhereUniqueInput)
    where!: ThreadWhereUniqueInput;
}
