import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import apisData from "@/data/apis.json";
import { DiagonalBackground } from "@/components/layout/DiagonalBackground";
import { ScrollIndicator } from "@/components/layout/ScrollIndicator";
import { ApiCircleIcon } from "@/components/api/ApiCircleIcon";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const featuredApis = apisData.slice(0, 6);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <DiagonalBackground />
        
        {/* Floating Auth Buttons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-6 right-6 flex gap-3 z-20"
        >
          <Button variant="default" size="lg" className="rounded-full px-6">
            Log-in
          </Button>
          <Button variant="secondary" size="lg" className="rounded-full px-6 bg-secondary hover:bg-secondary/90">
            Sign-up
          </Button>
        </motion.div>

        {/* Logo Icon - Always fixed top left */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed top-6 left-6 z-30"
        >
          <Link to="/" onClick={scrollToTop}>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-card shadow-hover flex items-center justify-center cursor-pointer group"
            >
              <div className="relative">
                <Code2 className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-accent transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Hero Content with Background Icon */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
          {/* Large background icon behind text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.08, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <Code2 className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] text-primary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 relative z-10"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Your Gateway to the
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary leading-tight">
              Best Public APIs
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl text-foreground max-w-3xl mx-auto relative z-10"
          >
            Browse, discover, and integrate powerful APIs for your next project. From
            payments to AI, weather to entertainment—all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative z-10"
          >
            <ScrollIndicator onClick={scrollToContent} />
          </motion.div>
        </div>
      </section>

      {/* Navigation Section - Appears after scroll */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : -20 }}
        transition={{ duration: 0.4 }}
        className={`${scrolled ? 'fixed' : 'hidden'} top-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-6 bg-card/95 backdrop-blur-sm px-8 py-4 rounded-full shadow-hover border border-border`}
      >
        <Link to="/apis" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
          Browse APIs
        </Link>
        <Link to="/categories" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
          Categories
        </Link>
      </motion.nav>

      {/* Featured APIs Section */}
      <section className="relative py-20 px-4">
        <DiagonalBackground className="opacity-30" />
        
        <div className="relative z-10 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Featured APIs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular and powerful APIs trusted by developers worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {featuredApis.map((api, index) => (
              <ApiCircleIcon
                key={api.id}
                id={api.id}
                name={api.name}
                category={api.category}
                icon={api.icon}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/apis">View All APIs</Link>
            </Button>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ScrollIndicator direction="down" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { label: "Total APIs", value: "20+" },
              { label: "Categories", value: "15+" },
              { label: "Free APIs", value: "12+" },
              { label: "Auth Methods", value: "5+" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center space-y-2"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className={`${scrolled ? 'fixed' : 'hidden'} bottom-8 right-8 z-30 p-4 rounded-full bg-primary text-primary-foreground shadow-hover hover:scale-110 transition-transform`}
      >
        <ScrollIndicator direction="up" />
      </motion.button>
    </div>
  );
};

export default Index;
