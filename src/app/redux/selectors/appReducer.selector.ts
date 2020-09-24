import { createSelector, createFeatureSelector } from '@ngrx/store';

import { IAppStore, IAppReducer } from '../state.model';

const FEATURE_KEY = 'appReducer';

export const selectFeature = createFeatureSelector<IAppStore, IAppReducer>(FEATURE_KEY);

export const selectLocale = createSelector(
  selectFeature,
  ({ locale }: IAppReducer) => locale
);

export const selectFilter = createSelector(
  selectFeature,
  ({ filter }: IAppReducer) => filter
);

export const selectAuthors = createSelector(
  selectFeature,
  selectFilter,
  ({ authors }: IAppReducer, filter: string) => filter
    ? authors.filter(
      ({ name, placeOfBirth }) => {
      const trimmed = filter.trim().toLowerCase();
      return name.toLowerCase().includes(trimmed) ||
      placeOfBirth.toLowerCase().includes(trimmed);
    })
    : authors
);

export const selectAuthorById = createSelector(
  selectFeature,
  ({ authors }: IAppReducer, authorId: string) => authors.find(({ id }) => `${id}` === authorId)
);

const MILLISECONDS_IN_DAY = 86400000;
const getRandomAuthorIndex = ({ authors: { length } }: IAppReducer = { authors: [] } as IAppReducer) =>
  Math.floor(Date.now() / MILLISECONDS_IN_DAY) % length;

export const selectRandomAuthor = createSelector(
  selectFeature,
  (state: IAppReducer) => {
    return state.authors[getRandomAuthorIndex(state)];
  }
);
