import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { DataService } from '@database/services/data-service.service';
import { IAirport } from '@database/interfaces/airport.interface';

@Injectable()
export class AirportsService {
  private readonly _maxLegs;

  constructor(
    private configService: ConfigService,
    private dataService: DataService,
  ) {
    this._maxLegs = configService.get<number>('maxLegs');
  }

  findAll(): IAirport[] {
    return this.dataService.airports.getAll();
  }

  findOne(iata: string): IAirport {
    return this.dataService.airports.get(iata);
  }
}
