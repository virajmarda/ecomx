"use client";

import { useState } from "react";
import { mockProducts } from "@/lib/mock-data";
import ProductCard from "@/components/product/product-card";
import CategoryFilters from "@/components/category/category-filters";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowUpDown } from "lucide-react";

export default function CategoryPageClient({ params }: { params: { slug: string } }) {
  const [sort, setSort] = useState("featured");
  
  const categoryName = params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Get products for this category, handling both original and normalized category names
  const products = mockProducts.filter(
    product => 
      product.category.toLowerCase() === params.slug.replace(/-/g, ' ') ||
      product.category.toLowerCase() === params.slug
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{categoryName}</h1>
        <p className="text-muted-foreground">
          Browse our selection of {products.length} {categoryName.toLowerCase()} products
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <CategoryFilters products={products} />
        
        {/* Product Grid */}
        <div className="flex-1">
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
        </div>
      </div>
    </div>
  );
}
