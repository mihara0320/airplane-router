import { Graph } from './graph.model';
import { Test, TestingModule } from '@nestjs/testing';

import { AirportsService } from '@modules/airports/services/airports.service';
import { RoutesService } from '@modules/routes/services/routes.service';
import { GeolibService } from '@common/services/geolib/geolib.service';
import { GraphProvider } from '@modules/graph/providers/graph.provider';
import { ConfigService } from '@nestjs/config';
import { DatabaseModule } from '@database/database.module';

describe('Graph Model', () => {
  let graph: Graph;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [
        ConfigService,
        AirportsService,
        RoutesService,
        GeolibService,
        GraphProvider,
      ],
    }).compile();

    graph = module.get<Graph>('GRAPH_DATA');
  });

  it('dijkstras test', () => {
    const result = graph.dijkstras('HEL');
    expect(result).toBe('');
  });
});
