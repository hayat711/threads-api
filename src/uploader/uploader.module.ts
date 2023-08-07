import { Module } from '@nestjs/common';
import { UploaderService } from './uploader.service';
import { UploaderResolver } from './uploader.resolver';

@Module({
  providers: [UploaderResolver, UploaderService],
  exports: [UploaderService]
})
export class UploaderModule {}
