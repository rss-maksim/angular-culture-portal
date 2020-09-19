import { Action, createReducer, on } from '@ngrx/store';

import { changeLocale } from '../actions';
import { IAppReducer } from '../state.model';
import { LOCALE_KEY } from '../../const';

export const initialState: IAppReducer = {
  locale: localStorage.getItem(LOCALE_KEY) || 'en',
};

const reducer = createReducer(
  initialState,
  on(changeLocale, (state, action) => ({ ...state, locale: action.locale }))
);

export function appReducer(state: IAppReducer, action: Action) {
  return reducer(state, action);
}
