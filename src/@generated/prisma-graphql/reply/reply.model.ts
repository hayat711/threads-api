import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Thread } from '../thread/thread.model';
import { Like } from '../like/like.model';
import { ReplyCount } from './reply-count.output';

@ObjectType()
export class Reply {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false,defaultValue:0})
    likes!: number;

    @Field(() => String, {nullable:false})
    threadId!: string;

    @Field(() => User, {nullable:false})
    author?: User;

    @Field(() => Thread, {nullable:false})
    thread?: Thread;

    @Field(() => [Like], {nullable:true})
    Like?: Array<Like>;

    @Field(() => ReplyCount, {nullable:false})
    _count?: ReplyCount;
}
