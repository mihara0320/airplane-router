import { Controller, Get, Param } from '@nestjs/common';
import { AirportsService } from '@modules/airports/services/airports.service';
import { IAirport } from '@database/interfaces/airport.interface';

@Controller('airports')
export class AirportsController {
  constructor(private airportsService: AirportsService) {}

  @Get()
  findAll(): IAirport[] {
    return this.airportsService.findAll();
  }

  @Get(':iata')
  findOne(@Param() params): IAirport {
    const iata = params.iata;
    return this.airportsService.findOne(iata);
  }
}
