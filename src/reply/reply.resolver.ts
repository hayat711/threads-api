import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { ReplyService } from './reply.service';
import { Reply } from './entities/reply.entity';
import { CreateReplyInput } from './dto/create-reply.input';
import { UpdateReplyInput } from './dto/update-reply.input';
import { GqlFastifyContext } from 'src/common/types/graphql.types';

@Resolver(() => Reply)
export class ReplyResolver {
    constructor(private readonly replyService: ReplyService) {}

    @Mutation(() => Reply)
    public async createReply(
        @Args('createReplyInput') data: CreateReplyInput,
        @Context() ctx: GqlFastifyContext,
    ) {
        const user = await ctx.req.session.get('user');
        return await this.replyService.createReply(data, user.id);
    }

    //TODO : Add pagination and check if it should be protected or not
    @Query(() => [Reply], { name: 'reply' })
    public async getAllReplies(
        @Args('threadId', { type: () => String }) threadId: string,
    ) {
        return await this.replyService.getAllReplies(threadId);
    }

    @Query(() => Reply, { name: 'reply' })
    public async getReply(@Args('id', { type: () => String }) id: string) {
        return await this.replyService.getReply(id);
    }

    @Mutation(() => Reply)
    updateReply(@Args('updateReplyInput') updateReplyInput: UpdateReplyInput) {
        return this.replyService.update(updateReplyInput.id, updateReplyInput);
    }

    @Mutation(() => Reply)
    removeReply(@Args('id', { type: () => Int }) id: number) {
        return this.replyService.remove(id);
    }
}
