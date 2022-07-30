import { Global, Module } from '@nestjs/common';
import { DataService } from './services/data-service.service';
import { AirportsDataProvider } from '@database/providers/airport.provider';
import { RoutesDataProvider } from '@database/providers/route.provider';

@Global()
@Module({
  providers: [DataService, AirportsDataProvider, RoutesDataProvider],
  exports: [DataService],
})
export class DatabaseModule {}
