import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import type { Lang } from "../i18n/languages";

interface Props {
  lang: Lang;
}

const navItems = {
  en: [
    { label: "Home", href: "/en/" },
    { label: "About", href: "/en/about" },
    { label: "Services", href: "/en/services" },
    { label: "Gallery", href: "/en/gallery" },
    { label: "Training", href: "/en/training" },
    { label: "Media", href: "/en/media" },
    { label: "Contact", href: "/en/contact" },
  ],
  ar: [
    { label: "الرئيسية", href: "/ar/" },
    { label: "من نحن", href: "/ar/about" },
    { label: "الخدمات", href: "/ar/services" },
    { label: "المعرض", href: "/ar/gallery" },
    { label: "التدريب", href: "/ar/training" },
    { label: "الإعلام", href: "/ar/media" },
    { label: "تواصل معنا", href: "/ar/contact" },
  ],
  fr: [
    { label: "Accueil", href: "/fr/" },
    { label: "À propos", href: "/fr/about" },
    { label: "Services", href: "/fr/services" },
    { label: "Galerie", href: "/fr/gallery" },
    { label: "Formation", href: "/fr/training" },
    { label: "Médias", href: "/fr/media" },
    { label: "Contact", href: "/fr/contact" },
  ],
};

export default function MobileMenu({ lang }: Props) {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const items = navItems[lang];

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        className="w-10 h-10 flex items-center justify-center text-[var(--color-text)] cursor-pointer"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[var(--color-background)] flex flex-col"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between px-6 h-20">
              <span className="text-2xl font-serif font-bold text-[var(--color-text)]">
                Dr. Adel Rayess
              </span>
              <button
                onClick={() => setOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-[var(--color-text)] cursor-pointer"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col items-center justify-center gap-8">
              {items.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-200 cursor-pointer"
                  initial={
                    prefersReducedMotion ? {} : { opacity: 0, y: 20 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
