import { Injectable } from '@nestjs/common';

import { DataService } from '@database/services/data-service.service';
import { IAirport } from '@database/interfaces/airport.interface';

@Injectable()
export class AirportsService {
  constructor(private dataService: DataService) {}

  findAll(): IAirport[] {
    return this.dataService.airports.getAll();
  }

  findOne(iata: string): IAirport {
    return this.dataService.airports.get(iata);
  }
}
