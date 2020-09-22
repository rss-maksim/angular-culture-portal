import { createAction, props } from '@ngrx/store';

export const changeLocale = createAction('[Language] change', props<{ locale: string }>());
