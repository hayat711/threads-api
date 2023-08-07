import { Field, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "src/common/entity/base.entity";
import { Like as LikeDB } from '@prisma/client'

@ObjectType()
export class Like extends BaseEntity {

    @Field(() => String, { nullable: false})
    userId: LikeDB['userId'];


    @Field(() => String, { nullable: true})
    threadId: LikeDB['threadId'];

    @Field(() => String, { nullable: true})
    replyId: LikeDB['replyId'];

}