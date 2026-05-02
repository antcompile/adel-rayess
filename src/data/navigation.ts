import type { Lang } from "../i18n/languages";

export interface NavItem {
  label: Record<Lang, string>;
  href: string;
}

export const navigation: NavItem[] = [
  { label: { en: "Home", ar: "الرئيسية", fr: "Accueil" }, href: "/" },
  { label: { en: "About", ar: "من نحن", fr: "À propos" }, href: "/about" },
  {
    label: { en: "Services", ar: "الخدمات", fr: "Services" },
    href: "/services",
  },
  {
    label: { en: "Gallery", ar: "المعرض", fr: "Galerie" },
    href: "/gallery",
  },
  {
    label: { en: "Training", ar: "التدريب", fr: "Formation" },
    href: "/training",
  },
  { label: { en: "Media", ar: "الإعلام", fr: "Médias" }, href: "/media" },
  {
    label: { en: "Contact", ar: "تواصل معنا", fr: "Contact" },
    href: "/contact",
  },
];
