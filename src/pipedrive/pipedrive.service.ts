import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PipedriveService {
  private url: string;

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {
    const companyDomain = this.configService.get<string>(
      'PIPEDRIVE_COMPANY_DOMAIN',
    );
    this.url = `https://${companyDomain}.pipedrive.com/api/v1/`;
  }

  getDeals(): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(`${this.url}/deals`, {
        params: {
          api_token: this.configService.get<string>('PIPEDRIVE_API_TOKEN'),
        },
      })
      .pipe(map((response) => response.data));
  }
}
