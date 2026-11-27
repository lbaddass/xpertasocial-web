"use client";

import type { ReactNode } from "react";
import {
  motion,
  MotionConfig,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  MOTION_DURATION,
  MOTION_EASE,
  MOTION_OFFSET,
  MOTION_STAGGER,
  MOTION_VIEWPORT,
  revealVariants,
  staggerContainerVariants,
  staggerItemVariants,
  TRANSITION_NARRATIVE,
  TRANSITION_STANDARD,
} from "@/lib/motion";

/**
 * Wraps the commercial tree so all Framer Motion primitives respect
 * OS-level `prefers-reduced-motion: reduce`.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/**
 * Thin 2px architectural scroll-progress bar at the top of the viewport.
 * Uses GPU-composited `scaleX` with zero layout shift.
 */
export function ScrollProgress() {
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  if (prefersReduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-neonBlue via-neonBlue to-neonLime/80"
      style={{ scaleX }}
    />
  );
}

/**
 * Viewport-triggered entrance for section headings, blocks, and conversion modules.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={MOTION_VIEWPORT}
      variants={{
        hidden: revealVariants.hidden,
        visible: {
          opacity: 1,
          y: 0,
          transition: { ...TRANSITION_STANDARD, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Coordinates progressive staggered entrances for lists, grids, and system stages.
 */
export function StaggerContainer({
  children,
  className = "",
  stagger = MOTION_STAGGER.normal,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: "div" | "ul" | "ol";
}) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const Component = as === "ul" ? motion.ul : as === "ol" ? motion.ol : motion.div;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={MOTION_VIEWPORT}
      variants={staggerContainerVariants(stagger)}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  children,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const Component = as === "li" ? motion.li : motion.div;

  return (
    <Component className={className} variants={staggerItemVariants}>
      {children}
    </Component>
  );
}

/**
 * Architectural connection line that draws horizontally or vertically as a section enters view.
 */
export function DrawLine({
  className = "",
  orientation = "horizontal",
  delay = 0.1,
}: {
  className?: string;
  orientation?: "horizontal" | "vertical";
  delay?: number;
}) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <div
        aria-hidden="true"
        className={`${orientation === "horizontal" ? "h-px w-full" : "h-full w-px"} ${className}`}
      />
    );
  }

  const isHorizontal = orientation === "horizontal";

  return (
    <motion.div
      aria-hidden="true"
      className={`${isHorizontal ? "h-px w-full origin-left" : "h-full w-px origin-top"} ${className}`}
      initial={isHorizontal ? { scaleX: 0, opacity: 0.4 } : { scaleY: 0, opacity: 0.4 }}
      whileInView={isHorizontal ? { scaleX: 1, opacity: 1 } : { scaleY: 1, opacity: 1 }}
      viewport={MOTION_VIEWPORT}
      transition={{ ...TRANSITION_NARRATIVE, delay }}
    />
  );
}

/**
 * Hero entrance container — runs immediately on mount (not viewport-gated)
 * and keeps the headline immediately readable while sequencing supporting layers.
 */
export function HeroSequence({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={staggerContainerVariants(MOTION_STAGGER.tight)}
    >
      {children}
    </motion.div>
  );
}

export function HeroItem({
  children,
  className = "",
  immediateOpacity = false,
}: {
  children: ReactNode;
  className?: string;
  /** Keep headline readable from frame 0 while subtly settling position. */
  immediateOpacity?: boolean;
}) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: immediateOpacity ? 0.92 : 0, y: MOTION_OFFSET.yHero },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: MOTION_DURATION.standard,
            ease: MOTION_EASE.arch,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Thin architectural connector line inside the Hero linking headline to supporting copy.
 */
export function HeroLine({ className = "" }: { className?: string }) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div aria-hidden="true" className={`h-px w-16 bg-neonBlue/60 ${className}`} />;
  }

  return (
    <motion.div
      aria-hidden="true"
      className={`h-px w-16 origin-left bg-gradient-to-r from-neonBlue to-neonBlue/10 ${className}`}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: MOTION_DURATION.narrative, ease: MOTION_EASE.arch, delay: 0.12 }}
    />
  );
}
