import { Global, Module } from '@nestjs/common';
import { CsvService } from './services/csv/csv.service';
import { GeolibService } from './services/geolib/geolib.service';

@Global()
@Module({
  providers: [CsvService, GeolibService],
  exports: [CsvService, GeolibService],
})
export class CommonModule {}
