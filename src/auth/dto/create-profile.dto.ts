import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Length, NotContains } from 'class-validator';
import { Profile } from 'src/user/entities/user.entity';

@ObjectType() // Define the MyProfile as a GraphQL ObjectType
export class MyProfile {
    @Field()
    id: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field()
    username: string;

    @Field()
    verified: boolean;

    @Field(() => String, { nullable: true })
    bio: string | null;

    @Field(() => String, { nullable: true })
    photo: string | null;

    @Field(() => String, { nullable: true })
    link: string | null;

    @Field(() => Boolean)
    isPrivate: boolean;
}


@ObjectType()
export class MeResult {
    @Field(() => Int, { nullable: true })
    statusCode?: number;

    @Field(() => String, { nullable: true })
    message?: string;

    @Field(() => MyProfile)
    profile: MyProfile;
}
