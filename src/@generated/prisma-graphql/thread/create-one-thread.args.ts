import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadCreateInput } from './thread-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneThreadArgs {

    @Field(() => ThreadCreateInput, {nullable:false})
    @Type(() => ThreadCreateInput)
    data!: ThreadCreateInput;
}
