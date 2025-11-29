import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ApiHorizontalCard } from "@/components/api/ApiHorizontalCard";
import { ApiCircleIcon } from "@/components/api/ApiCircleIcon";
import { Search, Grid, List } from "lucide-react";
import { motion } from "framer-motion";
import apisData from "@/data/apis.json";
import { DiagonalBackground } from "@/components/layout/DiagonalBackground";
import { ScrollIndicator } from "@/components/layout/ScrollIndicator";

const Apis = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [authFilter, setAuthFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(apisData.map(api => api.category)));
    return ["all", ...cats];
  }, []);

  const authTypes = useMemo(() => {
    const types = Array.from(new Set(apisData.map(api => api.authType)));
    return ["all", ...types];
  }, []);

  const filteredAndSortedApis = useMemo(() => {
    let filtered = apisData.filter(api => {
      const matchesSearch = api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          api.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = categoryFilter === "all" || api.category === categoryFilter;
      const matchesAuth = authFilter === "all" || api.authType === authFilter;
      
      return matchesSearch && matchesCategory && matchesAuth;
    });

    filtered.sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "category") return a.category.localeCompare(b.category);
      return 0;
    });

    return filtered;
  }, [searchQuery, categoryFilter, authFilter, sortBy]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Hero Section with Search */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <DiagonalBackground />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8 pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-foreground"
          >
            Browse All APIs
          </motion.h1>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-2xl mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search APIs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg rounded-full bg-card border-2 border-border focus:border-primary"
            />
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center items-center"
          >
            <span className="text-sm font-medium text-muted-foreground">Filters:</span>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <Badge
                  key={cat}
                  variant={categoryFilter === cat ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/20 transition-colors"
                  onClick={() => setCategoryFilter(cat)}
                >
                  {cat === "all" ? "All Categories" : cat}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {authTypes.map(auth => (
                <Badge
                  key={auth}
                  variant={authFilter === auth ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/20 transition-colors"
                  onClick={() => setAuthFilter(auth)}
                >
                  {auth === "all" ? "All Auth Types" : auth}
                </Badge>
              ))}
            </div>

            <Badge
              variant={sortBy === "name" ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary/20 transition-colors"
              onClick={() => setSortBy(sortBy === "name" ? "category" : "name")}
            >
              Sort by {sortBy === "name" ? "Name" : "Category"}
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-2 justify-center"
          >
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-full"
            >
              <Grid className="w-4 h-4 mr-2" />
              Grid
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-full"
            >
              <List className="w-4 h-4 mr-2" />
              List
            </Button>
          </motion.div>

          <ScrollIndicator />
        </div>
      </section>

      {/* Results Section */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <p className="text-center text-lg text-muted-foreground">
              Found <span className="font-bold text-primary">{filteredAndSortedApis.length}</span> APIs
            </p>
          </motion.div>

          {viewMode === "grid" ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {filteredAndSortedApis.map((api, index) => (
                <ApiCircleIcon
                  key={api.id}
                  id={api.id}
                  name={api.name}
                  category={api.category}
                  icon={api.icon}
                  delay={index * 0.05}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4 max-w-4xl mx-auto">
              {filteredAndSortedApis.map((api, index) => (
                <ApiHorizontalCard
                  key={api.id}
                  {...api}
                  delay={index * 0.05}
                />
              ))}
            </div>
          )}

          {filteredAndSortedApis.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-muted-foreground">No APIs found matching your criteria</p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setCategoryFilter("all");
                  setAuthFilter("all");
                }}
                className="mt-8 rounded-full"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Scroll to top */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        onClick={scrollToTop}
        className={`${scrolled ? 'fixed' : 'hidden'} bottom-8 right-8 z-30 p-4 rounded-full bg-primary text-primary-foreground shadow-hover hover:scale-110 transition-transform`}
      >
        <ScrollIndicator direction="up" />
      </motion.button>

      <Footer />
    </div>
  );
};

export default Apis;
