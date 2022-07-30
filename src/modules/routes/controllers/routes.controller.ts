import { Controller, Get, Param } from '@nestjs/common';
import { RoutesService } from '@modules/routes/services/routes.service';
import { IRoute } from '@database/interfaces/route.interface';
import { FindRouteDto } from '@modules/routes/dto/routes.dto';

@Controller('routes')
export class RoutesController {
  constructor(private routesService: RoutesService) {}

  @Get(':iata')
  findOne(@Param() params: FindRouteDto): IRoute[] {
    const iata = params.iata;
    return this.routesService.findAllForAirport(iata);
  }
}
