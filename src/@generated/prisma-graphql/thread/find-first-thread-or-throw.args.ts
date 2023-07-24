import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadWhereInput } from './thread-where.input';
import { Type } from 'class-transformer';
import { ThreadOrderByWithRelationInput } from './thread-order-by-with-relation.input';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ThreadScalarFieldEnum } from './thread-scalar-field.enum';

@ArgsType()
export class FindFirstThreadOrThrowArgs {

    @Field(() => ThreadWhereInput, {nullable:true})
    @Type(() => ThreadWhereInput)
    where?: ThreadWhereInput;

    @Field(() => [ThreadOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ThreadOrderByWithRelationInput>;

    @Field(() => ThreadWhereUniqueInput, {nullable:true})
    cursor?: ThreadWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ThreadScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ThreadScalarFieldEnum>;
}
