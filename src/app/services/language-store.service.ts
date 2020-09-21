import { Injectable } from '@angular/core';

import { LOCALE_KEY } from '../const';

@Injectable({
  providedIn: 'root',
})
export class AppLanguageStore {
  static saveLocale(locale: string): void {
    localStorage.setItem(LOCALE_KEY, locale);
  }

  static loadLocale(): string {
    return localStorage.getItem(LOCALE_KEY);
  }
}
