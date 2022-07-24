import { ConfigService } from '@nestjs/config';
import { promises as fs } from 'fs';
import { parse } from 'csv-parse/sync';
import { IAirport } from '../interfaces/airports.interface';

export const dataProvider = {
  provide: 'AIRPORTS_DATA',
  useFactory: async (configService: ConfigService): Promise<IAirport[]> => {
    const dataSource = configService.get<string>('dataSource.airports');
    const fileContent = await fs.readFile(dataSource);
    const rawData: string[][] = parse(fileContent);
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
  inject: [ConfigService],
};
