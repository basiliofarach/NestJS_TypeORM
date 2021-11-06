import { Injectable } from '@nestjs/common';
import { identity } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { Cats, Color } from './cats.models';
import { CreateCatsDto } from './dto/create-cats.dto';
import { FilterCatsDto } from './dto/filter-cats-dto';

@Injectable()
export class CatsService {
  private cats = [];

  getCatsWithFilter(filterCatsDto: FilterCatsDto): Cats[] {
    const { color, search } = filterCatsDto;
    let cat = this.getAllCats();

    if (color) {
      cat = cat.filter((cat) => cat.color === color);
    }

    if (search) {
      cat = cat.filter((cat) => cat.description.includes(search));
    }

    return cat;
  }

  getAllCats(): Cats[] {
    return this.cats;
  }

  getCatById(id: string): Cats {
    return this.cats.find((cat) => cat.id === id);
  }

  createCats(createCatsDto: CreateCatsDto): Cats {
    const { description } = createCatsDto;

    const cats = {
      id: uuid(),
      description,
      color: Color.black,
    };

    this.cats.push(cats);
    return cats;
  }

  deleteCatById(id: string): void {
    this.cats = this.cats.filter((cat) => cat.id !== id);
  }

  updateColor(id: string, color: Color): Cats {
    const cat = this.getCatById(id);
    cat.color = color;
    return cat;
  }
}
