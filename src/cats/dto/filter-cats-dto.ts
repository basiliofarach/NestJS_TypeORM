import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { Color } from '../cats.models';

export class FilterCatsDto {
  @IsOptional()
  @IsIn([Color.black, Color.gray, Color.white])
  color: Color;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
