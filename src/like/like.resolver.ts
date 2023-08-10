import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { LikeService } from './like.service';
import { Like } from './entities/like.entity';
import { CreateLikeThread } from './dto/create-like.input';
import { UpdateLikeInput } from './dto/update-like.input';
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
    @Mutation(() => Like)
    async removeLikeFromReply(
        @Args('replyId', { type: () => String }) replyId: string,
        @Context() ctx: GqlFastifyContext,
    ) {
        const user = await ctx.req.session.get('user');
        return this.likeService.removeLikeFromReply(replyId, user.id);
    }

    @Query(() => [Like], { name: 'like' })
    findAll() {
        return this.likeService.findAll();
    }

    @Query(() => Like, { name: 'like' })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.likeService.findOne(id);
    }

    @Mutation(() => Like)
    updateLike(@Args('updateLikeInput') updateLikeInput: UpdateLikeInput) {
        return this.likeService.update(updateLikeInput.id, updateLikeInput);
    }

    @Mutation(() => Like)
    removeLike(@Args('id', { type: () => Int }) id: number) {
        return this.likeService.remove(id);
    }
}
