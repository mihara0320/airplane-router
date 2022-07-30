import { Controller, Get, Param, Query } from '@nestjs/common';
import { GraphService } from '@modules/graph/services/graph.service';

@Controller('graph')
export class GraphController {
  constructor(private graphService: GraphService) {}

  @Get()
  find(@Query() query: { src: string; dest: string }) {
    const { src, dest } = query;
    const shortestPath = this.graphService.findShortestPath(src, dest);
    const result = {
      distance: shortestPath.totalDistance,
      paths: [src, ...shortestPath.paths, dest],
    };
    return result;
  }
}
