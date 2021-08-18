import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PipedriveService } from './pipedrive.service';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [PipedriveService],
  exports: [PipedriveService],
})
export class PipedriveModule {}
