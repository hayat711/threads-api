import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';
import { LikeCreateWithoutUserInput } from './like-create-without-user.input';

@InputType()
export class LikeCreateOrConnectWithoutUserInput {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    @Type(() => LikeWhereUniqueInput)
    where!: LikeWhereUniqueInput;

    @Field(() => LikeCreateWithoutUserInput, {nullable:false})
    @Type(() => LikeCreateWithoutUserInput)
    create!: LikeCreateWithoutUserInput;
}
