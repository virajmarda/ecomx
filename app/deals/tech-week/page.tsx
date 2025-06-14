import Link from "next/link";
import { ArrowLeft, Zap, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/product/product-card";
import { mockProducts } from "@/lib/mock-data";

export default function TechWeekPage() {
  // Filter electronics products for tech week
  const techProducts = mockProducts.filter(product => 
    product.category.toLowerCase().includes('electronics')
  );

  const techDeals = [
    {
      title: "Smartphones",
      discount: "Up to 40% off",
      image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "/category/mobile"
    },
    {
      title: "Laptops & Computers",
      discount: "Starting ₹25,999",
      image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "/category/electronics"
    },
    {
      title: "Smart TVs",
      discount: "Flat 30% off",
      image: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "/category/electronics"
    },
    {
      title: "Audio & Headphones",
      discount: "Min 25% off",
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "/category/electronics"
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
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 mb-8">
        <div className="max-w-2xl">
          <Badge className="mb-4 bg-yellow-500 text-black font-bold">
            TECH WEEK SPECIAL
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Tech Week 2024</h1>
          <p className="text-xl mb-6 opacity-90">
            Upgrade your tech game with the latest gadgets at unbeatable prices. 
            From smartphones to smart homes, we've got it all!
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              <span>Lightning deals every hour</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>Extended warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              <span>Free installation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Deal Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techDeals.map((deal, index) => (
            <Link
              key={index}
              href={deal.link}
              className="group relative rounded-lg overflow-hidden aspect-[4/3] transition-transform hover:-translate-y-1"
            >
              <div className="relative h-full">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="font-semibold mb-1">{deal.title}</h3>
                  <p className="text-sm text-green-600 font-medium">{deal.discount}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Tech Products */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Featured Tech Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Tech Week Benefits */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-6 text-center">Why Shop Tech Week?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h4 className="font-semibold mb-2">Best Prices</h4>
            <p className="text-sm opacity-90">Guaranteed lowest prices on all tech products</p>
          </div>
          <div className="text-center">
            <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h4 className="font-semibold mb-2">Extended Warranty</h4>
            <p className="text-sm opacity-90">Free extended warranty on select products</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-6 w-6" />
            </div>
            <h4 className="font-semibold mb-2">Free Installation</h4>
            <p className="text-sm opacity-90">Professional installation at no extra cost</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-muted rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Upgrade?</h3>
        <p className="text-muted-foreground mb-6">
          Don't miss out on these incredible tech deals. Limited time offers!
        </p>
        <Button size="lg" asChild>
          <Link href="/category/electronics">Shop All Electronics</Link>
        </Button>
      </div>
    </div>
  );
}