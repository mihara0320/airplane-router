import { Controller, Get, Param, Res } from '@nestjs/common';
import { GraphService } from '@modules/graph/services/graph.service';
import { Response } from 'express';

@Controller('graph')
export class GraphController {
  constructor(private graphService: GraphService) {}

  @Get()
  find(@Param() params, @Res() res: Response) {
    const graph = this.graphService.getGraph();
    const shortest = graph.findShortestPaths('HEL');
    return res.json(shortest);
  }
}
