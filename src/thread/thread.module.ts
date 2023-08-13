import { Module } from '@nestjs/common';
import { ThreadService } from './thread.service';
import { ThreadResolver } from './thread.resolver';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  providers: [ThreadResolver, ThreadService],
  imports: [CloudinaryModule]
})
export class ThreadModule {}
