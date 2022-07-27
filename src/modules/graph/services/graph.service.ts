import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Graph } from '@modules/graph/models/graph.model';

@Injectable()
export class GraphService {
  private readonly maxLayover;
  private readonly _graph: Graph;

  constructor(
    @Inject('GRAPH_DATA') graph,
    private configService: ConfigService,
  ) {
    this.maxLayover = configService.get<number>('maxLayover');
    this._graph = graph;
  }

  getGraph() {
    return this._graph;
  }
}
