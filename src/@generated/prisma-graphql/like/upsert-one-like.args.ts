import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';
import { LikeCreateInput } from './like-create.input';
import { LikeUpdateInput } from './like-update.input';

@ArgsType()
export class UpsertOneLikeArgs {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    @Type(() => LikeWhereUniqueInput)
    where!: LikeWhereUniqueInput;

    @Field(() => LikeCreateInput, {nullable:false})
    @Type(() => LikeCreateInput)
    create!: LikeCreateInput;

    @Field(() => LikeUpdateInput, {nullable:false})
    @Type(() => LikeUpdateInput)
    update!: LikeUpdateInput;
}
