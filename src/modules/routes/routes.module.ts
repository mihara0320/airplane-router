import { Module } from '@nestjs/common';
import { dataProvider } from './providers/data.provider';
import { RoutesService } from './services/routes.service';

@Module({
  providers: [dataProvider, RoutesService],
  exports: [RoutesService],
})
export class RoutesModule {}
