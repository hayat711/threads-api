import { Module } from '@nestjs/common';
import { ThreadService } from './thread.service';
import { ThreadResolver } from './thread.resolver';
import { FollowModule } from 'src/follow/follow.module';

@Module({
  providers: [ThreadResolver, ThreadService],
  imports: [FollowModule]
})
export class ThreadModule {}
