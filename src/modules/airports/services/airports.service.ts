import { Inject, Injectable } from '@nestjs/common';
import { IAirport } from '../interfaces/airports.interface';
import * as _ from 'lodash';
import { ConfigService } from '@nestjs/config';
import { RoutesService } from '@modules/routes/services/routes.service';

@Injectable()
export class AirportsService {
  private readonly airports: IAirport[];
  private readonly maxLayover;

  constructor(
    @Inject('AIRPORTS_DATA') airportData: IAirport[],
    private configService: ConfigService,
    private routesService: RoutesService,
  ) {
    this.maxLayover = configService.get<number>('maxLayover');
    this.airports = airportData;
  }

  findAll() {
    return this.airports;
  }

  findOne(airportID: string) {
    return _.find(this.airports, (data) => data.airportID === airportID);
  }

  findOneByIata(iata: string) {
    return _.find(this.airports, (data) => data.iata === iata);
  }

  findAllAirportsInRange(fromIata: string) {
    const airport = this.findOneByIata(fromIata);
    return this.getAllAirportsInRange(airport, new Set<string>(), 0);
  }

  getAllAirportsInRange(airport: IAirport, airports: Set<string>, depth = 0) {
    if (!airport) {
      return;
    }

    if (!airports.has(airport.iata)) {
      airports.add(airport.iata);
    }

    if (depth <= this.maxLayover) {
      const routes = this.routesService.findAllForAirport(airport.airportID);
      routes.forEach((route) => {
        const destAirport = this.findOne(route.destinationAirportID);
        return this.getAllAirportsInRange(destAirport, airports, depth + 1);
      });
    }

    return airports;
  }
}
