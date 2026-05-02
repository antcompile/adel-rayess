import { motion, useReducedMotion } from "motion/react";

interface Props {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  secondaryText: string;
  secondaryHref: string;
}

export default function HeroAnimation({
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryText,
  secondaryHref,
}: Props) {
  const prefersReducedMotion = useReducedMotion();

  const words = title.split(" ");

  if (prefersReducedMotion) {
    return (
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-6 text-center">
        <h1 className="font-serif font-bold tracking-[-0.03em] text-[var(--color-text)] leading-[1.05]" style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}>
          {title}
        </h1>
        <p className="mt-8 text-lg md:text-xl lg:text-2xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-5">
          <a
            href={ctaHref}
            className="px-10 py-4 bg-[var(--color-cta)] text-white font-semibold text-base tracking-wide rounded-lg hover:bg-[var(--color-cta-hover)] transition-colors duration-200 cursor-pointer"
          >
            {ctaText}
          </a>
          <a
            href={secondaryHref}
            className="px-10 py-4 border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-semibold text-base tracking-wide rounded-lg hover:bg-[var(--color-accent)] hover:text-white transition-all duration-200 cursor-pointer"
          >
            {secondaryText}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-6 text-center">
      <motion.h1
        className="font-serif font-bold tracking-[-0.03em] text-[var(--color-text)] leading-[1.05] overflow-hidden"
        style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-[0.3em]"
            variants={{
              hidden: { opacity: 0, y: 60, rotateX: -40 },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              },
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        className="mt-8 text-lg md:text-xl lg:text-2xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {subtitle}
      </motion.p>

      <motion.div
        className="mt-12 flex flex-col sm:flex-row items-center gap-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <a
          href={ctaHref}
          className="px-10 py-4 bg-[var(--color-cta)] text-white font-semibold text-base tracking-wide rounded-lg hover:bg-[var(--color-cta-hover)] hover:translate-y-[-2px] hover:shadow-lg transition-all duration-200 cursor-pointer"
        >
          {ctaText}
        </a>
        <a
          href={secondaryHref}
          className="px-10 py-4 border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-semibold text-base tracking-wide rounded-lg hover:bg-[var(--color-accent)] hover:text-white transition-all duration-200 cursor-pointer"
        >
          {secondaryText}
        </a>
      </motion.div>
    </div>
  );
}
