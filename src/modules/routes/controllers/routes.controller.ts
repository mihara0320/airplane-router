import { Controller, Get, Param } from '@nestjs/common';
import { RoutesService } from '@modules/routes/services/routes.service';

@Controller('routes')
export class RoutesController {
  constructor(private routesService: RoutesService) {}

  @Get()
  findAll() {
    return this.routesService.findAll();
  }

  @Get(':iata')
  findOne(@Param() params) {
    const iata = params.iata;
    return this.routesService.findAllForAirport(iata);
  }
}
