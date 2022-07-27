import { IRoute } from '../interfaces/route.interface';

export class Route implements IRoute {
  sourceAirport: string;
  destinationAirport: string;
}
