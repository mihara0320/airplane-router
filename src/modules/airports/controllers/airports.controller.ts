import { Controller, Get, Param, Query } from '@nestjs/common';
import { AirportsService } from '@modules/airports/services/airports.service';

@Controller('airports')
export class AirportsController {
  constructor(private airportsService: AirportsService) {}

  @Get()
  findAll(@Query() query: { from: string }) {
    const { from } = query;

    if (from) {
      return this.airportsService.findAllAirportsInRange(from);
    }
    return this.airportsService.findAll();
  }

  @Get(':iata')
  findOne(@Param() params) {
    const iata = params.iata;
    return this.airportsService.findOne(iata);
  }
}
