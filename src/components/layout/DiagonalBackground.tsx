import React from "react";
import { motion } from "framer-motion";

interface DiagonalBackgroundProps {
  className?: string;
}

export const DiagonalBackground = ({ className = "" }: DiagonalBackgroundProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Navy diagonal shape */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-0 top-0 w-[45%] h-full bg-[hsl(220,80%,20%)] origin-top-left"
        style={{
          clipPath: "polygon(0 0, 100% 0, 40% 100%, 0 100%)",
        }}
      />
      
      {/* Light gray diagonal shapes */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="absolute right-0 top-0 w-[60%] h-[70%] bg-muted/40 origin-top-right rounded-bl-[100%]"
      />
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        className="absolute right-[-10%] top-[-5%] w-[40%] h-[40%] bg-muted/60 rounded-full"
      />
    </div>
  );
};
