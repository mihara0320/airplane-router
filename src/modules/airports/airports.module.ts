import { Module } from '@nestjs/common';

import { dataProvider } from './providers/data.provider';
import { AirportsService } from './services/airports.service';
import { AirportsController } from '@modules/airports/controllers/airports.controller';
import { RoutesModule } from '@modules/routes/routes.module';

@Module({
  controllers: [AirportsController],
  providers: [AirportsService, dataProvider],
  imports: [RoutesModule],
  exports: [AirportsService],
})
export class AirportsModule {}
