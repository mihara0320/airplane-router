import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Graph } from '@modules/graph/models/graph.model';

@Injectable()
export class GraphService {
  private readonly _maxLegs;
  private readonly _graph: Graph;

  constructor(
    @Inject('GRAPH_DATA') graph,
    private configService: ConfigService,
  ) {
    this._maxLegs = configService.get<number>('maxLegs');
    this._graph = graph;
  }

  getGraph() {
    return this._graph;
  }

  findShortestPath(src: string, dest: string) {
    const mimDistances = this._graph.dijkstra(src);
    const shortestPathToDest = mimDistances.get(dest);
    const paths = [];

    let previousEdge = shortestPathToDest.previousEdge;

    while (paths.length <= this._maxLegs && previousEdge) {
      paths.push(previousEdge);
      previousEdge = mimDistances.get(previousEdge.src).previousEdge;
    }

    return {
      totalDistance: shortestPathToDest.totalDistance,
      paths,
    };
  }
}
