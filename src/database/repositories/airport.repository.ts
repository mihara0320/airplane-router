import { IAirport, IAirportMap } from '../interfaces/airport.interface';
import { GenericRepository } from './generic.repository';
import { InvalidIataError } from '@database/errors';

export class AirportRepository extends GenericRepository<
  IAirport,
  IAirportMap
> {
  _data: IAirportMap;

  constructor(data: IAirportMap) {
    super(data);
  }

  get(iata: string): IAirport {
    const airport = this._data.get(iata);
    if (!airport) {
      throw new InvalidIataError(iata);
    }
    return airport;
  }

  getAll(): IAirport[] {
    return Array.from(this._data.values());
  }
}
