import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { AuthorModel } from '../models/author.model';
import { AUTHORS_JSON } from '../const';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private authors$: BehaviorSubject<AuthorModel[]> = new BehaviorSubject<AuthorModel[]>(null);

  constructor(private http: HttpClient) { }

  getAuthors(filter?: string): Observable<AuthorModel[]> {
    const allAuthors = this.authors$.value
      ? this.authors$.asObservable()
      : this.http
        .get<AuthorModel[]>(AUTHORS_JSON)
        .pipe(
          tap(authors => this.authors$.next(authors))
        );
    return allAuthors.pipe(
      map(authors => filter
        ? authors.filter(({ name, placeOfBirth }) =>
          name.toLowerCase().includes(filter) || placeOfBirth.toLowerCase().includes(filter)
        )
        : authors
      )
    );
  }

  getAuthor(authorId: string): Observable<AuthorModel> {
    return this.getAuthors().pipe(
      map(authors => authors.find(({ id }) => id === authorId))
    );
  }

  getAuthorOfDay(): Observable<AuthorModel> {
    return this.getAuthors().pipe(
      map(authors => {
        const authorIndex = Math.floor(Math.random() * authors.length);
        return authors[authorIndex];
      })
    );
  }
}
