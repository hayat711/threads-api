import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFollowInput {
    
    @Field(() => String, {
        description: 'the id of the user being followed',
        nullable: false,
    })
    followingId: string;

  

}


