"use client";

import React from "react";
import { TargetAndTransition, Transition } from "framer-motion"; // Make sure you're importing from `framer-motion`, not `motion/react`
import { VariantLabels } from "motion";
import { motion } from "motion/react";

interface MotionDivProps {
  children: React.ReactNode;
  initial?: boolean | TargetAndTransition | VariantLabels | undefined;
  whileInView?: TargetAndTransition | VariantLabels | undefined;
  transition?: Transition;
}

const MotionDiv: React.FC<MotionDivProps> = ({
  children,
  initial,
  whileInView,
  transition,
}) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
