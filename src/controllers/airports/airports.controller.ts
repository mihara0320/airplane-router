import { Controller, Get, Param } from '@nestjs/common';
import { AirportsService } from '@modules/airports/providers/airports.service';

@Controller('airports')
export class AirportsController {
  constructor(private airportsService: AirportsService) {}

  @Get()
  findAll() {
    return this.airportsService.findAll();
  }

  @Get(':airportID')
  findOne(@Param() params) {
    const airportID = params.airportID;
    return this.airportsService.findOne(airportID);
  }
}
