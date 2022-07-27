import * as data from './data/routes.json';

export const RoutesDataProvider = {
  provide: 'ROUTES_DATA',
  useValue: data,
};
