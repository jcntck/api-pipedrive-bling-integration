import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PipedriveModule } from './pipedrive/pipedrive.module';

@Module({
  imports: [ConfigModule.forRoot(), PipedriveModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
