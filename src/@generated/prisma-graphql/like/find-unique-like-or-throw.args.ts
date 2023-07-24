import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueLikeOrThrowArgs {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    @Type(() => LikeWhereUniqueInput)
    where!: LikeWhereUniqueInput;
}
