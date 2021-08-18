import * as mongoose from 'mongoose';

export const OpportunitySchema = new mongoose.Schema(
  {
    date: Date,
    totalValue: Number,
    items: [
      {
        pipedriveId: Number,
        customerName: String,
        description: String,
        qtde: Number,
        unitValue: Number,
      },
    ],
  },
  {
    timestamps: true,
    collection: 'opportunities',
  },
);
