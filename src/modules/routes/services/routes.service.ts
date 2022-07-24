import { Inject, Injectable } from '@nestjs/common';
import { IRoute } from '../interfaces/routes.interface';
import * as _ from 'lodash';

@Injectable()
export class RoutesService {
  private readonly routes: IRoute[];

  constructor(@Inject('ROUTES_DATA') routesData: IRoute[]) {
    this.routes = routesData;
  }

  findAll() {
    return this.routes;
  }

  findAllForAirport(airportID: string) {
    return _.filter(this.routes, (data) => data.sourceAirportID === airportID);
  }
}
