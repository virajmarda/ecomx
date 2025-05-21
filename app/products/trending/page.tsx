import { mockProducts } from "@/lib/mock-data";
import ProductCard from "@/components/product/product-card";

export default function TrendingProductsPage() {
  const trendingProducts = mockProducts.filter(product => product.rating >= 4.5);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Trending Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trendingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}