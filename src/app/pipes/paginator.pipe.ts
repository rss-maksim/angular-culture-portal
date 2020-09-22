import { Pipe, PipeTransform } from '@angular/core';
import { AuthorModel } from '../models/author.model';

@Pipe({
  name: 'paginator'
})
export class PaginatorPipe implements PipeTransform {

  transform(authors: AuthorModel[], page: number, cardPerPage: number): AuthorModel[] {
    return authors
    ? authors.slice((page) * cardPerPage, (page + 1) * cardPerPage)
    : authors;
  }
}
