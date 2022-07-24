import { Global, Module } from '@nestjs/common';
import { CsvService } from './services/csv/csv.service';

@Global()
@Module({
  providers: [CsvService],
  exports: [CsvService],
})
export class CommonModule {}
