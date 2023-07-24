import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Reply } from '../reply/reply.model';
import { Like } from '../like/like.model';
import { ThreadCount } from './thread-count.output';

@ObjectType()
export class Thread {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => String, {nullable:true})
    image!: string | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    repliesCount!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    likesCount!: number;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    mention!: boolean | null;

    @Field(() => String, {nullable:true})
    mentionUserId!: string | null;

    @Field(() => User, {nullable:false})
    author?: User;

    @Field(() => [Reply], {nullable:true})
    replies?: Array<Reply>;

    @Field(() => User, {nullable:true})
    mentionUser?: User | null;

    @Field(() => [Like], {nullable:true})
    Like?: Array<Like>;

    @Field(() => ThreadCount, {nullable:false})
    _count?: ThreadCount;
}
