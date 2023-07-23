import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Thread {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
