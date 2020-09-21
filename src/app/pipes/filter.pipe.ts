import { stringify } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';
import { AuthorModel } from '../models/author.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(authors: AuthorModel[], wordFilter: string): AuthorModel[] {
    if (wordFilter !== null && wordFilter.trim() !== '') {
      return authors.filter(({ name, placeOfBirth }) =>
        name.toLowerCase().includes(wordFilter.trim()) || placeOfBirth.toLowerCase().includes(wordFilter.trim())
      );
    }
    return authors;
  }

}
