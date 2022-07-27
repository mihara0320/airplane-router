import { Inject, Injectable } from '@nestjs/common';
import { IRoute } from '../interfaces/routes.interface';
import * as _ from 'lodash';

@Injectable()
export class RoutesService {
  private readonly _routes: IRoute[];

  constructor(@Inject('ROUTES_DATA') routes: IRoute[]) {
    this._routes = routes;
  }

  findAll() {
    return this._routes;
  }

  findAllForAirport(iata: string) {
    return _.filter(this._routes, (data) => data.sourceAirport === iata);
  }
}
