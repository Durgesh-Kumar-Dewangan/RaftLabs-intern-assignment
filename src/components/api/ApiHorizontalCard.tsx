import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Lock } from "lucide-react";
import { motion } from "framer-motion";

interface ApiHorizontalCardProps {
  id: string;
  name: string;
  category: string;
  description: string;
  authType: string;
  pricing: string;
  https: boolean;
  cors: boolean;
  icon?: string;
  delay?: number;
}

export const ApiHorizontalCard = ({ 
  id, 
  name, 
  category, 
  description, 
  authType, 
  pricing,
  https,
  cors,
  icon,
  delay = 0 
}: ApiHorizontalCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      <div className="flex items-center gap-4 p-4 rounded-2xl bg-card hover:bg-muted/30 transition-all duration-300 border border-border hover:border-primary/30 shadow-card hover:shadow-hover">
        <Link to={`/api/${id}`} className="flex-shrink-0">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-card flex items-center justify-center overflow-hidden">
              {icon ? (
                <img 
                  src={icon} 
                  alt={`${name} icon`}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>';
                  }}
                />
              ) : (
                <Code2 className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              )}
            </div>
          </div>
        </Link>
        
        <div className="flex-1 min-w-0 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-1 flex-1 min-w-0">
              <Link to={`/api/${id}`}>
                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors truncate">
                  {name}
                </h3>
              </Link>
              <p className="text-xs text-muted-foreground line-clamp-1">{description}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
            <Badge variant="outline" className="text-xs gap-1">
              <Lock className="h-3 w-3" />
              {authType}
            </Badge>
            <Badge variant={pricing.toLowerCase().includes('free') ? 'default' : 'secondary'} className="text-xs">
              {pricing}
            </Badge>
          </div>
        </div>

        <Button asChild size="sm" className="hidden md:flex">
          <Link to={`/api/${id}`}>View Details</Link>
        </Button>
      </div>
    </motion.div>
  );
};
