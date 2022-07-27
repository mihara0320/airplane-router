import * as _ from 'lodash';
import { IRoute } from '../interfaces/route.interface';
import { GenericRepository } from './generic.repository';

export class RouteRepository extends GenericRepository<IRoute, IRoute[]> {
  _data: IRoute[];

  constructor(data: IRoute[]) {
    super(data);
  }

  get(iata: string): IRoute {
    return _.find(this._data, (o) => o.sourceAirport === iata);
  }

  getAll(): IRoute[] {
    return this._data;
  }
}
