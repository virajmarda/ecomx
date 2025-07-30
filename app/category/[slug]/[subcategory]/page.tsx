import { Suspense } from "react";
import { mockProducts } from "@/lib/mock-data";
import ProductCard from "@/components/product/product-card";
import CategoryFilters from "@/components/category/category-filters";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

function SubcategoryPageClient({ params }: { params: { slug: string; subcategory: string } }) {
  const [sort, setSort] = useState("featured");
  
  const categoryName = params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const subcategoryName = params.subcategory
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Filter products for this category and subcategory
  const products = mockProducts.filter(
    product => 
      product.category.toLowerCase().includes(params.slug.replace(/-/g, ' ')) ||
      product.category.toLowerCase() === params.slug ||
      product.name.toLowerCase().includes(params.subcategory.replace(/-/g, ' '))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href={`/category/${params.slug}`} className="hover:text-foreground">
              {categoryName}
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground font-medium">{subcategoryName}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{subcategoryName}</h1>
          <p className="text-muted-foreground">
            Browse our selection of {products.length} {subcategoryName.toLowerCase()} products
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <CategoryFilters products={products} />
          
          {/* Product Grid */}
          <div className="flex-1">
            {products.length > 0 ? (
              <>
                {/* Sort Controls - Small Button Style */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm text-muted-foreground">
                    Showing {products.length} results
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground hidden sm:inline">Sort:</span>
                    <Select value={sort} onValueChange={setSort}>
                      <SelectTrigger className="w-[140px] h-9 text-sm border-gray-300">
                        <ArrowUpDown className="h-3.5 w-3.5 mr-1" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="rating">Best Rating</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} className="h-full" />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any products in this subcategory. Try browsing other categories.
                </p>
                <Button asChild>
                  <Link href={`/category/${params.slug}`}>
                    Back to {categoryName}
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all possible category and subcategory routes
export function generateStaticParams() {
  const categories = [
    {
      slug: "electronics",
      subcategories: ["mobiles", "laptops", "tvs-appliances", "audio", "cameras"]
    },
    {
      slug: "fashion", 
      subcategories: ["mens-clothing", "womens-clothing", "footwear", "accessories", "kids-fashion"]
    },
    {
      slug: "home-kitchen",
      subcategories: ["kitchen-appliances", "home-decor", "furniture", "garden-outdoor"]
    },
    {
      slug: "beauty",
      subcategories: ["makeup", "skincare", "hair-care", "personal-care"]
    },
    {
      slug: "sports",
      subcategories: ["fitness-equipment", "sports-gear", "activewear", "outdoor-sports"]
    },
    {
      slug: "books",
      subcategories: ["fiction", "non-fiction", "academic", "childrens", "comics", "books", "movies-music", "games", "stationery"]
    },
    {
      slug: "grocery",
      subcategories: ["fresh-produce", "pantry-staples", "snacks-beverages", "dairy-bakery"]
    },
    {
      slug: "automotive",
      subcategories: ["car-accessories", "bike-accessories", "tools-equipment"]
    }
  ];

  const params: { slug: string; subcategory: string }[] = [];
  categories.forEach(category => {
    category.subcategories.forEach(subcategory => {
      params.push({
        slug: category.slug,
        subcategory: subcategory
      });
    });
  });

  return params;
}

export default function SubcategoryPage({ 
  params 
}: { 
  params: { slug: string; subcategory: string } 
}) {
  return <SubcategoryPageClient params={params} />;
}