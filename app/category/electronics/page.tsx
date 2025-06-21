import { Suspense } from "react";
import { mockProducts } from "@/lib/mock-data";
import ProductCard from "@/components/product/product-card";
import CategoryFilters from "@/components/category/category-filters";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ElectronicsPage() {
  // Filter products for electronics category
  const electronicsProducts = mockProducts.filter(
    product => 
      product.category.toLowerCase().includes('electronics') ||
      product.name.toLowerCase().includes('phone') ||
      product.name.toLowerCase().includes('tv') ||
      product.name.toLowerCase().includes('camera') ||
      product.name.toLowerCase().includes('headphone')
  );

  const subcategories = [
    {
      name: "Mobiles & Tablets",
      image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/electronics/mobiles",
      count: "500+ products"
    },
    {
      name: "Laptops & Computers",
      image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/electronics/laptops",
      count: "300+ products"
    },
    {
      name: "TVs & Appliances",
      image: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/electronics/tvs-appliances",
      count: "200+ products"
    },
    {
      name: "Audio & Headphones",
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/electronics/audio",
      count: "150+ products"
    },
    {
      name: "Cameras & Photography",
      image: "https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/electronics/cameras",
      count: "100+ products"
    },
    {
      name: "Gaming",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/electronics/gaming",
      count: "80+ products"
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
            <span className="text-foreground font-medium">Electronics</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Electronics</h1>
          <p className="text-muted-foreground">
            Discover the latest in technology and electronics
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
            <CategoryFilters products={electronicsProducts} />
          </Suspense>
          
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">All Electronics Products</h2>
              <p className="text-muted-foreground">
                {electronicsProducts.length} products found
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {electronicsProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {electronicsProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No electronics products found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}