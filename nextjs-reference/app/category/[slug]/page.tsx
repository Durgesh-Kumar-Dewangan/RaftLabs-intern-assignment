"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ApiCard } from "@/components/api/ApiCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import apisData from "@/data/apis.json";

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const categoryName = slug
    ?.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/-/g, ' & ') || '';

  const categoryApis = apisData.filter(api => 
    api.category.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-') === slug
  );

  if (categoryApis.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
            <Button asChild>
              <Link href="/categories">Back to Categories</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-8 gap-2">
            <Link href="/categories">
              <ArrowLeft className="h-4 w-4" />
              Back to Categories
            </Link>
          </Button>

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">{categoryName} APIs</h1>
            <p className="text-lg text-muted-foreground">
              {categoryApis.length} {categoryApis.length === 1 ? 'API' : 'APIs'} in this category
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryApis.map((api) => (
              <ApiCard key={api.id} {...api} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
