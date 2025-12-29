import { Suspense } from "react";
import { mockProducts } from "@/lib/mock-data";
import CategoryPageClient from "./category-page-client";

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
  return <CategoryPageClient params={params} />;
}
