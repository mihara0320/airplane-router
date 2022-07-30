import { Controller, Get, Param } from '@nestjs/common';
import { RoutesService } from '@modules/routes/services/routes.service';
import { IRoute } from '@database/interfaces/route.interface';

@Controller('routes')
export class RoutesController {
  constructor(private routesService: RoutesService) {}

  @Get()
  findAll(): IRoute[] {
    return this.routesService.findAll();
  }

  @Get(':iata')
  findOne(@Param() params): IRoute[] {
    const iata = params.iata;
    return this.routesService.findAllForAirport(iata);
  }
}
