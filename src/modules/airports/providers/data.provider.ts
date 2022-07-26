import * as data from './airports.json';
import { IAirport } from '../interfaces/airports.interface';

export const dataProvider = {
  provide: 'AIRPORTS_DATA',
  useFactory: (): IAirport[] => {
    return data;
  },
};
