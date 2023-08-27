import { Module } from '@nestjs/common';
import { FollowService } from './follow.service';
import { FollowResolver } from './follow.resolver';

@Module({
  providers: [FollowResolver, FollowService],
  exports: [FollowService],
  
})
export class FollowModule {}
