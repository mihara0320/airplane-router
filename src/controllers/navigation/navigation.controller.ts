import { Controller, Get, Query } from '@nestjs/common';
import { AirportsService } from '@modules/airports/providers/airports.service';
import { RoutesService } from '@modules/routes/providers/routes.service';

@Controller('navigation')
export class NavigationController {
  constructor(
    private airportsService: AirportsService,
    private routesService: RoutesService,
  ) {}

  @Get()
  find(@Query() query: { src: string; dest: string }) {
    console.log(query);
    return this.routesService.findAll();
  }
}
