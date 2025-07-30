import { Suspense } from "react";
import { mockProducts } from "@/lib/mock-data";
import ProductCard from "@/components/product/product-card";
import CategoryFilters from "@/components/category/category-filters";

export default function MobilePage() {
  // Filter products for mobile category
  const mobileProducts = mockProducts.filter(
    product => 
      product.category.toLowerCase().includes('electronics') ||
      product.name.toLowerCase().includes('phone') ||
      product.name.toLowerCase().includes('mobile')
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Mobiles & Smartphones</h1>
        <p className="text-muted-foreground">
          Browse our selection of {mobileProducts.length} mobile phones and smartphones
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <Suspense fallback={<div>Loading filters...</div>}>
          <CategoryFilters products={mobileProducts} />
        </Suspense>
        
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {mobileProducts.map((product) => (
              <ProductCard key={product.id} product={product} className="h-full" />
            ))}
          </div>
          
          {mobileProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No mobile products found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}