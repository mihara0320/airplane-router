import * as data from './data/airports.json';
import { IAirport, IAirportMap } from '../interfaces/airport.interface';
import { Airport } from '@database/entities/airport.entity';

const map: IAirportMap = new Map<string, Airport>();
(data as IAirport[]).forEach((airport) => {
  if (!map.has(airport.iata)) {
    map.set(airport.iata, airport);
  }
});

export const AirportsDataProvider = {
  provide: 'AIRPORTS_DATA',
  useValue: map,
};
