import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  direction?: "down" | "up";
  onClick?: () => void;
}

export const ScrollIndicator = ({ direction = "down", onClick }: ScrollIndicatorProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      onClick={onClick}
      className="flex flex-col items-center gap-1 group cursor-pointer hover:scale-110 transition-transform"
    >
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {direction === "down" ? (
          <ChevronDown className="w-6 h-6 text-foreground" />
        ) : (
          <ChevronUp className="w-6 h-6 text-foreground" />
        )}
      </motion.div>
    </motion.button>
  );
};
