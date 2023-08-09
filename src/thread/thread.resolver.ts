import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { ThreadService } from './thread.service';
import { Thread } from './entities/thread.entity';
import { CreateThreadInput } from './dto/create-thread.input';
import { UpdateThreadInput } from './dto/update-thread.input';
import { GqlFastifyContext } from 'src/common/types/graphql.types';
import { UseGuards } from '@nestjs/common';
import { SessionGuard } from 'src/common/guards/auth.guard';
import { FileUpload, GraphQLUpload } from 'graphql-upload-minimal';
import { join } from 'path';
import { UploaderService } from 'src/uploader/uploader.service';
import { Mimetype } from 'src/common/enums/mimetype.enum';

@Resolver(() => Thread)
export class ThreadResolver {
    constructor(
        private readonly threadService: ThreadService,
        private readonly uploaderService: UploaderService,
    ) {}

    @Mutation(() => Thread)
    async createThread(
        @Args('createThreadInput') data: CreateThreadInput,
        @Args({ name: 'image', type: () => GraphQLUpload, nullable: true })
        images: FileUpload,
        @Context() ctx: GqlFastifyContext,
    ) {
        const user = ctx.req.session.get('user');
        if (images) {
            const path = join('public', 'uploads');
            const threadImages = await this.uploaderService.uploadFile(
                {
                    name: 'thread images',
                    desc: 'the thread images',
                },
                images,
                [Mimetype.PNG, Mimetype.JPG],
            );
            if (typeof threadImages.url === 'string') {
                data.images = [threadImages.url]; // Wrap the single URL in an array
            } else if (Array.isArray(threadImages.url)) {
                data.images = threadImages.url; // Assign the array of URLs
            }
        }
        const thread = await this.threadService.createThread(data, user.id);
        return thread;
    }

    //? TODO : Add pagination and check if it should be protected or not
    @Query(() => [Thread], { name: 'threads' })
    public async getAllThreads() {
        return await this.threadService.getAllThreads();
    }

    @Query(() => [Thread], { name: 'myThreads' })
    public async getUserThreads(@Context() ctx: GqlFastifyContext) {
        const user = ctx.req.session.get('user');
        return await this.threadService.getUserThreads(user.id);
    }
    @Query(() => Thread, { name: 'thread' })
    public async getThread(@Args('id', { type: () => String }) id: string) {
        return await this.threadService.getThread(id);
    }

    @Mutation(() => Thread)
    updateThread(
        @Args('updateThreadInput') updateThreadInput: UpdateThreadInput,
    ) {
        return this.threadService.update(
            updateThreadInput.id,
            updateThreadInput,
        );
    }

    @Mutation(() => Thread)
    removeThread(@Args('id', { type: () => Int }) id: number) {
        return this.threadService.remove(id);
    }

    // mutation to add like to thread
    @UseGuards(SessionGuard)
    @Mutation(() => Thread)
    async likeThread(
        @Args('threadId', { type: () => String }) threadId: string,
        @Context() ctx: GqlFastifyContext,
    ) {
        const user = ctx.req.session.get('user');
        console.log('add like called')
        return await this.threadService.addLikeToThread(threadId, user.id);
    }

    @UseGuards(SessionGuard)
    @Mutation(() => Thread)
    async removeLikeFromThread(
        @Args('threadId', { type: () => String }) threadId: string,
        @Context() ctx: GqlFastifyContext,
    ) {
        const user = ctx.req.session.get('user');
        return await this.threadService.removeLikeFromThread(threadId, user.id);
    }

    @UseGuards(SessionGuard)
    @Query(() => Thread, { name: 'likes'})
    async getThreadLikes(
        @Args('threadId', { type: () => String }) threadId: string,
        @Context() ctx: GqlFastifyContext,
    ) {
        return await this.threadService.getThreadLikes(threadId);
    }
}
