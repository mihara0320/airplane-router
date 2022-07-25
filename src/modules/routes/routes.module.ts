import { Module } from '@nestjs/common';
import { dataProvider } from './providers/data.provider';
import { RoutesService } from './services/routes.service';
import { RoutesController } from '@modules/routes/controllers/routes.controller';

@Module({
  providers: [dataProvider, RoutesService],
  controllers: [RoutesController],
  exports: [RoutesService],
})
export class RoutesModule {}
