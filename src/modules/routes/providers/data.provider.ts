import { ConfigService } from '@nestjs/config';

import { IRoute } from '../interfaces/routes.interface';
import { getParsedData } from '../../../utils';

export const dataProvider = {
  provide: 'ROUTES_DATA',
  useFactory: async (configService: ConfigService): Promise<IRoute[]> => {
    const dataSource = configService.get<string>('dataSource.routes');
    const rawData = await getParsedData(dataSource);
    return rawData.map((raw) => {
      return {
        airline: raw[0],
        airlineID: raw[1],
        sourceAirport: raw[2],
        sourceAirportID: raw[3],
        destinationAirport: raw[4],
        destinationAirportID: raw[5],
        stops: Number(raw[7]),
      } as IRoute;
    });
  },
  inject: [ConfigService],
};
