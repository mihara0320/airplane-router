import { Inject, Injectable } from '@nestjs/common';
import { IAirport } from '../interfaces/airports.interface';

@Injectable()
export class AirportsService {
  private readonly airports: IAirport[];

  constructor(@Inject('AIRPORTS_DATA') airportData: IAirport[]) {
    this.airports = airportData;
  }

  find() {
    return this.airports[0];
  }
}
