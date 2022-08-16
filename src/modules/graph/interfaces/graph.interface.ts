import { Edge } from '@modules/graph/models/edge.model';

export interface IShortestPathResult {
  totalDistance: number;
  edges: Edge[];
}
