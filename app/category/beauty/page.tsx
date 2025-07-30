import { Suspense } from "react";
import { mockProducts } from "@/lib/mock-data";
import ProductCard from "@/components/product/product-card";
import CategoryFilters from "@/components/category/category-filters";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function BeautyPage() {
  // Filter products for beauty category
  const beautyProducts = mockProducts.filter(
    product => 
      product.category.toLowerCase().includes('beauty') ||
      product.name.toLowerCase().includes('skincare') ||
      product.name.toLowerCase().includes('makeup') ||
      product.name.toLowerCase().includes('cosmetic')
  );

  const subcategories = [
    {
      name: "Makeup",
      image: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/beauty/makeup",
      count: "800+ products"
    },
    {
      name: "Skincare",
      image: "https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/beauty/skincare",
      count: "600+ products"
    },
    {
      name: "Hair Care",
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/beauty/hair-care",
      count: "400+ products"
    },
    {
      name: "Personal Care",
      image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/beauty/personal-care",
      count: "500+ products"
    },
    {
      name: "Fragrances",
      image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/beauty/fragrances",
      count: "200+ products"
    },
    {
      name: "Men's Grooming",
      image: "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/beauty/mens-grooming",
      count: "300+ products"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground font-medium">Beauty & Personal Care</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Beauty & Personal Care</h1>
          <p className="text-muted-foreground">
            Discover beauty products for every need and style
          </p>
        </div>

        {/* Subcategories Grid */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {subcategories.map((subcategory, index) => (
              <Link
                key={index}
                href={subcategory.link}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-square relative">
                  <img
                    src={subcategory.image}
                    alt={subcategory.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium text-sm mb-1">{subcategory.name}</h3>
                  <p className="text-xs text-muted-foreground">{subcategory.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <Suspense fallback={<div>Loading filters...</div>}>
            <CategoryFilters products={beautyProducts} />
          </Suspense>
          
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">All Beauty Products</h2>
              <p className="text-muted-foreground">
                {beautyProducts.length} products found
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {beautyProducts.map((product) => (
                <ProductCard key={product.id} product={product} className="h-full" />
              ))}
            </div>
            
            {beautyProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No beauty products found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}