import { createSelector, createFeatureSelector } from '@ngrx/store';

import { IAppStore, IAppReducer } from '../state.model';

export const featureKey = 'appReducer';

export const selectFeature = createFeatureSelector<IAppStore, IAppReducer>(featureKey);

export const selectLocale = createSelector(
  selectFeature,
  (state: IAppReducer) => state.locale
);
