import { Injectable } from '@nestjs/common';
import { AirportsService } from '@modules/airports/services/airports.service';
import { RoutesService } from '@modules/routes/services/routes.service';
import { ConfigService } from '@nestjs/config';
import { GeolibService } from '@common/services/geolib/geolib.service';
import { Graph } from '@modules/graph/models/graph.model';

@Injectable()
export class GraphService {
  private readonly maxLayover;
  private map;

  constructor(
    private configService: ConfigService,
    private airportService: AirportsService,
    private routesService: RoutesService,
    private geolibService: GeolibService,
  ) {
    this.maxLayover = configService.get<number>('maxLayover');
    this.map = {};
  }

  getGraph() {
    const graph = new Graph();

    const airport = this.airportService.findOne('10');
    return 'test';

    // const airportsInRange = this.getAllAirportsInRange(
    //   airport,
    //   new Set<string>(),
    //   0,
    // );

    // airports.forEach((airport) => {
    //   const routes = this.routesService.findAllForAirport(airport.airportID);
    //   routes.forEach((route) => {
    //     const nextAirport = this.airportService.findOne(
    //       route.destinationAirportID,
    //     );
    //     if (airport && nextAirport) {
    //       // const distance = this.geolibService.getDistanceInKm(
    //       //   airport,
    //       //   nextAirport,
    //       // );
    //       graph.addEdge(airport.iata, nextAirport.iata);
    //     }
    //   });
    // });
    // return graph;
  }
}
