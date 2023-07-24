import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';
import { LikeUpdateWithoutThreadInput } from './like-update-without-thread.input';

@InputType()
export class LikeUpdateWithWhereUniqueWithoutThreadInput {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    @Type(() => LikeWhereUniqueInput)
    where!: LikeWhereUniqueInput;

    @Field(() => LikeUpdateWithoutThreadInput, {nullable:false})
    @Type(() => LikeUpdateWithoutThreadInput)
    data!: LikeUpdateWithoutThreadInput;
}
