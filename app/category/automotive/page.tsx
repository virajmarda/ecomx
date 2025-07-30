import { Suspense } from "react";
import { mockProducts } from "@/lib/mock-data";
import ProductCard from "@/components/product/product-card";
import CategoryFilters from "@/components/category/category-filters";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function AutomotivePage() {
  // Filter products for automotive category
  const automotiveProducts = mockProducts.filter(
    product => 
      product.category.toLowerCase().includes('automotive') ||
      product.name.toLowerCase().includes('car') ||
      product.name.toLowerCase().includes('bike') ||
      product.name.toLowerCase().includes('vehicle')
  );

  const subcategories = [
    {
      name: "Car Accessories",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/automotive/car-accessories",
      count: "800+ products"
    },
    {
      name: "Bike Accessories",
      image: "https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/automotive/bike-accessories",
      count: "600+ products"
    },
    {
      name: "Tools & Equipment",
      image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/automotive/tools-equipment",
      count: "500+ products"
    },
    {
      name: "Car Care",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/automotive/car-care",
      count: "300+ products"
    },
    {
      name: "Electronics",
      image: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/automotive/electronics",
      count: "400+ products"
    },
    {
      name: "Safety & Security",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/automotive/safety-security",
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
            <span className="text-foreground font-medium">Automotive</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Automotive</h1>
          <p className="text-muted-foreground">
            Everything you need for your car and bike
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
            <CategoryFilters products={automotiveProducts} />
          </Suspense>
          
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">All Automotive Products</h2>
              <p className="text-muted-foreground">
                {automotiveProducts.length} products found
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {automotiveProducts.map((product) => (
                <ProductCard key={product.id} product={product} className="h-full" />
              ))}
            </div>
            
            {automotiveProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🚗</div>
                <h3 className="text-xl font-semibold mb-2">No automotive products found</h3>
                <p className="text-muted-foreground mb-6">
                  We're working on adding automotive products to our catalog.
                </p>
                <Link href="/categories">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                    Browse Other Categories
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}