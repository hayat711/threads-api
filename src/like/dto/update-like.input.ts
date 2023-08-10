import { CreateLikeThread } from './create-like.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLikeInput extends PartialType(CreateLikeThread) {
  @Field(() => Int)
  id: number;
}
