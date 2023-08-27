import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { ReplyService } from './reply.service';
import { Reply } from './entities/reply.entity';
import { CreateReplyInput } from './dto/create-reply.input';
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

    @Query(() => [Reply], { name: 'allReplies' })
    public async getAllReplies(
        @Args('threadId', { type: () => String }) threadId: string,
        @Args('limit', {type: () => Int , nullable: true}) limit?: number,
        @Args('offset', {type: () => Int, nullable: true}) offset?: number,
    ) {
        return await this.replyService.getAllReplies(threadId, offset, limit);
    }
    @Query(() => [Reply], { name: 'repliesWithThread' })
    public async getRepliesWithThread(
        @Args('authorId', { type: () => String }) authorId: string,
        @Args('limit', {type: () => Int , nullable: true}) limit?: number,
        @Args('offset', {type: () => Int, nullable: true}) offset?: number,
    ) {
        const replies = await this.replyService.getRepliesWithThread(authorId);
        return replies;
    }

    @Query(() => [Reply], { name: 'parentReplies' })
    public async getParentReplies(
        @Args('parentId', { type: () => String }) parentId: string,
        @Args('limit', {type: () => Int , nullable: true}) limit?: number,
        @Args('offset', {type: () => Int, nullable: true}) offset?: number,
    ) {
        return await this.replyService.getParentReplies(parentId);
    }

    @Query(() => Reply, { name: 'reply' })
    public async getReply(@Args('replyId', { type: () => String }) id: string) {
        const reply =  await this.replyService.getReply(id);
        return reply;
    }
}
