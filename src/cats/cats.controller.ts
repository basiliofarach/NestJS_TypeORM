import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Param,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { Cats, Color } from './cats.models';
import { CatsService } from './cats.service';
import { CreateCatsDto } from './dto/create-cats.dto';
import { FilterCatsDto } from './dto/filter-cats-dto';
import { CatColorValidationPipe } from './pipes/cat-color-validation.pipe';

@Controller('cats')
export class CatsController {
  constructor(public catsService: CatsService) {}

  @Get()
  getCats(@Query(ValidationPipe) filterCatsDto: FilterCatsDto): Cats[] {
    if (Object.keys(filterCatsDto).length) {
      return this.catsService.getCatsWithFilter(filterCatsDto);
    } else {
      return this.catsService.getAllCats();
    }
  }

  @Get('/:id')
  getCatById(@Param('id') id: string): Cats {
    return this.catsService.getCatById(id);
  }

  @Post()
  createCats(@Body() createCatsDto: CreateCatsDto): Cats {
    return this.catsService.createCats(createCatsDto);
  }

  @Delete('/:id')
  deleteCatById(@Param('id') id: string): void {
    return this.catsService.deleteCatById(id);
  }

  @Patch('/:id/color')
  updateColor(
    @Param('id') id: string,
    @Body('color', CatColorValidationPipe) color: Color,
  ): Cats {
    return this.catsService.updateColor(id, color);
  }
}
