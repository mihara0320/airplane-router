export interface IAirport {
  airportID: string;
  iata: string;
  latitude: number;
  longitude: number;
}

export type IAirportMap = Map<string, IAirport>;
