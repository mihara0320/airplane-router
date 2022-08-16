import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AirportsModule } from '@modules/airports/airports.module';
import { RoutesModule } from '@modules/routes/routes.module';

import { CommonModule } from '@common/common.module';
import { GraphModule } from '@modules/graph/graph.module';
import { DatabaseModule } from '@database/database.module';
import configuration from '@config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    CommonModule,
    AirportsModule,
    RoutesModule,
    GraphModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
