import { AirportsService } from '@modules/airports/services/airports.service';
import { RoutesService } from '@modules/routes/services/routes.service';
import { Graph } from '@modules/graph/models/graph.model';

import { Edge } from '@modules/graph/models/edge.model';
import { GeolibService } from '@common/services/geolib/geolib.service';

export const GraphProvider = {
  provide: 'GRAPH_DATA',
  useFactory: (
    airportsService: AirportsService,
    routeService: RoutesService,
    geolibService: GeolibService,
  ) => {
    const graph = new Graph();
    const airports = airportsService.findAll();
    airports.forEach((srcAirport) => {
      const routes = routeService.findAllForAirport(srcAirport.iata);
      routes.forEach((route) => {
        let destAirport;
        try {
          destAirport = airportsService.findOne(route.destinationAirport);
        } catch (e) {
          return;
        }

        const distance = geolibService.getDistanceInKm(srcAirport, destAirport);
        const edge = new Edge(srcAirport.iata, destAirport.iata, distance);
        graph.addEdge(srcAirport.iata, edge);
      });
    });
    return graph;
  },
  inject: [AirportsService, RoutesService, GeolibService],
};
