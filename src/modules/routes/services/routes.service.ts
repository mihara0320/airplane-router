import * as _ from 'lodash';

import { Injectable } from '@nestjs/common';
import { DataService } from '@database/services/data-service.service';
import { IRoute } from '@database/interfaces/route.interface';

@Injectable()
export class RoutesService {
  constructor(private dataService: DataService) {}

  findAll(): IRoute[] {
    return this.dataService.routes.getAll();
  }

  findAllForAirport(iata: string) {
    const routes = this.dataService.routes.getAll();
    return _.filter(routes, (data) => data.sourceAirport === iata);
  }
}
