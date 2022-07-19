export enum Role {
  Super = 'super',
  Admin = 'admin',
  User = 'user',
}

export type Roles = Record<Role, boolean>

export enum Language {
  de = 'Deutsch',
  en = 'English',
  es = 'Español',
  fa = 'فارسی',
  fr = 'Français',
  id = 'Bahasa Indonesia',
  ja = '日本語',
  it_IT = 'Italiano',
  ko = '한국인',
  lv = 'Latviešu',
  nl = 'Nederlandse',
  ru = 'Pусский',
  zh_CN = '大陆简体',
  zh_HK = '香港繁體',
  zh_TW = '臺灣正體',
  sv = 'Svenska',
  tr = 'Turkish',
  da = 'Dansk',
  vi = 'Tiếng Việt',
  no = 'Norsk',
  iw = 'עִברִית',
  fi = 'Suomalainen',
  uk = 'Українська',
  hr = 'Hrvatski',
  th = 'ไทย',
  sl = 'Slovenščina',
  pt_BR = 'Português (Brasil)',
}
