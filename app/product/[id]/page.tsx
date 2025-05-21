import { ProductClient } from "@/components/product/product-client";
import { mockProducts } from "@/lib/mock-data";

export function generateStaticParams() {
  return mockProducts.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  // Find the product data
  const product = mockProducts.find(p => p.id === params.id) || mockProducts[0];
  
  return <ProductClient product={product} />;
}