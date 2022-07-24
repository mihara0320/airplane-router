import { Controller, Get } from '@nestjs/common';
import { AirportsService } from '../airports/providers/airports.service';

@Controller('navigation')
export class NavigationController {
  constructor(private airportsService: AirportsService) {}

  @Get()
  index(): string {
    this.airportsService.find();
    return JSON.stringify(this.airportsService.find());
  }
}
