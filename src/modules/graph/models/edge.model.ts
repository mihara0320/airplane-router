export class Edge {
  _iata: string;
  _distance: number;

  constructor(iata: string, distance: number) {
    this._iata = iata;
    this._distance = distance;
  }
}
