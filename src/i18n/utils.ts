import { languages, defaultLang, type Lang } from "./languages";
import en from "./translations/en.json";
import ar from "./translations/ar.json";
import fr from "./translations/fr.json";

const translations = { en, ar, fr } as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split(".");
    let value: unknown = translations[lang];
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        value = undefined;
        break;
      }
    }
    if (typeof value === "string") return value;

    let fallback: unknown = translations[defaultLang];
    for (const k of keys) {
      if (fallback && typeof fallback === "object" && k in fallback) {
        fallback = (fallback as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    return typeof fallback === "string" ? fallback : key;
  };
}

export function getLocalizedPath(lang: Lang, path: string): string {
  return `/${lang}${path}`;
}

export function getDir(lang: Lang): "ltr" | "rtl" {
  return languages[lang].dir;
}
