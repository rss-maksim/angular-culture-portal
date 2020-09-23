import { AuthorModel } from '../models/author.model';

export interface IAppReducer {
  locale: string;
  filter: string;
  authors: AuthorModel[];
}

export interface IAppStore {
  appReducer: IAppReducer;
}
