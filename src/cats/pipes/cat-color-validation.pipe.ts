import { PipeTransform, BadRequestException } from '@nestjs/common';
import { Color } from '../cats.models';

export class CatColorValidationPipe implements PipeTransform {
  readonly allowedColors = [Color.black, Color.gray, Color.white];

  transform(value: any) {
    if (!this.isColorValid(value)) {
      throw new BadRequestException(`"${value}" is an invalid color`);
    }

    return value;
  }

  private isColorValid(color: any) {
    const idx = this.allowedColors.indexOf(color);
    return idx !== -1;
  }
}
