import { Controller, Get } from '@nestjs/common';
import { AirportsService } from '../../modules/airports/providers/airports.service';
import { RoutesService } from '../../modules/routes/providers/routes.service';

@Controller('navigation')
export class NavigationController {
  constructor(
    private airportsService: AirportsService,
    private routesService: RoutesService,
  ) {}

  @Get()
  index(): string {
    return JSON.stringify(this.routesService.find());
  }
}
