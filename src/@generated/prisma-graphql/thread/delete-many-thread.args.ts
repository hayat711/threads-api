import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadWhereInput } from './thread-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyThreadArgs {

    @Field(() => ThreadWhereInput, {nullable:true})
    @Type(() => ThreadWhereInput)
    where?: ThreadWhereInput;
}
