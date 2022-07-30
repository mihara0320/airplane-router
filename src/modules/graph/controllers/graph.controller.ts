import { Controller, Get } from '@nestjs/common';
import { GraphService } from '@modules/graph/services/graph.service';

@Controller('graph')
export class GraphController {
  constructor(private graphService: GraphService) {}

  @Get()
  find() {
    const graph = this.graphService.getGraph();
    const shortest = graph.dijkstras('HEL');
    return JSON.stringify(shortest);
  }
}
