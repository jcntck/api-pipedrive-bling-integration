import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PipedriveService } from './pipedrive.service';
import { PipedriveController } from './pipedrive.controller';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [PipedriveService],
  controllers: [PipedriveController],
})
export class PipedriveModule {}
