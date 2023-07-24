import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadCreateManyAuthorInput } from './thread-create-many-author.input';
import { Type } from 'class-transformer';

@InputType()
export class ThreadCreateManyAuthorInputEnvelope {

    @Field(() => [ThreadCreateManyAuthorInput], {nullable:false})
    @Type(() => ThreadCreateManyAuthorInput)
    data!: Array<ThreadCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
