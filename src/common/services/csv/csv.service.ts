import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import { parse } from 'csv-parse/sync';

@Injectable()
export class CsvService {
  async parseData(dataSource: string): Promise<string[][]> {
    const fileContent = await fs.readFile(dataSource);
    return parse(fileContent);
  }
}
