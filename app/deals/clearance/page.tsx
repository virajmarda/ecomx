import Link from "next/link";
import { ArrowLeft, Tag, Clock, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/product/product-card";
import { mockProducts } from "@/lib/mock-data";

export default function ClearancePage() {
  // Filter products with highest discounts for clearance
  const clearanceProducts = mockProducts.filter(product => product.discountPrice);

  const clearanceCategories = [
    {
      name: "Electronics",
      discount: "Up to 70% off",
      count: "50+ items",
      color: "bg-blue-500"
    },
    {
      name: "Fashion",
      discount: "Up to 60% off", 
      count: "100+ items",
      color: "bg-pink-500"
    },
    {
      name: "Home & Kitchen",
      discount: "Up to 55% off",
      count: "75+ items", 
      color: "bg-green-500"
    },
    {
      name: "Beauty",
      discount: "Up to 50% off",
      count: "30+ items",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6">
        <Link href="/deals" className="flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Deals
        </Link>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-8 mb-8">
        <div className="max-w-2xl">
          <Badge className="mb-4 bg-yellow-500 text-black font-bold">
            FINAL CLEARANCE
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Clearance Sale</h1>
          <p className="text-xl mb-6 opacity-90">
            Last chance to grab your favorites! Massive discounts on selected items. 
            Once they're gone, they're gone forever!
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Limited stock available</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              <span>Prices dropping daily</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-5 w-5" />
              <span>No returns on clearance items</span>
            </div>
          </div>
        </div>
      </div>

      {/* Clearance Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Clearance by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clearanceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                <Tag className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
              <p className="text-red-600 font-bold mb-1">{category.discount}</p>
              <p className="text-sm text-muted-foreground mb-4">{category.count}</p>
              <Button asChild className="w-full">
                <Link href={`/category/${category.name.toLowerCase().replace(' & ', '-')}`}>
                  Shop Now
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <div className="flex items-start gap-3">
          <div className="bg-yellow-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-sm font-bold">!</span>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-800 mb-2">Important Clearance Terms</h3>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• All clearance sales are final - no returns or exchanges</li>
              <li>• Limited quantities available - first come, first served</li>
              <li>• Prices may change without notice</li>
              <li>• Standard warranty terms still apply</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Clearance Products */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Clearance Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clearanceProducts.map((product) => (
            <div key={product.id} className="relative">
              <Badge className="absolute top-2 left-2 z-10 bg-red-500 hover:bg-red-500">
                CLEARANCE
              </Badge>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="bg-gradient-to-r from-gray-900 to-red-900 text-white rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Don't Wait - Stock is Limited!</h3>
        <p className="mb-6 opacity-90">
          These clearance prices won't last long. Grab your favorites before someone else does!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="secondary">
            <Link href="/category/electronics">Electronics Clearance</Link>
          </Button>
          <Button size="lg" variant="secondary">
            <Link href="/category/fashion">Fashion Clearance</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}