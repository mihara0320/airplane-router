import * as data from './data/airports.json';
import { IAirport, IAirportMap } from '../interfaces/airport.interface';

const map: IAirportMap = new Map<string, IAirport>();
(data as IAirport[]).forEach((airport) => {
  if (!map.has(airport.iata)) {
    map.set(airport.iata, airport);
  }
});

export const AirportsDataProvider = {
  provide: 'AIRPORTS_DATA',
  useValue: map,
};
