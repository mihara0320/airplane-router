import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Graph } from '@modules/graph/models/graph.model';
import { Edge } from '@modules/graph/models/edge.model';
import { IShortestPathResult } from '@modules/graph/interfaces/graph.interface';
import * as _ from 'lodash';

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

  findShortestPath(src: string, dest: string): IShortestPathResult {
    const shortestPaths = Graph.Dijkstra(this._graph.adjacencyList, src);
    const shortestPathToDest = shortestPaths.get(dest);
    const edges: Edge[] = [];

    let previousEdge = shortestPathToDest.previousEdge;

    while (edges.length <= this._maxLegs && previousEdge) {
      edges.push(previousEdge);
      previousEdge = shortestPaths.get(previousEdge.src).previousEdge;
    }

    return {
      totalDistance: shortestPathToDest.totalDistance,
      edges: _.reverse(edges),
    };
  }
}
