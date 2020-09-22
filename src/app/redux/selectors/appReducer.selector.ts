import { createSelector, createFeatureSelector } from '@ngrx/store';

import { IAppStore, IAppReducer } from '../state.model';

export const featureKey = 'appReducer';

export const selectFeature = createFeatureSelector<IAppStore, IAppReducer>(featureKey);

export const selectLocale = createSelector(
  selectFeature,
  (state: IAppReducer) => state.locale
);

export const selectFilter = createSelector(
  selectFeature,
  (state: IAppReducer) => state.filter
);

export const selectAuthors = createSelector(
  selectFeature,
  // selectFilter,
  // selectLocale,
  // (state: IAppReducer, filter: string, locale: string) => state.authors
  (state: IAppReducer) => state.authors
);

export const selectAuthorById = createSelector(
  selectFeature,
  // selectFilter,
  // selectLocale,
  // (state: IAppReducer, filter: string, locale: string) => state.authors
  (state: IAppReducer) => state.authors
);
