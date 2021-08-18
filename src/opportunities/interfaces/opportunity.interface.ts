import { Document } from 'mongoose';

export interface Opportunity extends Document {
  date: Date;
  totalValue: number;
  items: Array<Item>;
}

export interface Item {
  pipedriveId: number;
  customerName: string;
  description: string;
  qtde: number;
  unitValue: number;
}
