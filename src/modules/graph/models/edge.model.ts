export class Edge {
  src: string;
  dest: string;
  distance: number;

  constructor(src: string, dest: string, distance: number) {
    this.src = src;
    this.dest = dest;
    this.distance = distance;
  }
}

export class EdgeTracker {
  previousEdge: Edge;
  totalDistance: number;

  constructor(previousEdge: Edge, totalDistance: number) {
    this.previousEdge = previousEdge;
    this.totalDistance = totalDistance;
  }
}
