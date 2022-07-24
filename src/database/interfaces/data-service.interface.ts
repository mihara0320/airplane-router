import { IGenericRepository } from './generic-repository.interface';
import { IAirport } from './airport.interface';
import { IRoute } from './route.interface';

export interface IDataServices {
  airports: IGenericRepository<IAirport>;
  routes: IGenericRepository<IRoute>;
}
