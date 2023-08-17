import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { FollowService } from './follow.service';
import { Follow, FollowResponse } from './entities/follow.entity';
import { GqlFastifyContext } from 'src/common/types/graphql.types';
import { UseGuards } from '@nestjs/common';
import { SessionGuard } from 'src/common/guards/auth.guard';

@Resolver(() => Follow)
export class FollowResolver {
    constructor(private readonly followService: FollowService) {}

    @Mutation(() => Follow, { name: 'followUser' })
    async followUser(
        @Args('followingId', { type: () => String }) followingId: string,
        @Context() ctx: GqlFastifyContext,
    ) {
        const user = await ctx.req.session.get('user');
        return this.followService.followUser(followingId, user.id);
    }

    @UseGuards(SessionGuard)
    @Mutation(() => Follow, { name: 'unFollowUser' })
    async unFollowUser(
        @Args('followingId', { type: () => String }) followingId: string,
        @Context() ctx: GqlFastifyContext,
    ) {
        const user = await ctx.req.session.get('user');
        return this.followService.unFollowUser(followingId, user.id);
    }

    @UseGuards(SessionGuard)
    @Query(() => Boolean, { name: 'checkFollow' })
    async checkFollow(
        @Args('followingId', { type: () => String }) followingId: string,
        @Context() ctx: GqlFastifyContext,
    ) {
        const user = await ctx.req.session.get('user');
        return this.followService.checkFollow(followingId, user.id);
    }

    @UseGuards(SessionGuard)
    @Query(() => [FollowResponse], { name: 'getMyFollowers' })
    async getMyFollowers(@Context() ctx: GqlFastifyContext) {
        const user = await ctx.req.session.get('user');
        return this.followService.getMyFollowers(user.id);
    }

    @UseGuards(SessionGuard)
    @Query(() => [FollowResponse], { name: 'getMyFollowings' })
    async getMyFollowings(@Context() ctx: GqlFastifyContext) {
        const user = await ctx.req.session.get('user');
        return this.followService.getMyFollowings(user.id);
    }

    @UseGuards(SessionGuard)
    @Query(() => [FollowResponse], { name: 'getUserFollowers' })
    async getUserFollowers(
        @Args('userId', { type: () => String }) userId: string,
    ) {
        return this.followService.getUserFollowers(userId);
    }

    @UseGuards(SessionGuard)
    @Query(() => [FollowResponse], { name: 'getUserFollowings' })
    async getUserFollowings(
        @Args('userId', { type: () => String }) userId: string,
    ) {
        const followings = await this.followService.getUserFollowings(userId);
        console.log(followings);
        return followings;
    }
}
