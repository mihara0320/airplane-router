import { Module } from '@nestjs/common';

import { AirportsService } from './services/airports.service';
import { AirportsController } from '@modules/airports/controllers/airports.controller';

@Module({
  controllers: [AirportsController],
  providers: [AirportsService],
  exports: [AirportsService],
})
export class AirportsModule {}
