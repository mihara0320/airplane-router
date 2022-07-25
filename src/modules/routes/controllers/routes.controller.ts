import { Controller, Get, Param } from '@nestjs/common';
import { RoutesService } from '@modules/routes/services/routes.service';

@Controller('routes')
export class RoutesController {
  constructor(private routesService: RoutesService) {}

  @Get()
  findAll() {
    return this.routesService.findAll();
  }

  @Get(':airportID')
  findOne(@Param() params) {
    const airportID = params.airportID;
    return this.routesService.findAllForAirport(airportID);
  }
}
