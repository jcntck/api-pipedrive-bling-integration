import { Controller, Get } from '@nestjs/common';
import { OpportunitiesService } from './opportunities.service';

@Controller('api/v1/opportunities')
export class OpportunitiesController {
  constructor(private readonly opportunitiesService: OpportunitiesService) {}

  @Get('test')
  async test(): Promise<any> {
    return await this.opportunitiesService.createOpportunity();
  }
}
