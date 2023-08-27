import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseEntity } from 'src/common/entity/base.entity';
import { User as UserDB } from '@prisma/client';
import { Thread } from 'src/thread/entities/thread.entity';
import { Reply } from 'src/reply/entities/reply.entity';
import { Like } from 'src/like/entities/like.entity';

@ObjectType()
export class User extends BaseEntity {
    @Field(() => String)
    username: UserDB['username'];

    @Field(() => String, { nullable: true})
    name?: UserDB['name'];

    @Field(() => String)
    password: UserDB['password'];

    @Field(() => String, { nullable: true })
    bio: UserDB['bio'];

    @Field(() => String, { nullable: true })
    photo: UserDB['photo'];

    @Field(() => String, { nullable: true })
    link: UserDB['link'];

    @Field(() => Boolean)
    verified: UserDB['verified'];

    @Field(() => Boolean)
    isPrivate: UserDB['isPrivate']

    @Field(() => [Thread], { nullable: 'items' })
    threads: Thread[];

    @Field(() => [Reply], { nullable: 'items' })
    replies: Reply[];

    @Field(() => [Thread], { nullable: 'items' })
    mentionedThreads: Thread[];

    @Field(() => [Like], { nullable: 'items'})
    likes: Like[];
}


@ObjectType()
export class Profile extends User {}