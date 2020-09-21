import { Action, createReducer, on } from '@ngrx/store';

import { changeLocale } from '../actions';
import { IAppReducer } from '../state.model';
import { AppLanguageStore } from 'src/app/services/language-store.service';

export const initialState: IAppReducer = {
  locale: AppLanguageStore.loadLocale() || 'en'
};

const reducer = createReducer(
  initialState,
  on(changeLocale, (state, action) => ({ ...state, locale: action.locale })),
);

export function appReducer(state: IAppReducer, action: Action): IAppReducer {
  return reducer(state, action);
}
