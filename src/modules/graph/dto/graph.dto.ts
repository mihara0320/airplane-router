import { ApiProperty } from '@nestjs/swagger';

export class FindPathDto {
  @ApiProperty()
  src: string;

  @ApiProperty()
  dest: string;
}
