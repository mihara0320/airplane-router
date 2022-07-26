import * as data from './routes.json';
import { IRoute } from '../interfaces/routes.interface';

export const dataProvider = {
  provide: 'ROUTES_DATA',
  useFactory: async (): Promise<IRoute[]> => {
    return data;
  },
};
