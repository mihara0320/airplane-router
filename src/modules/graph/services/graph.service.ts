import { Injectable } from '@nestjs/common';
import { IAirport } from '@modules/airports/interfaces/airports.interface';
import { AirportsService } from '@modules/airports/services/airports.service';
import { RoutesService } from '@modules/routes/services/routes.service';
import { Vertex } from '@modules/graph/models/vertex.model';
import { ConfigService } from '@nestjs/config';
import { IVertex } from '@modules/graph/interfaces/graph.interface';
import { ADJList } from '@modules/graph/models/AdjList.model';
import { GeolibService } from '@common/services/geolib/geolib.service';

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
  getADJ() {
    const adjList = new ADJList();
    const airports = this.airportService.findAll();
    airports.forEach((airport) => {
      if (!airport.airportID) {
        return;
      }
      adjList.addNode(airport.iata);
    });
    airports.forEach((airport) => {
      if (!airport.airportID) {
        return;
      }
      const routes = this.routesService.findAllForAirport(airport.airportID);
      routes.forEach((route) => {
        const nextAirport = this.airportService.findOne(
          route.destinationAirportID,
        );
        const distance = this.geolibService.getDistanceInKm(
          airport,
          nextAirport,
        );
        adjList.addEdge(airport.iata, nextAirport.iata, distance);
      });
    });
    return adjList;
  }
  //
  // createGraph(airport: IAirport): IVertex {
  //   return this.createVertex(airport);
  // }
  //
  // createVertex(airport: IAirport, depth = 0): IVertex {
  //   const vertex = new Vertex(airport, depth);
  //   if (depth <= this.maxLayover) {
  //     const routes = this.routesService.findAllForAirport(airport.airportID);
  //     routes.forEach((route) => {
  //       const destAirport = this.airportService.findOne(
  //         route.destinationAirportID,
  //       );
  //       if (!destAirport) {
  //         return null;
  //       }
  //       const destVertex = this.createVertex(destAirport, depth + 1);
  //       vertex.addEdge(destVertex);
  //     });
  //   }
  //
  //   return vertex;
  // }
}
