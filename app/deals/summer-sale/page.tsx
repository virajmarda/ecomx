import Link from "next/link";
import { ArrowLeft, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/product/product-card";
import { mockProducts } from "@/lib/mock-data";

export default function SummerSalePage() {
  // Filter products with discounts for summer sale
  const saleProducts = mockProducts.filter(product => product.discountPrice);

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
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg p-8 mb-8">
        <div className="max-w-2xl">
          <Badge className="mb-4 bg-yellow-500 text-black font-bold">
            LIMITED TIME OFFER
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Summer Sale 2024</h1>
          <p className="text-xl mb-6 opacity-90">
            Beat the heat with hot deals! Up to 70% off on summer essentials, fashion, and electronics.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">Sale ends in: 5 days</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span>Free shipping on all orders</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sale Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2 text-blue-800">Electronics</h3>
          <p className="text-blue-600 mb-4">Up to 60% off on gadgets</p>
          <Button asChild>
            <Link href="/category/electronics">Shop Electronics</Link>
          </Button>
        </div>
        <div className="bg-pink-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2 text-pink-800">Fashion</h3>
          <p className="text-pink-600 mb-4">Summer collection 50% off</p>
          <Button asChild>
            <Link href="/category/fashion">Shop Fashion</Link>
          </Button>
        </div>
        <div className="bg-green-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2 text-green-800">Home & Garden</h3>
          <p className="text-green-600 mb-4">Refresh your space</p>
          <Button asChild>
            <Link href="/category/home-kitchen">Shop Home</Link>
          </Button>
        </div>
      </div>

      {/* Featured Sale Products */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Featured Sale Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {saleProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-muted rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Don't Miss Out!</h3>
        <p className="text-muted-foreground mb-6">
          Summer sale ends soon. Grab your favorites before they're gone!
        </p>
        <Button size="lg" asChild>
          <Link href="/products/featured">View All Products</Link>
        </Button>
      </div>
    </div>
  );
}