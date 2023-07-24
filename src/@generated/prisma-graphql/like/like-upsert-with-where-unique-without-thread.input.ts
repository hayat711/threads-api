import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';
import { LikeUpdateWithoutThreadInput } from './like-update-without-thread.input';
import { LikeCreateWithoutThreadInput } from './like-create-without-thread.input';

@InputType()
export class LikeUpsertWithWhereUniqueWithoutThreadInput {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    @Type(() => LikeWhereUniqueInput)
    where!: LikeWhereUniqueInput;

    @Field(() => LikeUpdateWithoutThreadInput, {nullable:false})
    @Type(() => LikeUpdateWithoutThreadInput)
    update!: LikeUpdateWithoutThreadInput;

    @Field(() => LikeCreateWithoutThreadInput, {nullable:false})
    @Type(() => LikeCreateWithoutThreadInput)
    create!: LikeCreateWithoutThreadInput;
}
