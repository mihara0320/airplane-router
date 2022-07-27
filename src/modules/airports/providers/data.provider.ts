import * as data from './airports.json';
import { IAirport } from '../interfaces/airports.interface';

export const dataProvider = {
  provide: 'AIRPORTS_DATA',
  useFactory: (): Map<string, IAirport> => {
    const map = new Map<string, IAirport>();
    (data as IAirport[]).forEach((airport) => {
      if (!map.has(airport.iata)) {
        map.set(airport.iata, airport);
      }
    });
    return map;
  },
};
