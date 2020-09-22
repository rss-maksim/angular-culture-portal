import { Pipe, PipeTransform } from '@angular/core';
import { AuthorModel } from '../models/author.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(authors: AuthorModel[], wordFilter: string, page: number, cardPerPage: number): AuthorModel[] {
    if (wordFilter !== null && wordFilter.trim() !== '') {
      return authors
      ? authors
      .slice((page - 1) * cardPerPage, page * cardPerPage)
      .filter(({ name, placeOfBirth }) =>
        name.toLowerCase().includes(wordFilter.trim().toLowerCase()) ||
        placeOfBirth.toLowerCase().includes(wordFilter.trim().toLowerCase())
      )
      : authors;
    }
    return authors
    ? authors.slice((page - 1) * cardPerPage, page * cardPerPage)
    : authors;
  }

}
