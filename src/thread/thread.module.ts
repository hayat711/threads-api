import { Module } from '@nestjs/common';
import { ThreadService } from './thread.service';
import { ThreadResolver } from './thread.resolver';

@Module({
  providers: [ThreadResolver, ThreadService],
  imports: []
})
export class ThreadModule {}
