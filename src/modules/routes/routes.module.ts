import { Module } from '@nestjs/common';

import { RoutesService } from './services/routes.service';
import { RoutesController } from '@modules/routes/controllers/routes.controller';

@Module({
  providers: [RoutesService],
  controllers: [RoutesController],
  exports: [RoutesService],
})
export class RoutesModule {}
