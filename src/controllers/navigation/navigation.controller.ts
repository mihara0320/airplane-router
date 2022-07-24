import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { GraphService } from '@modules/graph/services/graph/graph.service';
import { AirportsService } from '@modules/airports/services/airports.service';

@Controller('navigation')
export class NavigationController {
  constructor(
    private graphService: GraphService,
    private airportService: AirportsService,
  ) {}

  @Get()
  find(@Query() query: { src: string; dest: string }, @Res() res: Response) {
    const a = this.airportService.findOne('10');
    const graph = this.graphService.createGraph(a);
    return res.json(graph);
  }
}
