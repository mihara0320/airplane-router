import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { NavigationController } from '@controllers/navigation/navigation.controller';

import { AirportsModule } from '@modules/airports/airports.module';
import { RoutesModule } from '@modules/routes/routes.module';

import configuration from '@config/configuration';
import { CommonModule } from '@common/common.module';
import { AirportsController } from './controllers/airports/airports.controller';
import { RoutesController } from './controllers/routes/routes.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    CommonModule,
    AirportsModule,
    RoutesModule,
  ],
  controllers: [AppController, NavigationController, AirportsController, RoutesController],
  providers: [AppService],
})
export class AppModule {}
