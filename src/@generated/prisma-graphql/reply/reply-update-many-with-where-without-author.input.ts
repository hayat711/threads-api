import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyScalarWhereInput } from './reply-scalar-where.input';
import { Type } from 'class-transformer';
import { ReplyUpdateManyMutationInput } from './reply-update-many-mutation.input';

@InputType()
export class ReplyUpdateManyWithWhereWithoutAuthorInput {

    @Field(() => ReplyScalarWhereInput, {nullable:false})
    @Type(() => ReplyScalarWhereInput)
    where!: ReplyScalarWhereInput;

    @Field(() => ReplyUpdateManyMutationInput, {nullable:false})
    @Type(() => ReplyUpdateManyMutationInput)
    data!: ReplyUpdateManyMutationInput;
}
