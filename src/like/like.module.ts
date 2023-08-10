import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeResolver } from './like.resolver';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  providers: [LikeResolver, LikeService],
  exports: [LikeService],
  imports: [PrismaModule]
})
export class LikeModule {}
