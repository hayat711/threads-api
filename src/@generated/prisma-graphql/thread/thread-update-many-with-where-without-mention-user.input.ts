import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadScalarWhereInput } from './thread-scalar-where.input';
import { Type } from 'class-transformer';
import { ThreadUpdateManyMutationInput } from './thread-update-many-mutation.input';

@InputType()
export class ThreadUpdateManyWithWhereWithoutMentionUserInput {

    @Field(() => ThreadScalarWhereInput, {nullable:false})
    @Type(() => ThreadScalarWhereInput)
    where!: ThreadScalarWhereInput;

    @Field(() => ThreadUpdateManyMutationInput, {nullable:false})
    @Type(() => ThreadUpdateManyMutationInput)
    data!: ThreadUpdateManyMutationInput;
}
