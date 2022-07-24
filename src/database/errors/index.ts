export class InvalidIataError extends Error {
  constructor(iata: string) {
    super(`Invalid IATA Code: ${iata}`);
  }
}
