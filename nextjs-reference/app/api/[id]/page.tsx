"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, ExternalLink, Copy, Check, Shield, DollarSign, Zap, Lock, Globe } from "lucide-react";
import { motion } from "framer-motion";
import apisData from "@/data/apis.json";
import * as LucideIcons from "lucide-react";
import { ApiCircleIcon } from "@/components/api/ApiCircleIcon";

export default function ApiDetailPage() {
  const params = useParams();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  const api = apisData.find(a => a.id === params.id);

  if (!api) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">API Not Found</h1>
            <Button asChild>
              <Link href="/apis">Back to APIs</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = (LucideIcons as any)[api.icon] || LucideIcons.Code2;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Base URL copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedApis = apisData
    .filter(a => a.category === api.category && a.id !== api.id)
    .slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-8 gap-2">
            <Link href="/apis">
              <ArrowLeft className="h-4 w-4" />
              Back to APIs
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-start gap-8"
          >
            <div className="w-24 h-24 rounded-2xl bg-card shadow-hover flex items-center justify-center">
              <IconComponent className="w-12 h-12 text-primary" />
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">{api.name}</h1>
                <Badge variant="secondary">{api.category}</Badge>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl">
                {api.description}
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <Button asChild size="lg" className="gap-2">
                  <a href={api.docsUrl} target="_blank" rel="noopener noreferrer">
                    View Documentation
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Base URL */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-4">Base URL</h2>
                  <div className="flex items-center gap-3 bg-muted rounded-lg p-4">
                    <code className="flex-1 text-sm font-mono text-foreground">
                      {api.baseUrl}
                    </code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(api.baseUrl)}
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </Card>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {api.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>

              {/* Use Cases */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-4">Use Cases</h2>
                  <div className="flex flex-wrap gap-2">
                    {api.useCases.map((useCase, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {useCase}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Card className="p-6 sticky top-24">
                  <h2 className="text-xl font-bold mb-6">API Details</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Authentication</p>
                        <p className="font-medium">{api.authType}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Pricing</p>
                        <p className="font-medium">{api.pricing}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Rate Limit</p>
                        <p className="font-medium">{api.rateLimit}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Lock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">HTTPS</p>
                        <p className="font-medium">{api.https ? "Yes" : "No"}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">CORS</p>
                        <p className="font-medium">{api.cors}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Related APIs */}
          {relatedApis.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-16"
            >
              <h2 className="text-2xl font-bold mb-8">Related APIs</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl">
                {relatedApis.map((relatedApi, index) => (
                  <ApiCircleIcon
                    key={relatedApi.id}
                    id={relatedApi.id}
                    name={relatedApi.name}
                    category={relatedApi.category}
                    icon={relatedApi.icon}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
