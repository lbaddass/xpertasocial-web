import type { Transition, Variants } from "framer-motion";

/**
 * Motion Design System — XpertaSocial (Living Growth Architecture)
 * Centralized timing, easing, stagger, and viewport tokens.
 * Only animates GPU-composited properties (transform, opacity).
 */

export const MOTION_DURATION = {
  fast: 0.18, // 150–220 ms: micro-interactions, hover, press
  standard: 0.36, // 250–450 ms: reveals, cards, UI transitions
  narrative: 0.65, // 500–900 ms: architectural lines, hero connectors
} as const;

export const MOTION_EASE = {
  /** Architectural deceleration: crisp start, controlled settle. */
  arch: [0.22, 1, 0.36, 1] as const,
  /** Fast interactive feedback. */
  sharp: [0.16, 1, 0.3, 1] as const,
} as const;

export const MOTION_STAGGER = {
  tight: 0.045,
  normal: 0.07,
  relaxed: 0.1,
} as const;

export const MOTION_OFFSET = {
  y: 16,
  yHero: 12,
  x: 14,
} as const;

export const MOTION_VIEWPORT = {
  once: true,
  amount: 0.15,
} as const;

export const TRANSITION_FAST: Transition = {
  duration: MOTION_DURATION.fast,
  ease: MOTION_EASE.sharp,
};

export const TRANSITION_STANDARD: Transition = {
  duration: MOTION_DURATION.standard,
  ease: MOTION_EASE.arch,
};

export const TRANSITION_NARRATIVE: Transition = {
  duration: MOTION_DURATION.narrative,
  ease: MOTION_EASE.arch,
};

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: MOTION_OFFSET.y },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_STANDARD,
  },
};

export const staggerContainerVariants = (stagger: number = MOTION_STAGGER.normal): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: MOTION_OFFSET.y },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_STANDARD,
  },
};
