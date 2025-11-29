import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, XCircle, Lock, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ApiCardProps {
  id: string;
  name: string;
  category: string;
  description: string;
  authType: string;
  pricing: string;
  https: boolean;
  cors: boolean;
  icon?: string;
}

export const ApiCard = ({ id, name, category, description, authType, pricing, https, cors, icon }: ApiCardProps) => {
  return (
    <Card className="p-6 hover:shadow-hover transition-all duration-300 group border-border bg-card">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center overflow-hidden">
                {icon ? (
                  <img 
                    src={icon} 
                    alt={`${name} icon`}
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>';
                    }}
                  />
                ) : (
                  <Code2 className="w-8 h-8 text-primary" />
                )}
              </div>
            </div>
          </div>
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                {name}
              </h3>
              <Badge variant="secondary" className="text-xs">
                {category}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="gap-1">
            <Lock className="h-3 w-3" />
            {authType}
          </Badge>
          <Badge variant={pricing.toLowerCase().includes('free') ? 'default' : 'secondary'}>
            {pricing}
          </Badge>
          {https && (
            <Badge variant="outline" className="gap-1">
              <CheckCircle2 className="h-3 w-3 text-success" />
              HTTPS
            </Badge>
          )}
          {cors && (
            <Badge variant="outline" className="gap-1">
              <CheckCircle2 className="h-3 w-3 text-success" />
              CORS
            </Badge>
          )}
        </div>

        <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
          <Link to={`/api/${id}`} className="flex items-center justify-center gap-2">
            View Details
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </Card>
  );
};
