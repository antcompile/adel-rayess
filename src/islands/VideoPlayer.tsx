import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Play } from "lucide-react";

interface Props {
  videoId: string;
  title: string;
  thumbnail?: string;
}

export default function VideoPlayer({ videoId, title, thumbnail }: Props) {
  const [playing, setPlaying] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const thumbnailUrl =
    thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (playing) {
    return (
      <div className="relative w-full aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  const Wrapper = prefersReducedMotion ? "div" : motion.div;
  const wrapperProps = prefersReducedMotion
    ? {}
    : {
        whileHover: { scale: 1.02 },
        transition: { duration: 0.2 },
      };

  return (
    <Wrapper
      {...(wrapperProps as object)}
      className="relative w-full aspect-video group cursor-pointer overflow-hidden"
      onClick={() => setPlaying(true)}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-200 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <Play className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-text)] ml-1" fill="currentColor" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <p className="text-white text-sm font-medium">{title}</p>
      </div>
    </Wrapper>
  );
}
