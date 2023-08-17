import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { ReplyService } from './reply.service';
import { Reply } from './entities/reply.entity';
import { CreateReplyInput } from './dto/create-reply.input';
import { UpdateReplyInput } from './dto/update-reply.input';
import { GqlFastifyContext } from 'src/common/types/graphql.types';
import { UseGuards } from '@nestjs/common';
import { SessionGuard } from 'src/common/guards/auth.guard';

@UseGuards(SessionGuard)
@Resolver(() => Reply)
export class ReplyResolver {
    constructor(private readonly replyService: ReplyService) {}

    @Mutation(() => Reply, { name: 'reply' })
    public async createReply(
        @Args('createReplyInput') data: CreateReplyInput,
        @Context() ctx: GqlFastifyContext,
    ) {
        const user = await ctx.req.session.get('user');
        return await this.replyService.createReply(data, user.id);
    }

    @Mutation(() => Reply, { name: 'replyParent' })
    public async createReplyChild(
        @Args('createReplyInput') data: CreateReplyInput,
        @Args('parentId', { type: () => String }) parentId: string,

        @Context() ctx: GqlFastifyContext,
    ) {
        const user = await ctx.req.session.get('user');
        return await this.replyService.replyToParentReply(
            data,
            user.id,
            parentId,
        );
    }

    //TODO : Add pagination and check if it should be protected or not
    @Query(() => [Reply], { name: 'allReplies' })
    public async getAllReplies(
        @Args('threadId', { type: () => String }) threadId: string,
    ) {
        return await this.replyService.getAllReplies(threadId);
    }
    @Query(() => [Reply], { name: 'repliesWithThread' })
    public async getRepliesWithThread(
        @Args('authorId', { type: () => String }) authorId: string,
    ) {
        const replies = await this.replyService.getRepliesWithThread(authorId);
        return replies;
    }

    @Query(() => [Reply], { name: 'parentReplies' })
    public async getParentReplies(
        @Args('parentId', { type: () => String }) parentId: string,
    ) {
        return await this.replyService.getParentReplies(parentId);
    }

    @Query(() => Reply, { name: 'reply' })
    public async getReply(@Args('id', { type: () => String }) id: string) {
        return await this.replyService.getReply(id);
    }
}
