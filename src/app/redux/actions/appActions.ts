import { createAction, props } from '@ngrx/store';

import { AuthorModel } from 'src/app/models/author.model';
import { LOAD_AUTHORS, LOAD_AUTHORS_SUCCESS } from '../const';

export const changeLocale = createAction('[Language] change', props<{ locale: string }>());

export const changeFilter = createAction('[Authors] filter', props<{ filter: string }>());

export const changeAuthors = createAction('[Authors] list', props<{ authors: AuthorModel[] }>());

export const loadAuthors = () => ({ type: LOAD_AUTHORS });
