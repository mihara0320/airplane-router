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

  @Get(':airportID')
  findOne(@Param() params) {
    const airportID = params.airportID;
    return this.airportsService.findOne(airportID);
  }
}
