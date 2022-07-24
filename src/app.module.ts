import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NavigationController } from './controllers/navigation/navigation.controller';

import { AirportsModule } from './modules/airports/airports.module';
import { RoutesModule } from './modules/routes/routes.module';

import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    AirportsModule,
    RoutesModule,
  ],
  controllers: [AppController, NavigationController],
  providers: [AppService],
})
export class AppModule {}
