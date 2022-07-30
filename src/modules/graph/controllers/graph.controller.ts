import { Controller, Get, Query } from '@nestjs/common';
import { GraphService } from '@modules/graph/services/graph.service';

@Controller('graph')
export class GraphController {
  constructor(private graphService: GraphService) {}

  @Get()
  find(@Query() query: { src: string; dest: string }) {
    const { src, dest } = query;
    return this.graphService.findShortestPath(src, dest);
  }
}
