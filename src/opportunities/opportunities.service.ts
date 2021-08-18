import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Deal } from 'src/pipedrive/interfaces/deal.class';
import { PipedriveService } from 'src/pipedrive/pipedrive.service';
import { Opportunity } from './interfaces/opportunity.interface';

@Injectable()
export class OpportunitiesService {
  constructor(
    @InjectModel('Opportunity')
    private readonly opportunityModel: Model<Opportunity>,
    private readonly pipedriveService: PipedriveService,
  ) {}

  async createOpportunity(): Promise<any> {
    let deals: Array<Deal>;

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

    for (let i = 0; i < deals.length; i++) {
      const opportunity = await this.opportunityModel.findOne({
        date: new Date(deals[i].won_time),
      });

      if (opportunity) {
        const hasItem = opportunity.items.some(
          (item) => item.pipedriveId == deals[i].pipedrive_id,
        );

        if (!hasItem) {
          opportunity.items.push({
            pipedriveId: deals[i].pipedrive_id,
            customerName: deals[i].person_name,
            description: 'Produto Pipedrive',
            qtde: 1,
            unitValue: deals[i].value,
          });
          await opportunity.save();
        }
      } else {
        await this.opportunityModel.create({
          date: deals[i].won_time,
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

    // TODO: add the new product in the end of array
    // TODO: send a request to bling creating a new order with the new data
    // TODO: let's split this method in severals micro methods to facilities of unit testing in the future
    return;
  }
}
