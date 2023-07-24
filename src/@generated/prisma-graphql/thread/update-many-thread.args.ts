import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadUpdateManyMutationInput } from './thread-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ThreadWhereInput } from './thread-where.input';

@ArgsType()
export class UpdateManyThreadArgs {

    @Field(() => ThreadUpdateManyMutationInput, {nullable:false})
    @Type(() => ThreadUpdateManyMutationInput)
    data!: ThreadUpdateManyMutationInput;

    @Field(() => ThreadWhereInput, {nullable:true})
    @Type(() => ThreadWhereInput)
    where?: ThreadWhereInput;
}
