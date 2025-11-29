import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Copy, CheckCircle2, Lock, Zap, FileText, Code2 } from "lucide-react";
import apisData from "@/data/apis.json";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { DiagonalBackground } from "@/components/layout/DiagonalBackground";

const ApiDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [copiedUrl, setCopiedUrl] = useState(false);
  
  const api = apisData.find(a => a.id === id);

  if (!api) {
    return (
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">API Not Found</h1>
            <Button asChild>
              <Link to="/apis">Back to Browse</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedUrl(true);
    toast({
      title: "Copied to clipboard",
      description: "Base URL copied successfully",
    });
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const relatedApis = apisData
    .filter(a => a.category === api.category && a.id !== api.id)
    .slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <DiagonalBackground className="opacity-40" />
        
        <div className="relative z-10 container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-8 gap-2">
            <Link to="/apis">
              <ArrowLeft className="h-4 w-4" />
              Back to Browse
            </Link>
          </Button>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-5xl mx-auto">
            {/* Circular Icon */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center shadow-hover">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-card flex items-center justify-center overflow-hidden">
                  {api.icon ? (
                    <img 
                      src={api.icon} 
                      alt={`${api.name} icon`}
                      className="w-14 h-14 md:w-18 md:h-18 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>';
                      }}
                    />
                  ) : (
                    <Code2 className="w-14 h-14 md:w-18 md:h-18 text-primary" />
                  )}
                </div>
              </div>
            </motion.div>

            {/* API Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{api.name}</h1>
              <Badge variant="secondary" className="mb-4 text-sm">
                {api.category}
              </Badge>
              <p className="text-lg text-muted-foreground mb-6">{api.longDescription}</p>
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Button asChild size="lg" className="rounded-full gap-2">
                  <a href={api.documentation} target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4" />
                    View Documentation
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="p-6 border-2">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Code2 className="h-6 w-6 text-primary" />
                    Base URL
                  </h2>
                  <div className="flex items-center gap-2 bg-muted p-4 rounded-xl">
                    <code className="flex-1 text-sm font-mono text-foreground break-all">{api.baseUrl}</code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(api.baseUrl)}
                      className="flex-shrink-0"
                    >
                      {copiedUrl ? (
                        <CheckCircle2 className="h-4 w-4 text-success" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-primary" />
                  Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {api.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">Use Cases</h2>
                <div className="flex flex-wrap gap-2">
                  {api.useCases.map((useCase, index) => (
                    <Badge key={index} variant="outline" className="text-sm py-2 px-4 rounded-full">
                      {useCase}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="p-6 space-y-4 sticky top-20 border-2">
                  <h3 className="font-bold text-xl text-foreground">API Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                      <span className="text-sm text-muted-foreground font-medium">Authentication</span>
                      <Badge variant="outline" className="gap-1">
                        <Lock className="h-3 w-3" />
                        {api.authType}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                      <span className="text-sm text-muted-foreground font-medium">Pricing</span>
                      <Badge variant={api.pricing.toLowerCase().includes('free') ? 'default' : 'secondary'}>
                        {api.pricing}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                      <span className="text-sm text-muted-foreground font-medium">Rate Limit</span>
                      <span className="text-sm font-semibold text-foreground">{api.rateLimit}</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                      <span className="text-sm text-muted-foreground font-medium">HTTPS</span>
                      {api.https ? (
                        <CheckCircle2 className="h-5 w-5 text-success" />
                      ) : (
                        <span className="text-sm text-destructive font-semibold">No</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                      <span className="text-sm text-muted-foreground font-medium">CORS</span>
                      {api.cors ? (
                        <CheckCircle2 className="h-5 w-5 text-success" />
                      ) : (
                        <span className="text-sm text-destructive font-semibold">No</span>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>

              {relatedApis.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Card className="p-6 border-2">
                    <h3 className="font-bold text-xl text-foreground mb-4">Related APIs</h3>
                    <div className="space-y-3">
                      {relatedApis.map((related) => (
                        <Link
                          key={related.id}
                          to={`/api/${related.id}`}
                          className="block p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-muted/30 transition-all"
                        >
                          <div className="font-semibold text-foreground mb-1">{related.name}</div>
                          <div className="text-sm text-muted-foreground line-clamp-2">
                            {related.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApiDetail;
