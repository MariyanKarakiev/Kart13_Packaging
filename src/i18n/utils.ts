import { type Lang, defaultLang, languages } from './translations';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function getLocalePath(lang: Lang, path: string): string {
  return `/${lang}${path === '/' ? '' : path}`;
}
