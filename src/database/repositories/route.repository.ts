import * as _ from 'lodash';
import { IRoute } from '../interfaces/route.interface';
import { GenericRepository } from './generic.repository';
import { Route } from '@database/entities/route.entity';

export class RouteRepository extends GenericRepository<Route, Route[]> {
  _data: IRoute[];

  constructor(data: IRoute[]) {
    super(data);
  }

  get(iata: string): IRoute {
    return _.find<IRoute>(this._data, (o) => o.sourceAirport === iata);
  }

  getAll(): IRoute[] {
    return this._data;
  }
}
