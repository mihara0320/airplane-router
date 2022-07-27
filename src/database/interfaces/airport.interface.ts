export interface IAirport {
  iata: string;
  latitude: number;
  longitude: number;
}

export type IAirportMap = Map<string, IAirport>;
