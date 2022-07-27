import * as data from './data/routes.json';
import { IRoute } from '@database/interfaces/route.interface';

export const RoutesDataProvider = {
  provide: 'ROUTES_DATA',
  useFactory: async (): Promise<IRoute[]> => {
    return data;
  },
};
