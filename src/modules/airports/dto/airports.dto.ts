import { ApiProperty } from '@nestjs/swagger';

export class FindAirportDto {
  @ApiProperty()
  iata: string;
}
