import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';
import { LikeCreateWithoutThreadInput } from './like-create-without-thread.input';

@InputType()
export class LikeCreateOrConnectWithoutThreadInput {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    @Type(() => LikeWhereUniqueInput)
    where!: LikeWhereUniqueInput;

    @Field(() => LikeCreateWithoutThreadInput, {nullable:false})
    @Type(() => LikeCreateWithoutThreadInput)
    create!: LikeCreateWithoutThreadInput;
}
