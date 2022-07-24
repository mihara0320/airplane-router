import { promises as fs } from 'fs';
import { parse } from 'csv-parse/sync';

export const getParsedData = async (
  dataSource: string,
): Promise<string[][]> => {
  const fileContent = await fs.readFile(dataSource);
  return parse(fileContent);
};
