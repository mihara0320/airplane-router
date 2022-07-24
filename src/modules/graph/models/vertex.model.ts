import { IEdge, IVertex } from '@modules/graph/interfaces/graph.interface';
import { IAirport } from '@modules/airports/interfaces/airports.interface';
import { Edge } from '@modules/graph/models/edge.model';
import { getDistance, convertDistance } from 'geolib';

export class Vertex implements IVertex {
  airport: IAirport;
  edges: IEdge[];
  depth: number;

  constructor(airport: IAirport, depth: number) {
    this.airport = airport;
    this.edges = [];
    this.depth = depth;
  }

  addEdge(vertex: IVertex) {
    const distance = getDistance(
      { latitude: this.airport.latitude, longitude: this.airport.longitude },
      { latitude: vertex.airport.latitude, longitude: vertex.airport.latitude },
    );

    const distanceInKm = convertDistance(distance, 'km');
    this.edges.push(new Edge(vertex, distanceInKm));
  }
}
