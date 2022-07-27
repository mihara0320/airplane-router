import { Inject, Injectable } from '@nestjs/common';
import { IAirport } from '../interfaces/airports.interface';
import * as _ from 'lodash';
import { ConfigService } from '@nestjs/config';
import { RoutesService } from '@modules/routes/services/routes.service';
import { InvalidIataError } from '@modules/airports/errors';

@Injectable()
export class AirportsService {
  private readonly _airports: Map<string, IAirport>;
  private readonly _maxLayover;

  constructor(
    @Inject('AIRPORTS_DATA') airports: Map<string, IAirport>,
    private configService: ConfigService,
    private routesService: RoutesService,
  ) {
    this._maxLayover = configService.get<number>('maxLayover');
    this._airports = airports;
  }

  findAll(): IAirport[] {
    return Array.from(this._airports.values());
  }

  findOne(iata: string): IAirport {
    const airport = this._airports.get(iata);
    if (!airport) {
      throw new InvalidIataError(iata);
    }
    return airport;
  }

  findAllAirportsInRange(fromIata: string) {
    const airport = this.findOne(fromIata);
    return this.getAllAirportsInRange(airport, new Set<string>(), 0);
  }

  getAllAirportsInRange(airport: IAirport, airports: Set<string>, depth = 0) {
    if (!airport) {
      return;
    }

    if (!airports.has(airport.iata)) {
      airports.add(airport.iata);
    }

    if (depth <= this._maxLayover) {
      const routes = this.routesService.findAllForAirport(airport.iata);
      routes.forEach((route) => {
        let destination;
        try {
          destination = this.findOne(route.destinationAirport);
          return this.getAllAirportsInRange(destination, airports, depth + 1);
        } catch (e) {
          console.log(`Airport not found: ${route.destinationAirport}`);
        }
      });
    }

    return airports;
  }
}
