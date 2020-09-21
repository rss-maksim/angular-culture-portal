import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { languages, ILanguage, Lang } from './const';
import { IAppStore } from '../../redux/state.model';
import { selectLocale } from '../../redux/selectors/appReducer.selector';
import { changeLocale } from '../../redux/actions';
import { LOCALE_KEY } from '../../const';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent implements OnInit {
  locales: ILanguage[];
  currentLocale$: Observable<string>;

  constructor(private store: Store<IAppStore>, private translateService: TranslateService) {}

  ngOnInit(): void {
    this.locales = languages;
    this.currentLocale$ = this.store.pipe(select(selectLocale));
  }

  select(locale: string): void {
    localStorage.setItem(LOCALE_KEY, locale);
    this.store.dispatch(changeLocale({ locale }));
    this.translateService.use(locale);
  }
}
