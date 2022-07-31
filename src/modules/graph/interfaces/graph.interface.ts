import { Edge } from '@modules/graph/models/edge.model';

export interface IShortestPathResult {
  totalDistance: string;
  path: string;
  edges: Edge[];
}
