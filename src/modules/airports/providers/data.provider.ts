import { ConfigService } from '@nestjs/config';
import { IAirport } from '../interfaces/airports.interface';

import { CsvService } from '@common/services/csv/csv.service';

export const dataProvider = {
  provide: 'AIRPORTS_DATA',
  useFactory: async (
    configService: ConfigService,
    csvService: CsvService,
  ): Promise<IAirport[]> => {
    const dataSource = configService.get<string>('dataSource.airports');
    const rawData = await csvService.parseData(dataSource);
    return rawData.map((raw) => {
      return {
        airportID: raw[0],
        name: raw[1],
        city: raw[2],
        country: raw[3],
        iata: raw[4],
        icao: raw[5],
        latitude: Number(raw[6]),
        longitude: Number(raw[7]),
      } as IAirport;
    });
  },
  inject: [ConfigService, CsvService],
};
