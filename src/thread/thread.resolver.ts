import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { ThreadService } from './thread.service';
import { Thread } from './entities/thread.entity';
import {
    CreateThreadInput,
    RePostThreadInput,
} from './dto/create-thread.input';
import { GqlFastifyContext } from 'src/common/types/graphql.types';
import { UseGuards } from '@nestjs/common';
import { SessionGuard } from 'src/common/guards/auth.guard';

@Resolver(() => Thread)
export class ThreadResolver {
    constructor(private readonly threadService: ThreadService) {}

    @UseGuards(SessionGuard)
    @Mutation(() => Thread)
    async createThread(
        @Args('createThreadInput') data: CreateThreadInput,
        @Context() ctx: GqlFastifyContext,
    ) {
        const user = ctx.req.session.get('user');
        const thread = await this.threadService.createThread(data, user.id);
        return thread;
    }

    @UseGuards(SessionGuard)
    @Mutation(() => Thread, { name: 'rePostThread' })
    async rePostThread(
        @Args('rePostThreadInput')
        data: RePostThreadInput,
        @Context() ctx: GqlFastifyContext,
    ) {
        const user = ctx.req.session.get('user');
        const thread = await this.threadService.rePostThread(data, user.id);
        return thread;
    }

    @Query(() => [Thread], { name: 'threads' })
    public async getAllThreads(
        @Args('limit', { type: () => Int, nullable: true }) limit?: number,
        @Args('offset', { type: () => Int, nullable: true }) offset?: number,
    ) {
        const threads = await this.threadService.getAllThreads(offset, limit);
        return threads;
    }

    @Query(() => [Thread], { name: 'feed' })
    public async getFeed(
        @Context() ctx: GqlFastifyContext,
        @Args('limit', { type: () => Int, nullable: true }) limit?: number,
        @Args('offset', { type: () => Int, nullable: true }) offset?: number,
    ) {
        const user = await ctx.req.session.get('user');
        const feed = await this.threadService.getFeed(
            user.id,
            offset,
            limit,
        );
        return feed;
    }

    @Query(() => [Thread], { name: 'myThreads' })
    public async myThreads(
        @Context() ctx: GqlFastifyContext,
        @Args('limit', { type: () => Int, nullable: true }) limit?: number,
        @Args('offset', { type: () => Int, nullable: true }) offset?: number,
    ) {
        const user = ctx.req.session.get('user');
        return await this.threadService.getUserThreads(user.id, offset, limit);
    }

    @Query(() => Thread, { name: 'thread' })
    public async getThread(
        @Args('threadId', { type: () => String }) id: string,
    ) {
        const thread = await this.threadService.getThread(id);
        return thread;
    }

    @Query(() => [Thread], { name: 'getUserThreads' })
    public async getUserThreads(
        @Args('userId', { type: () => String }) userId: string,
        @Args('limit', { type: () => Int, nullable: true }) limit?: number,
        @Args('offset', { type: () => Int, nullable: true }) offset?: number,
    ) {
        const thread = await this.threadService.getSingleUserThreads(
            userId,
            offset,
            limit,
        );
        return thread;
    }

    @Query(() => [Thread], { name: 'repliedThreads' })
    public async getRepliedThreads(
        @Args('userId', { type: () => String }) userId: string,
        @Args('limit', { type: () => Int, nullable: true }) limit?: number,
        @Args('offset', { type: () => Int, nullable: true }) offset?: number,
    ) {
        return await this.threadService.getRepliedThread(userId);
    }

    @UseGuards(SessionGuard)
    @Mutation(() => String, { name: 'deleteThread' })
    async removeThread(
        @Args('threadId', { type: () => String }) threadId: string,
        @Context() ctx: GqlFastifyContext,
    ): Promise<String> {
        const user = await ctx.req.session.get('user');
        const id = await this.threadService.remove(threadId, user.id);
        console.log('the deleted thread id ', id);
        return id;
    }
}
