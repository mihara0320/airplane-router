import { ConfigService } from '@nestjs/config';

import { IRoute } from '../interfaces/routes.interface';
import { CsvService } from '@common/services/csv/csv.service';

export const dataProvider = {
  provide: 'ROUTES_DATA',
  useFactory: async (
    configService: ConfigService,
    csvService: CsvService,
  ): Promise<IRoute[]> => {
    const dataSource = configService.get<string>('dataSource.routes');
    const rawData = await csvService.parseData(dataSource);
    return rawData.map((raw) => {
      return {
        sourceAirport: raw[2],
        sourceAirportID: raw[3],
        destinationAirport: raw[4],
        destinationAirportID: raw[5],
        stops: Number(raw[7]),
      } as IRoute;
    });
  },
  inject: [ConfigService, CsvService],
};
