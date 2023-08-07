import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Reply as ReplyDB } from '@prisma/client';
import { BaseEntity } from 'src/common/entity/base.entity';
import { Like } from 'src/thread/entities/like.entity';
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

    @Field(() => Thread)
    thread: Thread;

    @Field(() => String)
    threadId: ReplyDB['threadId'];

    @Field(() => [Like], {nullable: true})
    likes?: Like[];

}
