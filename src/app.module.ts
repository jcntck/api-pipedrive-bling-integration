import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PipedriveModule } from './pipedrive/pipedrive.module';
import { OpportunitiesModule } from './opportunities/opportunities.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://linkapitest:JdajJqr1Db329jTM@linkapitest.uyech.mongodb.net/linkapitest?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
    ),
    ConfigModule.forRoot(),
    PipedriveModule,
    OpportunitiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
