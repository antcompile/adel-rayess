import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

interface StatItem {
  value: string;
  label: string;
}

interface Props {
  stats: StatItem[];
}

function AnimatedNumber({ value, inView }: { value: string; inView: boolean }) {
  const [display, setDisplay] = useState("0");
  const numericPart = value.replace(/[^0-9.]/g, "");
  const prefix = value.match(/^[^0-9]*/)?.[0] || "";
  const suffix = value.match(/[^0-9.]*$/)?.[0] || "";

  useEffect(() => {
    if (!inView) return;
    const target = parseFloat(numericPart);
    if (isNaN(target)) {
      setDisplay(value);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, target);
      const formatted =
        target >= 1000
          ? Math.floor(current).toLocaleString()
          : current % 1 === 0
            ? Math.floor(current).toString()
            : current.toFixed(1);
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (step >= steps) {
        setDisplay(value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value, numericPart, prefix, suffix]);

  return <span>{display}</span>;
}

export default function CountUpStats({ stats }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const colClass =
    stats.length === 3
      ? "grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-20"
      : "grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16";

  return (
    <div ref={ref} className={colClass}>
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          className="text-center"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={
            inView ? { opacity: 1, y: 0 } : prefersReducedMotion ? {} : {}
          }
          transition={{ delay: i * 0.15, duration: 0.6 }}
        >
          <div className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[var(--color-accent)] tracking-[-0.02em] leading-none">
            {prefersReducedMotion ? (
              stat.value
            ) : (
              <AnimatedNumber value={stat.value} inView={inView} />
            )}
          </div>
          <p className="mt-3 text-xs lg:text-sm text-[var(--color-text-secondary)] uppercase tracking-[0.12em] font-medium max-w-[200px] mx-auto">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
