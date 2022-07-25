import { Controller, Get, Param, Res } from '@nestjs/common';
import { GraphService } from '@modules/graph/services/graph.service';
import { AirportsService } from '@modules/airports/services/airports.service';
import { Response } from 'express';

@Controller('graph')
export class GraphController {
  constructor(
    private graphService: GraphService,
    private airportService: AirportsService,
  ) {}

  @Get(':airportID')
  findOne(@Param() params, @Res() res: Response) {
    const airportID = params.airportID;
    const airport = this.airportService.findOne(airportID);
    const graph = this.graphService.createGraph(airport);
    return res.json(graph);
  }

  // @Get('shortest/:airportID')
  // find(@Param() params, @Res() res: Response) {
  //   const airportID = params.airportID;
  //   const airport = this.airportService.findOne(airportID);
  //   const graph = this.graphService.getADJ();
  //   return res.json(graph);
  // }

  @Get('adj')
  find(@Param() params, @Res() res: Response) {
    const graph = this.graphService.getADJ();
    return res.json(graph);
  }
}
