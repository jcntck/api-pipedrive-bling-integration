import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlingService } from 'src/bling/bling.service';
import { Deal } from 'src/pipedrive/interfaces/deal.class';
import { PipedriveService } from 'src/pipedrive/pipedrive.service';
import { Opportunity } from './interfaces/opportunity.interface';

@Injectable()
export class OpportunitiesService {
  constructor(
    @InjectModel('Opportunity')
    private readonly opportunityModel: Model<Opportunity>,
    private readonly pipedriveService: PipedriveService,
    private readonly blingService: BlingService,
  ) {}

  async updateOpportunities(): Promise<void> {
    let deals: Array<Deal>;

    // get all deals from pipedrive
    await this.pipedriveService.getDealsWons().then((response) => {
      deals = response.map((res) => {
        const deal = new Deal();

        deal.pipedrive_id = res.id;
        deal.title = res.title;
        deal.value = res.value;
        deal.won_time = new Date(res.won_time).toDateString();
        deal.person_name = res.person_name;
        deal.org_name = res.org_name;

        return deal;
      });
    });

    // iterates results, persists and create a new order for each deal
    for (let i = 0; i < deals.length; i++) {
      const opportunity = await this.opportunityModel.findOne({
        date: new Date(deals[i].won_time),
      });

      if (opportunity) {
        const hasItem = opportunity.items.some(
          (item) => item.pipedriveId == deals[i].pipedrive_id,
        );

        if (!hasItem) {
          this.blingService.createOrder(deals[i]);

          opportunity.items.push({
            pipedriveId: deals[i].pipedrive_id,
            customerName: deals[i].person_name,
            description: 'Produto Pipedrive',
            qtde: 1,
            unitValue: deals[i].value,
          });

          opportunity.totalValue = opportunity.items.reduce(
            (total, item) => (total += item.unitValue),
            0,
          );
          await opportunity.save();
        }
      } else {
        this.blingService.createOrder(deals[i]);

        await this.opportunityModel.create({
          date: deals[i].won_time,
          totalValue: deals[i].value,
          items: [
            {
              pipedriveId: deals[i].pipedrive_id,
              customerName: deals[i].person_name,
              description: 'Produto Pipedrive',
              qtde: 1,
              unitValue: deals[i].value,
            },
          ],
        });
      }
    }
  }

  async getOpportunities(): Promise<Array<Opportunity>> {
    return await this.opportunityModel.find();
  }
}
