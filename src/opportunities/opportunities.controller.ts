import { Controller, Get, Put } from '@nestjs/common';
import { OpportunitiesService } from './opportunities.service';

@Controller('api/v1/opportunities')
export class OpportunitiesController {
  constructor(private readonly opportunitiesService: OpportunitiesService) {}

  @Get()
  async getOpportunities() {
    return await this.opportunitiesService.getOpportunities();
  }

  @Put()
  async updateOpportunities(): Promise<void> {
    await this.opportunitiesService.updateOpportunities();
  }
}
