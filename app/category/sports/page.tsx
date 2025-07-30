import { Suspense } from "react";
import { mockProducts } from "@/lib/mock-data";
import ProductCard from "@/components/product/product-card";
import CategoryFilters from "@/components/category/category-filters";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function SportsPage() {
  // Filter products for sports category
  const sportsProducts = mockProducts.filter(
    product => 
      product.category.toLowerCase().includes('sports') ||
      product.name.toLowerCase().includes('bike') ||
      product.name.toLowerCase().includes('fitness') ||
      product.name.toLowerCase().includes('exercise')
  );

  const subcategories = [
    {
      name: "Fitness Equipment",
      image: "https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/sports/fitness-equipment",
      count: "400+ products"
    },
    {
      name: "Sports Gear",
      image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/sports/sports-gear",
      count: "600+ products"
    },
    {
      name: "Activewear",
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/sports/activewear",
      count: "800+ products"
    },
    {
      name: "Outdoor Sports",
      image: "https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/sports/outdoor-sports",
      count: "300+ products"
    },
    {
      name: "Team Sports",
      image: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/sports/team-sports",
      count: "250+ products"
    },
    {
      name: "Water Sports",
      image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/category/sports/water-sports",
      count: "150+ products"
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
            <span className="text-foreground font-medium">Sports & Fitness</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Sports & Fitness</h1>
          <p className="text-muted-foreground">
            Gear up for your active lifestyle with our sports and fitness collection
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
            <CategoryFilters products={sportsProducts} />
          </Suspense>
          
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">All Sports & Fitness Products</h2>
              <p className="text-muted-foreground">
                {sportsProducts.length} products found
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {sportsProducts.map((product) => (
                <ProductCard key={product.id} product={product} className="h-full" />
              ))}
            </div>
            
            {sportsProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No sports products found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}