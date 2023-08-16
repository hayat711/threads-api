import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { LikeService } from './like.service';
import { Like, ReplyLikeDto, ThreadLikeDto } from './entities/like.entity';
import { UseGuards } from '@nestjs/common';
import { SessionGuard } from 'src/common/guards/auth.guard';
import { GqlFastifyContext } from 'src/common/types/graphql.types';

@Resolver(() => Like)
export class LikeResolver {
    constructor(private readonly likeService: LikeService) {}

    @UseGuards(SessionGuard)
    @Mutation(() => Like)
    async likeThread(
        @Args('threadId', { type: () => String }) threadId: string,
        @Context() ctx: GqlFastifyContext,
    ) {
        const user = await ctx.req.session.get('user');
        return this.likeService.addLikeToThread(threadId, user.id);
    }

    @UseGuards(SessionGuard)
    @Mutation(() => Like)
    async removeLikeFromThread(
        @Args('threadId', { type: () => String }) threadId: string,
        @Context() ctx: GqlFastifyContext,
    ) {
        const user = await ctx.req.session.get('user');
        return this.likeService.removeLikeFromThread(threadId, user.id);
    }

    @UseGuards(SessionGuard)
    @Mutation(() => Like)
    async likeReply(
        @Args('replyId', { type: () => String }) replyId: string,
        @Context() ctx: GqlFastifyContext,
    ) {
        const user = await ctx.req.session.get('user');
        return this.likeService.addLikeToReply(replyId, user.id);
    }

    @UseGuards(SessionGuard)
    @Mutation(() => Like, { name: 'likeParentReply'})
    async likeParentReply(
        @Args('parentId', { type: () => String }) parentId: string,
        @Context() ctx: GqlFastifyContext,
    ) {
        const user = await ctx.req.session.get('user');
        return this.likeService.addLikeToParentReply(parentId, user.id);
    }

    @UseGuards(SessionGuard)
    @Mutation(() => Like)
    async removeLikeFromReply(
        @Args('replyId', { type: () => String }) replyId: string,
        @Context() ctx: GqlFastifyContext,
    ) {
        const user = await ctx.req.session.get('user');
        return this.likeService.removeLikeFromReply(replyId, user.id);
    }

    @UseGuards(SessionGuard)
    @Mutation(() => Like, {name: 'removeParentLike'})
    async removeLikeFromParentReply(
        @Args('parentId', { type: () => String }) parentId: string,
        @Context() ctx: GqlFastifyContext,
    ) {
        const user = await ctx.req.session.get('user');
        return this.likeService.removeLikeFromParentReply(parentId, user.id);
    }


    @UseGuards(SessionGuard)
    @Query(() => [Like], { name: 'userLikes'})
    async getUserLikes(@Context() ctx: GqlFastifyContext) {
        const user = await ctx.req.session.get('user');
        return this.likeService.getUserLikes(user.id);
    }

    @UseGuards(SessionGuard)
    @Query(() => [ThreadLikeDto], { name: 'threadLikes'})
    async getThreadLikes(
        @Args('threadId', { type: () => String }) threadId: string,
    ) {
        const likes = await this.likeService.getThreadLikes(threadId);
        return likes;
    
    }


    @UseGuards(SessionGuard)
    @Query(() => [ReplyLikeDto], { name: 'replyLikes'})
    async getReplyLikes(
        @Args('replyId', { type: () => String }) replyId: string,
        @Context() ctx: GqlFastifyContext,
    ) {
        const likes = await this.likeService.getReplyLikes(replyId);
        return likes;
    
    }

  
}
