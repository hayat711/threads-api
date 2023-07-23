import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ThreadService } from './thread.service';
import { Thread } from './entities/thread.entity';
import { CreateThreadInput } from './dto/create-thread.input';
import { UpdateThreadInput } from './dto/update-thread.input';

@Resolver(() => Thread)
export class ThreadResolver {
  constructor(private readonly threadService: ThreadService) {}

  @Mutation(() => Thread)
  createThread(@Args('createThreadInput') createThreadInput: CreateThreadInput) {
    return this.threadService.create(createThreadInput);
  }

  @Query(() => [Thread], { name: 'thread' })
  findAll() {
    return this.threadService.findAll();
  }

  @Query(() => Thread, { name: 'thread' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.threadService.findOne(id);
  }

  @Mutation(() => Thread)
  updateThread(@Args('updateThreadInput') updateThreadInput: UpdateThreadInput) {
    return this.threadService.update(updateThreadInput.id, updateThreadInput);
  }

  @Mutation(() => Thread)
  removeThread(@Args('id', { type: () => Int }) id: number) {
    return this.threadService.remove(id);
  }
}
