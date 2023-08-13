import { Field, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "src/common/entity/base.entity";
import { Like as LikeDB } from '@prisma/client'
import { User } from "src/user/entities/user.entity";

@ObjectType()
export class Like extends BaseEntity {

    @Field(() => String, { nullable: false})
    userId: LikeDB['userId'];

    @Field(() => String, { nullable: true})
    threadId?: LikeDB['threadId'];

    @Field(() => String, { nullable: true})
    replyId?: LikeDB['replyId'];

}


@ObjectType() 
export class ThreadLikeDto {
    @Field(() => String)
    id: string;

    @Field(() => String)
    threadId: string;

    @Field(() => String)
    userId: string;

    @Field(() => User)
    user: User;
}

@ObjectType() 
export class ReplyLikeDto {
    @Field(() => String)
    id: string;

    @Field(() => String)
    replyId: string;

    @Field(() => String)
    userId: string;

    @Field(() => User)
    user: User;
}