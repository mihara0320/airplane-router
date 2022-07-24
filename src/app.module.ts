import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NavigationController } from './navigation/navigation.controller';

import { RoutesService } from './providers/routes/routes.service';

import { AirportsModule } from './airports/airports.module';

import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    AirportsModule,
  ],
  controllers: [AppController, NavigationController],
  providers: [AppService, RoutesService],
})
export class AppModule {}
