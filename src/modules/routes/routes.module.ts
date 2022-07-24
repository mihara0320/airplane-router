import { Module } from '@nestjs/common';
import { dataProvider } from './providers/data.provider';
import { RoutesService } from './providers/routes.service';

@Module({
  providers: [dataProvider, RoutesService],
  exports: [RoutesService],
})
export class RoutesModule {}
