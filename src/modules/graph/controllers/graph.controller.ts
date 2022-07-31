import { Controller, Get, Query } from '@nestjs/common';
import { GraphService } from '@modules/graph/services/graph.service';
import { IShortestPathResult } from '@modules/graph/interfaces/graph.interface';
import { FindPathDto } from '@modules/graph/dto/graph.dto';
import { AirportsService } from '@modules/airports/services/airports.service';
import {
  IataNotFoundException,
  IataNotProvidedException,
} from '@modules/graph/errors';

@Controller('graph')
export class GraphController {
  constructor(
    private graphService: GraphService,
    private airportsService: AirportsService,
  ) {}

  @Get()
  findPath(@Query() query: FindPathDto): IShortestPathResult {
    const { src, dest } = query;

    if (!src || !dest) {
      throw new IataNotProvidedException(
        'Please provide both src & dest IATA code in query',
      );
    }

    let srcAirport,
      destAirport = null;
    try {
      srcAirport = this.airportsService.findOne(src);
      destAirport = this.airportsService.findOne(dest);
    } catch (e) {
      throw new IataNotFoundException(e.message);
    }

    return this.graphService.findShortestPath(
      srcAirport.iata,
      destAirport.iata,
    );
  }
}
