import { Pipe, PipeTransform } from '@angular/core';
import { AuthorModel } from '../models/author.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(authors: AuthorModel[], wordFilter: string): AuthorModel[] {
    const trimmed = wordFilter ? wordFilter.trim().toLowerCase() : '';
    if (trimmed !== '') {
      return authors
      ? authors
      .filter(({ name, placeOfBirth }) =>
        name.toLowerCase().includes(trimmed) ||
        placeOfBirth.toLowerCase().includes(trimmed)
      )
      : authors;
    }
    return authors;
  }

}
