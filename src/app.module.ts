import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NavigationController } from './navigation/navigation.controller';

import { RoutesService } from './providers/routes/routes.service';
import { AirportsService } from './providers/airports/airports.service';

@Module({
  imports: [],
  controllers: [AppController, NavigationController],
  providers: [AppService, RoutesService, AirportsService],
})
export class AppModule {}
