import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Reply as ReplyDB } from '@prisma/client';
import { BaseEntity } from 'src/common/entity/base.entity';
import { Like } from 'src/like/entities/like.entity';
import { Thread } from 'src/thread/entities/thread.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Reply extends BaseEntity {
    
    @Field(() => String)
    content: ReplyDB['content'];

    @Field(() => User)
    author: User;

    @Field(() => String)
    authorId: ReplyDB['authorId'];

    @Field(() => Int)
    likesCount: ReplyDB['likesCount'];

    @Field(() => String, { nullable: true})
    image?: ReplyDB['image']

    @Field(() => Boolean, {nullable: true})
    mention?: ReplyDB['mention'];

    @Field(() => Thread)
    thread: Thread;

    @Field(() => String)
    threadId: ReplyDB['threadId'];

    @Field(() => [Like], {nullable: 'items'})
    likes?: Like[];

    @Field(() => Int, )
    repliesCount: ReplyDB['repliesCount'];

    @Field(() => String, { nullable: true })
    parentId?: ReplyDB['parentId'];

    @Field(() => Reply, {nullable: true})
    parent?: Reply


    @Field(() => [Reply], {nullable: 'items'})
    replies: Reply[];
   
}
