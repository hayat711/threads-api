import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseEntity } from 'src/common/entity/base.entity';
import {  Thread as ThreadDB } from '@prisma/client';
import { User } from 'src/user/entities/user.entity';
import { Reply } from 'src/reply/entities/reply.entity';
import { Like } from 'src/like/entities/like.entity';

@ObjectType()
export class Thread extends BaseEntity {
    
    @Field(() => String)
    content: ThreadDB['content'];

    @Field(() => User)
    author: User;

    @Field(() => String)
    authorId: ThreadDB['authorId'];

    @Field(() => String, { nullable: true })
    image?: ThreadDB['image'];

    @Field(() => [Reply], { nullable: 'items' })
    replies?: Reply[];

    @Field(() => Int)
    repliesCount: ThreadDB['repliesCount'];

    @Field(() => Int)
    likesCount: ThreadDB['likesCount'];

    @Field(() => Boolean, { nullable: true })
    mention?: ThreadDB['mention'];

    @Field(() => [User], { nullable: true })
    mentionUsers?: User[];

    @Field(() => String, { nullable: true })
    mentionUserId?: ThreadDB['mentionUserId'];

    @Field(() => [Like], {nullable: 'items'})
    likes?: Like[];

    @Field(() => Thread, { nullable: true })
    repostedFrom?: Thread;

    @Field(() => String, { nullable: true})
    repostedFromId?: string;

    @Field(() => [Thread], { nullable: 'items' })
    reposts?: Thread[];

    @Field(() => Int)
    repostsCount: ThreadDB['repostsCount'];
}


