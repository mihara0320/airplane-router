import { Module } from '@nestjs/common';

import { dataProvider } from './providers/data.provider';
import { AirportsService } from './services/airports.service';
import { AirportsController } from '@modules/airports/controllers/airports.controller';

@Module({
  controllers: [AirportsController],
  providers: [AirportsService, dataProvider],
  exports: [AirportsService],
})
export class AirportsModule {}
