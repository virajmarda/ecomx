import { mockProducts } from "@/lib/mock-data";
import ProductCard from "@/components/product/product-card";

export default function FeaturedProductsPage() {
  const featuredProducts = mockProducts.filter(product => product.featured);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}