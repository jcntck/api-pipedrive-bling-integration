import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlingModule } from 'src/bling/bling.module';
import { PipedriveModule } from 'src/pipedrive/pipedrive.module';
import { OpportunitySchema } from './interfaces/opportunity.schema';
import { OpportunitiesController } from './opportunities.controller';
import { OpportunitiesService } from './opportunities.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Opportunity', schema: OpportunitySchema },
    ]),
    PipedriveModule,
    BlingModule,
  ],
  controllers: [OpportunitiesController],
  providers: [OpportunitiesService],
})
export class OpportunitiesModule {}
