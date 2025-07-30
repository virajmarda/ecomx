import { Suspense } from "react";
import { mockProducts } from "@/lib/mock-data";
import ProductCard from "@/components/product/product-card";
import CategoryFilters from "@/components/category/category-filters";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function FashionPage() {
  // Filter products for fashion category
  const fashionProducts = mockProducts.filter(
    product => 
      product.category.toLowerCase().includes('fashion') ||
      product.name.toLowerCase().includes('watch') ||
      product.name.toLowerCase().includes('bag') ||
      product.name.toLowerCase().includes('clothing')
  );

  const subcategories = [
    {
      name: "Men's Clothing",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/fashion/mens-clothing",
      count: "1000+ products"
    },
    {
      name: "Women's Clothing",
      image: "https://images.pexels.com/photos/5325588/pexels-photo-5325588.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/fashion/womens-clothing",
      count: "1500+ products"
    },
    {
      name: "Footwear",
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/fashion/footwear",
      count: "800+ products"
    },
    {
      name: "Accessories",
      image: "https://images.pexels.com/photos/9978722/pexels-photo-9978722.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/fashion/accessories",
      count: "600+ products"
    },
    {
      name: "Kids Fashion",
      image: "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/fashion/kids-fashion",
      count: "400+ products"
    },
    {
      name: "Ethnic Wear",
      image: "https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/fashion/ethnic-wear",
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
            <span className="text-foreground font-medium">Fashion</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Fashion</h1>
          <p className="text-muted-foreground">
            Discover the latest trends in fashion and style
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
            <CategoryFilters products={fashionProducts} />
          </Suspense>
          
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">All Fashion Products</h2>
              <p className="text-muted-foreground">
                {fashionProducts.length} products found
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {fashionProducts.map((product) => (
                <ProductCard key={product.id} product={product} className="h-full" />
              ))}
            </div>
            
            {fashionProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No fashion products found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}