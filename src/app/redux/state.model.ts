export interface IAppReducer {
  locale: string;
}

export interface IAppStore {
  appReducer: IAppReducer;
}
