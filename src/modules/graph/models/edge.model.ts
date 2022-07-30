export class Edge {
  private readonly _src: string;
  private readonly _dest: string;
  private readonly _distance: number;

  constructor(src: string, dest: string, distance: number) {
    this._src = src;
    this._dest = dest;
    this._distance = distance;
  }

  get src(): string {
    return this._src;
  }

  get dest(): string {
    return this._dest;
  }

  get distance(): number {
    return this._distance;
  }
}
