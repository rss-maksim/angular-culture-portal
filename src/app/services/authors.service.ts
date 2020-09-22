import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, concat } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AuthorModel } from '../models/author.model';
import { IAppStore } from '../redux/state.model';
import { AUTHORS_FILE, AUTHORS_EXTENSION } from '../const';
import { selectLocale } from '../redux/selectors/appReducer.selector';
import { languages } from 'src/app/constants/language.const';
import { Lang } from '../models/language.model';

interface AuthorsList {
  [lang: string]: BehaviorSubject<AuthorModel[]>;
}

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private authors: AuthorsList = {}; // = new BehaviorSubject<AuthorModel[]>(null);
  private locale$: Observable<string>;
  private locale: string;

  constructor(private http: HttpClient, private store: Store<IAppStore>) {
    this.locale$ = this.store.select(selectLocale);
    this.locale$.subscribe(locale => {
      this.locale = locale;
      if (!this.authors[locale]) {
        this.authors[locale] = new BehaviorSubject<AuthorModel[]>(null);
      }
    });
  }

  getAuthors(filter?: string): Observable<AuthorModel[]> {
    const url = `${AUTHORS_FILE}${this.locale}${AUTHORS_EXTENSION}`;

    return this.http
      .get<AuthorModel[]>(url)
      .pipe(
        tap(authors => this.authors[this.locale] = new BehaviorSubject<AuthorModel[]>(authors))
        // ,
        // map(authors => this.authors[this.locale].asObservable())
      );
    // const allAuthors =
    // return this.authors[this.locale]
    //   ? this.authors[this.locale].asObservable()
    //   : this.http
    //     .get<AuthorModel[]>(url)
    //     .pipe(
    //       tap(authors => this.authors[this.locale] = new BehaviorSubject<AuthorModel[]>(authors)),
    //       switchMap(() => this.authors[this.locale].asObservable())
    //     );
    // return allAuthors.pipe(
    //   map(authors => filter
    //     ? authors.filter(({ name, placeOfBirth }) =>
    //       name.toLowerCase().includes(filter) || placeOfBirth.toLowerCase().includes(filter)
    //     )
    //     : authors
    //   )
    // );
  }

  // getAuthor(authorId: string): Observable<AuthorModel> {
  //   return this.getAuthors().pipe(
  //     map(authors => authors.find(({ id }) => id === authorId))
  //   );
  // }

  getAuthorOfDay(): Observable<AuthorModel> {
    return this.getAuthors().pipe(
      map(authors => {
        const authorIndex = Math.floor(Math.random() * authors.length);
        return authors[authorIndex];
      })
    );
  }
}
