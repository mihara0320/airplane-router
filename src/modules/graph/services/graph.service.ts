import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Graph } from '@modules/graph/models/graph.model';
import { Vertex } from '@modules/graph/models/vertex';
import { AirportsService } from '@modules/airports/services/airports.service';
import { RoutesService } from '@modules/routes/services/routes.service';
import { GeolibService } from '@common/services/geolib/geolib.service';

@Injectable()
export class GraphService {
  private readonly maxLayover;
  private readonly _graph: Graph;

  constructor(
    @Inject('GRAPH_DATA') graph,
    private configService: ConfigService,

    private airportsService: AirportsService,
    private routesService: RoutesService,
    private geolibService: GeolibService,
  ) {
    this.maxLayover = configService.get<number>('maxLayover');
    this._graph = graph;
  }

  getGraph() {
    return this._graph;
  }

  findShortestPath(src: string, dest: string) {
    const mimDistances = this._graph.dijkstras(src);
    return mimDistances.get(dest);
  }

  getVertex(src: string) {
    const createVertex = (iata: string, depth = 0): Vertex => {
      if (depth > 4) {
        return;
      }

      let vertex, srcAirport, destAirport;
      try {
        srcAirport = this.airportsService.findOne(iata);
        vertex = new Vertex(iata, depth);

        const routes = this.routesService.findAllForAirport(iata);
        routes.forEach((route) => {
          destAirport = this.airportsService.findOne(route.destinationAirport);

          const distance = this.geolibService.getDistanceInKm(
            srcAirport,
            destAirport,
          );
          vertex.addEdge(destAirport.iata, distance);
          createVertex(destAirport.iata, depth + 1);
        });
      } catch (e) {
        return;
      }

      return vertex;
    };

    return createVertex(src);
  }
}
