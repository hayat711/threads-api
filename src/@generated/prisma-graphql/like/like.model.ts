import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Thread } from '../thread/thread.model';
import { Reply } from '../reply/reply.model';

@ObjectType()
export class Like {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    threadId!: string;

    @Field(() => String, {nullable:false})
    replyId!: string;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Thread, {nullable:false})
    thread?: Thread;

    @Field(() => Reply, {nullable:false})
    reply?: Reply;
}
