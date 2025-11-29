import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import apisData from "@/data/apis.json";

const Categories = () => {
  const categoryGroups = apisData.reduce((acc, api) => {
    if (!acc[api.category]) {
      acc[api.category] = [];
    }
    acc[api.category].push(api);
    return acc;
  }, {} as Record<string, typeof apisData>);

  const categorySlug = (category: string) => category.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">API Categories</h1>
            <p className="text-lg text-muted-foreground">
              Browse APIs by category to find exactly what you need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(categoryGroups).map(([category, apis]) => (
              <Link
                key={category}
                to={`/category/${categorySlug(category)}`}
              >
                <Card className="p-6 hover:shadow-hover transition-all duration-300 group h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category}
                    </h3>
                    <Badge variant="secondary">{apis.length}</Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {apis[0].description.split('.')[0]}
                  </p>

                  <div className="space-y-2 mb-4">
                    {apis.slice(0, 3).map((api) => (
                      <div key={api.id} className="text-sm text-muted-foreground">
                        • {api.name}
                      </div>
                    ))}
                    {apis.length > 3 && (
                      <div className="text-sm text-primary font-medium">
                        +{apis.length - 3} more
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Explore {category}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
