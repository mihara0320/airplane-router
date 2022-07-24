import { Inject, Injectable } from '@nestjs/common';
import { IAirport } from '../interfaces/airports.interface';
import * as _ from 'lodash';

@Injectable()
export class AirportsService {
  private readonly airports: IAirport[];

  constructor(@Inject('AIRPORTS_DATA') airportData: IAirport[]) {
    this.airports = airportData;
  }

  findAll() {
    return this.airports;
  }

  findOne(airportID: string) {
    return _.find(this.airports, (data) => data.airportID === airportID);
  }
}
