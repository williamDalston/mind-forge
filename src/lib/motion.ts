/**
 * Motion vocabulary — five intentional motion types.
 * Each replaces generic "fade-up" with a specific emotional intention.
 *
 * emerge  — primary entrance, elements rising into place
 * settle  — secondary entrance, lighter weight
 * breathe — no positional shift, opacity only (for text, subtle reveals)
 * turn    — lateral motion with blur (perspective shifts, step transitions)
 * ignite  — scale + blur entrance (completion, celebration moments)
 */

import type { Variants, Transition } from "framer-motion";

const EASE_EMERGE: Transition["ease"] = [0.22, 1, 0.36, 1];
const EASE_SETTLE: Transition["ease"] = [0.25, 0.46, 0.45, 0.94];

export const emerge: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_EMERGE },
  },
};

export const settle: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE_SETTLE },
  },
};

export const breathe: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const turn: Variants = {
  hidden: { opacity: 0, x: 10, filter: "blur(2px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.3, ease: EASE_EMERGE },
  },
  exit: {
    opacity: 0,
    x: -10,
    filter: "blur(2px)",
    transition: { duration: 0.2 },
  },
};

export const ignite: Variants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: EASE_EMERGE },
  },
};

/** Stagger children by 80ms */
export const stagger = {
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

/** Stagger with slower 120ms gap for more breathing room */
export const staggerSlow = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};
