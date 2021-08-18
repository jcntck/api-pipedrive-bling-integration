import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BlingService } from './bling.service';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [BlingService],
  exports: [BlingService],
})
export class BlingModule {}
