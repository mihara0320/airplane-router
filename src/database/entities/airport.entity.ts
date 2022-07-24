import { IAirport } from '../interfaces/airport.interface';

export class Airport implements IAirport {
  airportID: string;
  iata: string;
  latitude: number;
  longitude: number;
}
