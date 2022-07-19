import { Controller, Get } from '@nestjs/common';

@Controller('navigation')
export class NavigationController {
  @Get()
  index(): string {
    return 'here is the shortest paths';
  }
}
