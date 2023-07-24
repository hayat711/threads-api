import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Thread } from '../thread/thread.model';
import { Reply } from '../reply/reply.model';
import { Like } from '../like/like.model';
import { Follow } from '../follow/follow.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    bio!: string | null;

    @Field(() => String, {nullable:true})
    photo!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    verified!: boolean;

    @Field(() => String, {nullable:true})
    link!: string | null;

    @Field(() => [Thread], {nullable:true})
    threads?: Array<Thread>;

    @Field(() => [Thread], {nullable:true})
    mentionedThreads?: Array<Thread>;

    @Field(() => [Reply], {nullable:true})
    replies?: Array<Reply>;

    @Field(() => [Like], {nullable:true})
    likes?: Array<Like>;

    @Field(() => [Follow], {nullable:true})
    followers?: Array<Follow>;

    @Field(() => [Follow], {nullable:true})
    followings?: Array<Follow>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
