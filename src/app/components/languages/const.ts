export enum Lang {
  en = 'en',
  ru = 'ru',
  by = 'by'
}

export interface ILanguage {
  name: Lang;
  label: string;
}

export const languages: ILanguage[] = [
  {
    name: Lang.en,
    label: 'EN'
  },
  {
    name: Lang.ru,
    label: 'RU'
  },
  {
    name: Lang.by,
    label: 'BY'
  }
];
