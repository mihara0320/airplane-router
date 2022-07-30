import { Controller, Get, Query } from '@nestjs/common';
import { GraphService } from '@modules/graph/services/graph.service';
import { IShortestPathResult } from '@modules/graph/interfaces/graph.interface';

@Controller('graph')
export class GraphController {
  constructor(private graphService: GraphService) {}

  @Get()
  find(@Query() query: { src: string; dest: string }): IShortestPathResult {
    const { src, dest } = query;
    return this.graphService.findShortestPath(src, dest);
  }
}
