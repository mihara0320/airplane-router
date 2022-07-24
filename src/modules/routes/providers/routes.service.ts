import { Inject, Injectable } from '@nestjs/common';
import { IRoute } from '../interfaces/routes.interface';

@Injectable()
export class RoutesService {
  private readonly routes: IRoute[];

  constructor(@Inject('ROUTES_DATA') routesData: IRoute[]) {
    this.routes = routesData;
  }

  find() {
    return this.routes[0];
  }
}
