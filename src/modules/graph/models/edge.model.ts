export class Edge {
  private readonly _iata: string;
  private readonly _distance: number;

  constructor(iata: string, distance: number) {
    this._iata = iata;
    this._distance = distance;
  }

  get iata(): string {
    return this._iata;
  }

  get distance(): number {
    return this._distance;
  }
}
