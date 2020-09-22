import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { IAppStore } from 'src/app/redux/state.model';
import { selectAuthors } from 'src/app/redux/selectors/appReducer.selector';
import { loadAuthors } from 'src/app/redux/actions';
import { AuthorModel } from 'src/app/models/author.model';

@Injectable({
  providedIn: 'root',
})
export class AppAuthorGuard implements CanActivate {
  constructor(private store: Store<IAppStore>) { }

  canActivate(): Observable<boolean> {
    return this.receiveAuthors().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false)),
    );
  }

  receiveAuthors(): Observable<AuthorModel[]> {
    return this.store.select(selectAuthors).pipe(
      tap((authors: AuthorModel[]) => {
        if (!authors || !authors.length) {
          this.store.dispatch(loadAuthors());
        }
      }),
      filter((authors: AuthorModel[]) => !!authors && !!authors.length),
      take(1)
    );
  }
}
