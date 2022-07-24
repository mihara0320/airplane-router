import { Module } from '@nestjs/common';

import { dataProvider } from './providers/data.provider';
import { AirportsService } from './providers/airports.service';

@Module({
  providers: [AirportsService, dataProvider],
  exports: [AirportsService],
})
export class AirportsModule {}
