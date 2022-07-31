import { Controller, Get, Query } from '@nestjs/common';
import { GraphService } from '@modules/graph/services/graph.service';
import { IShortestPathResult } from '@modules/graph/interfaces/graph.interface';
import { FindPathDto } from '@modules/graph/dto/graph.dto';

@Controller('graph')
export class GraphController {
  constructor(private graphService: GraphService) {}

  @Get()
  findPath(@Query() query: FindPathDto): IShortestPathResult {
    const { src, dest } = query;
    return this.graphService.findShortestPath(src, dest);
  }
}
