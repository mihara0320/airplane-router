import { Global, Module } from '@nestjs/common';
import { GeolibService } from './services/geolib/geolib.service';

@Global()
@Module({
  providers: [GeolibService],
  exports: [GeolibService],
})
export class CommonModule {}
