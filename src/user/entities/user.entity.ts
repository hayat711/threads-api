import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseEntity } from 'src/common/entity/base.entity';
import { User as UserDB } from '@prisma/client';
import { Thread } from 'src/thread/entities/thread.entity';
import { Reply } from 'src/reply/entities/reply.entity';

@ObjectType()
export class User extends BaseEntity {
    @Field(() => String)
    username: UserDB['username'];

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

    @Field(() => [Thread], { nullable: true })
    threads: Thread[];

    @Field(() => [Reply], { nullable: true })
    replies: Reply[];

    @Field(() => [Thread], { nullable: true })
    mentionedThreads: Thread[];
}


@ObjectType()
export class Profile extends User {}