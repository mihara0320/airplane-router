import * as csv from 'csvtojson';
import * as fs from 'fs';
import * as path from 'path';
import { CellParser, ColumnParam } from 'csvtojson/v2/Parameters';

interface IConfig {
  filename: string;
  colParser: { [key: string]: string | CellParser | ColumnParam };
  headers: string[];
}
const CONIFGS: IConfig[] = [
  {
    filename: 'airports',
    colParser: {
      airportID: 'omit',
      name: 'omit',
      city: 'omit',
      country: 'omit',
      iata: 'string',
      icao: 'omit',
      latitude: 'number',
      longitude: 'number',
      altitude: 'omit',
      dst: 'omit',
      tzDatabase: 'omit',
      timezone: 'omit',
      type: 'omit',
      source: 'omit',
    },
    headers: [
      'airportID',
      'name',
      'city',
      'country',
      'iata',
      'icao',
      'latitude',
      'longitude',
      'altitude',
      'dst',
      'tzDatabase',
      'timezone',
      'type',
      'source',
    ],
  },
  {
    filename: 'routes',
    colParser: {
      airline: 'omit',
      airlineID: 'omit',
      sourceAirport: 'string',
      sourceAirportID: 'omit',
      destinationAirport: 'string',
      destinationAirportID: 'omit',
      codeshare: 'omit',
      stops: 'omit',
      equipment: 'omit',
    },
    headers: [
      'airline',
      'airlineID',
      'sourceAirport',
      'sourceAirportID',
      'destinationAirport',
      'destinationAirportID',
      'codeshare',
      'stops',
      'equipment',
    ],
  },
];

const DATA_DIR = path.join(__dirname, '..', 'data');

export const getJsonFromCSVFile = async (config: IConfig) => {
  return csv({
    noheader: true,
    checkType: true,
    colParser: config.colParser,
    headers: config.headers,
  }).fromFile(path.join(DATA_DIR, `${config.filename}.dat`));
};

const conversion = CONIFGS.map(async (config) => {
  const jsonData = await getJsonFromCSVFile(config);
  console.log(jsonData);
  await fs.writeFileSync(
    path.join(DATA_DIR, `${config.filename}.json`),
    JSON.stringify(jsonData),
  );
});

Promise.all(conversion).then(() => console.log('done'));
