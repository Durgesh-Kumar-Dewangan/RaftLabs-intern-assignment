import React from "react";
import { Link } from "react-router-dom";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";

interface ApiCircleIconProps {
  id: string;
  name: string;
  category: string;
  icon?: string;
  delay?: number;
}

export const ApiCircleIcon = ({ id, name, category, icon, delay = 0 }: ApiCircleIconProps) => {
  return (
    <Link to={`/api/${id}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col items-center gap-3 group cursor-pointer"
      >
        <div className="relative">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center shadow-card group-hover:shadow-hover transition-all duration-300">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-card flex items-center justify-center overflow-hidden">
              {icon ? (
                <img 
                  src={icon} 
                  alt={`${name} icon`}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>';
                  }}
                />
              ) : (
                <Code2 className="w-12 h-12 md:w-14 md:h-14 text-primary" />
              )}
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="text-center max-w-[140px]">
          <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors truncate">
            {name}
          </h3>
          <p className="text-xs text-muted-foreground truncate">{category}</p>
        </div>
      </motion.div>
    </Link>
  );
};
