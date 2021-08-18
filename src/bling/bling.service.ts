import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Deal } from 'src/pipedrive/interfaces/deal.class';
import { create } from 'xmlbuilder2';

@Injectable()
export class BlingService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async createOrder(deal: Deal): Promise<any> {
    const xml = this.createXml(deal);

    return await this.httpService
      .post(
        `https://bling.com.br/Api/v2/pedido`,
        {},
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          params: {
            apikey: this.configService.get<string>('BLING_API_TOKEN'),
            xml,
          },
        },
      )
      .toPromise();
  }

  private createXml(deal: Deal): string {
    const order = {
      pedido: {
        data: new Date(deal.won_time).toLocaleDateString(),
        cliente: {
          nome: deal.person_name,
        },
        itens: {
          item: {
            codigo: deal.pipedrive_id,
            descricao: 'Produto Pipedrive',
            qtde: 1,
            vlr_unit: deal.value,
          },
        },
      },
    };

    return create({ encoding: 'UTF-8' }, order).end({ prettyPrint: true });
  }
}
