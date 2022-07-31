import { Controller, Get, Param } from '@nestjs/common';
import { AirportsService } from '@modules/airports/services/airports.service';
import { IAirport } from '@database/interfaces/airport.interface';
import { FindAirportDto } from '@modules/airports/dto/airports.dto';

@Controller('airports')
export class AirportsController {
  constructor(private airportsService: AirportsService) {}

  @Get(':iata')
  findOne(@Param() params: FindAirportDto): IAirport {
    const iata = params.iata;
    return this.airportsService.findOne(iata);
  }
}
