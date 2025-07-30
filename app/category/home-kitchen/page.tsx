import { Suspense } from "react";
import { mockProducts } from "@/lib/mock-data";
import ProductCard from "@/components/product/product-card";
import CategoryFilters from "@/components/category/category-filters";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function HomeKitchenPage() {
  // Filter products for home & kitchen category
  const homeKitchenProducts = mockProducts.filter(
    product => 
      product.category.toLowerCase().includes('home') ||
      product.category.toLowerCase().includes('kitchen') ||
      product.name.toLowerCase().includes('chair') ||
      product.name.toLowerCase().includes('knife') ||
      product.name.toLowerCase().includes('candle')
  );

  const subcategories = [
    {
      name: "Kitchen Appliances",
      image: "https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/home-kitchen/kitchen-appliances",
      count: "500+ products"
    },
    {
      name: "Home Decor",
      image: "https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/home-kitchen/home-decor",
      count: "800+ products"
    },
    {
      name: "Furniture",
      image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/home-kitchen/furniture",
      count: "600+ products"
    },
    {
      name: "Cookware",
      image: "https://images.pexels.com/photos/6401669/pexels-photo-6401669.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/home-kitchen/cookware",
      count: "400+ products"
    },
    {
      name: "Storage & Organization",
      image: "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/home-kitchen/storage",
      count: "300+ products"
    },
    {
      name: "Garden & Outdoor",
      image: "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/home-kitchen/garden-outdoor",
      count: "250+ products"
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
            <span className="text-foreground font-medium">Home & Kitchen</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Home & Kitchen</h1>
          <p className="text-muted-foreground">
            Everything you need to make your house a home
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
            <CategoryFilters products={homeKitchenProducts} />
          </Suspense>
          
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">All Home & Kitchen Products</h2>
              <p className="text-muted-foreground">
                {homeKitchenProducts.length} products found
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {homeKitchenProducts.map((product) => (
                <ProductCard key={product.id} product={product} className="h-full" />
              ))}
            </div>
            
            {homeKitchenProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No home & kitchen products found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}