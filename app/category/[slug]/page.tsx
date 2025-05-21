import { Suspense } from "react";
import { mockProducts } from "@/lib/mock-data";
import ProductCard from "@/components/product/product-card";
import CategoryFilters from "@/components/category/category-filters";
import { Button } from "@/components/ui/button";

// Get unique categories from mock products and ensure all required categories are included
const categories = [
  ...new Set([
    ...mockProducts.map(product => 
      product.category.toLowerCase().replace(/\s+/g, '-')
    ),
    'mobile' // Explicitly include 'mobile' category
  ])
];

// Generate static params for all possible category routes
export function generateStaticParams() {
  return categories.map((slug) => ({
    slug,
  }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
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
        <Suspense fallback={<div>Loading filters...</div>}>
          <CategoryFilters products={products} />
        </Suspense>
        
        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}