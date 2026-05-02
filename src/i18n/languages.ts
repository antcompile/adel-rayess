export const languages = {
  en: { label: "English", dir: "ltr" as const },
  ar: { label: "العربية", dir: "rtl" as const },
  fr: { label: "Français", dir: "ltr" as const },
};

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const locales = Object.keys(languages) as Lang[];
