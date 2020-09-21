import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { languages } from '../../constants/language.const';
import { ILanguage } from 'src/app/models/language.model';
import { IAppStore } from '../../redux/state.model';
import { selectLocale } from '../../redux/selectors/appReducer.selector';
import { changeLocale } from '../../redux/actions';
import { TranslateService } from '@ngx-translate/core';
import { AppLanguageStore } from 'src/app/services/language-store.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent implements OnInit {
  locales: ILanguage[];
  currentLocale$: Observable<string>;

  constructor(private store: Store<IAppStore>, private translateService: TranslateService) { }

  ngOnInit(): void {
    this.locales = languages;
    this.currentLocale$ = this.store.pipe(select(selectLocale));
  }

  select(locale: string): void {
    AppLanguageStore.saveLocale(locale);
    this.store.dispatch(changeLocale({ locale }));
    this.translateService.use(locale);
  }
}
