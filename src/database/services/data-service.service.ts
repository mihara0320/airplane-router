import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { IDataServices } from '../interfaces/data-service.interface';
import { IGenericRepository } from '../interfaces/generic-repository.interface';
import { IAirport, IAirportMap } from '../interfaces/airport.interface';
import { IRoute } from '../interfaces/route.interface';
import { AirportRepository } from '../repositories/airport.repository';
import { RouteRepository } from '../repositories/route.repository';

@Injectable()
export class DataService implements IDataServices, OnApplicationBootstrap {
  airports: IGenericRepository<IAirport>;
  routes: IGenericRepository<IRoute>;

  constructor(
    @Inject('AIRPORTS_DATA')
    private airportData: IAirportMap,
    @Inject('ROUTES_DATA')
    private routeData: IRoute[],
  ) {}

  onApplicationBootstrap() {
    this.airports = new AirportRepository(this.airportData);
    this.routes = new RouteRepository(this.routeData);
  }
}
