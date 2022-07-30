import { Module } from '@nestjs/common';
import { GraphService } from './services/graph.service';

import { AirportsModule } from '@modules/airports/airports.module';
import { RoutesModule } from '@modules/routes/routes.module';
import { GraphController } from '@modules/graph/controllers/graph.controller';
import { GraphProvider } from '@modules/graph/providers/graph.provider';

@Module({
  providers: [GraphService, GraphProvider],
  controllers: [GraphController],
  imports: [AirportsModule, RoutesModule],
  exports: [GraphService, GraphProvider],
})
export class GraphModule {}
