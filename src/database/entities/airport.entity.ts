import { IAirport } from '../interfaces/airport.interface';

export class Airport implements IAirport {
  iata: string;
  latitude: number;
  longitude: number;
}
