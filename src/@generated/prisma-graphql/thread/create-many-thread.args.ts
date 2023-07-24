import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadCreateManyInput } from './thread-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyThreadArgs {

    @Field(() => [ThreadCreateManyInput], {nullable:false})
    @Type(() => ThreadCreateManyInput)
    data!: Array<ThreadCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
