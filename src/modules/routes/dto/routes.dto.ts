import { ApiProperty } from '@nestjs/swagger';

export class FindRouteDto {
  @ApiProperty()
  iata: string;
}
