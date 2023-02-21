import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class GetBusDto {
  @ApiProperty({ type: String, example: 'Bến xe Gia Lâm' })
  @IsNotEmpty()
  @Transform(({ value }) => value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
  @IsString()
  fromLocation: string;

  @ApiProperty({ type: String, example: 'Nguyễn Lương Bằng' })
  @IsNotEmpty()
  @Transform(({ value }) => value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
  @IsString()
  toLocation: string;
}
