import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import { AuthorModel } from '../models/author.model';
import { AUTHORS_FILE, AUTHORS_EXTENSION } from '../const';
import { IAppStore } from '../redux/state.model';
import { selectAuthorById, selectAuthors, selectLocale, selectRandomAuthor } from '../redux/selectors/appReducer.selector';
import { changeAuthors, loadAuthors } from '../redux/actions';

interface AuthorsList {
  [lang: string]: AuthorModel[];
}

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private authors: AuthorsList = {};
  private locale$: Observable<string>;
  private locale: string;

  constructor(private http: HttpClient, private store: Store<IAppStore>) {
    this.locale$ = this.store.select(selectLocale);
    this.locale$.subscribe(locale => {
      this.locale = locale;
      if (this.authors[this.locale]) {
        this.store.dispatch(changeAuthors({ authors: this.authors[this.locale] }));
      } else {
        this.store.dispatch(loadAuthors());
      }
    });
  }

  loadAuthors(): Observable<AuthorModel[]> {
    const url = `${AUTHORS_FILE}${this.locale}${AUTHORS_EXTENSION}`;
    const allAuthors = this.authors[this.locale]
      ? of(this.authors[this.locale])
      : this.http
        .get<AuthorModel[]>(url)
        .pipe(
          tap(authors => this.authors[this.locale] = authors),
        );
    return allAuthors;
  }

  getAuthors(): Observable<AuthorModel[]> {
    return this.store.pipe(select(selectAuthors));
  }

  getAuthor(authorId: string): Observable<AuthorModel> {
    return this.store.pipe(select(selectAuthorById, authorId));
  }

  getAuthorOfDay(): Observable<AuthorModel> {
    return this.store.pipe(select(selectRandomAuthor));
  }
}
