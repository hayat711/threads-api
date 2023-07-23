import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Reply as ReplyDB } from '@prisma/client';
import { Thread } from 'src/thread/entities/thread.entity';
import { User } from 'src/user/entities/user.entity';
@ObjectType()
export class Reply {
    
    @Field(() => String)
    content: ReplyDB['content'];

    @Field(() => User)
    author: User;

    @Field(() => String)
    authorId: ReplyDB['authorId'];

    @Field(() => Int)
    likes: ReplyDB['likes'];

    @Field(() => Thread)
    thread: Thread;

    @Field(() => String)
    threadId: ReplyDB['threadId'];
}
