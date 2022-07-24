import { Module } from '@nestjs/common';
import { GraphService } from './services/graph/graph.service';

import { AirportsModule } from '@modules/airports/airports.module';
import { RoutesModule } from '@modules/routes/routes.module';

@Module({
  providers: [GraphService],
  imports: [AirportsModule, RoutesModule],
  exports: [GraphService],
})
export class GraphModule {}
