import { Module } from '@nestjs/common';
import { ThreadService } from './thread.service';
import { ThreadResolver } from './thread.resolver';
import { UploaderModule } from 'src/uploader/uploader.module';

@Module({
  providers: [ThreadResolver, ThreadService],
  imports: [UploaderModule]
})
export class ThreadModule {}
