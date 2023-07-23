import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { ThreadService } from './thread.service';
import { Thread } from './entities/thread.entity';
import { CreateThreadInput } from './dto/create-thread.input';
import { UpdateThreadInput } from './dto/update-thread.input';
import { GqlFastifyContext } from 'src/common/types/graphql.types';

@Resolver(() => Thread)
export class ThreadResolver {
    constructor(private readonly threadService: ThreadService) {}

    @Mutation(() => Thread)
    createThread(
        @Args('createThreadInput') data: CreateThreadInput,
        @Context() ctx: GqlFastifyContext,
    ) {
        const user = ctx.req.session.get('user');
        return this.threadService.createThread(data, user.id);
    }

    //? TODO : Add pagination and check if it should be protected or not
    @Query(() => [Thread], { name: 'thread' })
    public async getAllThreads() {
        return await this.threadService.getAllThreads();
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
}
