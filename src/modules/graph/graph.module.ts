import { Module } from '@nestjs/common';
import { GraphService } from './services/graph.service';

import { AirportsModule } from '@modules/airports/airports.module';
import { RoutesModule } from '@modules/routes/routes.module';
import { GraphController } from '@modules/graph/controllers/graph.controller';

@Module({
  providers: [GraphService],
  controllers: [GraphController],
  imports: [AirportsModule, RoutesModule],
  exports: [GraphService],
})
export class GraphModule {}
