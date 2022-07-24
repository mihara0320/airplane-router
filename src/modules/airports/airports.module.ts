import { Module } from '@nestjs/common';

import { dataProvider } from './providers/data.provider';
import { AirportsService } from './services/airports.service';

@Module({
  providers: [AirportsService, dataProvider],
  exports: [AirportsService],
})
export class AirportsModule {}
