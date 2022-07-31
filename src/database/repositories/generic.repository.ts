import { IGenericRepository } from '../interfaces/generic-repository.interface';

export class GenericRepository<T, RawData> implements IGenericRepository<T> {
  _data: RawData;

  constructor(data: RawData) {
    this._data = data;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  get(iata: string): T {
    return undefined;
  }

  getAll(): T[] {
    return [];
  }
}
