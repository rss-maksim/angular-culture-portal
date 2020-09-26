export interface WorklogModel {
  time?: string;
  description: string;
}

export interface AllWorklogModel {
  [lang: string]: WorklogModel[];
}
