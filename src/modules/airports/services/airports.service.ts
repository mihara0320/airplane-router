import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { DataService } from '@database/services/data-service.service';
import { IAirport } from '@database/interfaces/airport.interface';

@Injectable()
export class AirportsService {
  private readonly _maxLayover;

  constructor(
    private configService: ConfigService,
    private dataService: DataService,
  ) {
    this._maxLayover = configService.get<number>('maxLayover');
  }

  findAll(): IAirport[] {
    return this.dataService.airports.getAll();
  }

  findOne(iata: string): IAirport {
    return this.dataService.airports.get(iata);
  }

  // findAllAirportsInRange(fromIata: string) {
  //   const airport = this.findOne(fromIata);
  //   return this.getAllAirportsInRange(airport, new Set<string>(), 0);
  // }

  // getAllAirportsInRange(airport: IAirport, airports: Set<string>, depth = 0) {
  //   if (!airport) {
  //     return;
  //   }
  //
  //   if (!airports.has(airport.iata)) {
  //     airports.add(airport.iata);
  //   }
  //
  //   if (depth <= this._maxLayover) {
  //     const routes = this.routesService.findAllForAirport(airport.iata);
  //     routes.forEach((route) => {
  //       let destination;
  //       try {
  //         destination = this.findOne(route.destinationAirport);
  //         return this.getAllAirportsInRange(destination, airports, depth + 1);
  //       } catch (e) {
  //         console.log(`Airport not found: ${route.destinationAirport}`);
  //       }
  //     });
  //   }
  //
  //   return airports;
  // }
}
