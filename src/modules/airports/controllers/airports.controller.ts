import { Controller, Get, Param } from '@nestjs/common';
import { AirportsService } from '@modules/airports/services/airports.service';

@Controller('airports')
export class AirportsController {
  constructor(private airportsService: AirportsService) {}

  @Get()
  findAll() {
    return this.airportsService.findAll();
  }

  @Get(':iata')
  findOne(@Param() params) {
    const iata = params.iata;
    return this.airportsService.findOne(iata);
  }
}
