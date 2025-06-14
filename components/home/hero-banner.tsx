"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, ChevronRight, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function HeroBanner() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const bannerSlides = [
    {
      id: 1,
      title: "Big Billion Days",
      subtitle: "Biggest Sale of the Year",
      description: "Up to 80% off on Electronics, Fashion & More",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cta: "Shop Now",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      title: "Fashion Fiesta",
      subtitle: "Trending Styles for Everyone",
      description: "Min 50% off on Top Brands",
      image: "https://images.pexels.com/photos/5325588/pexels-photo-5325588.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cta: "Explore",
      gradient: "from-pink-500 to-orange-500"
    },
    {
      id: 3,
      title: "Electronics Bonanza",
      subtitle: "Latest Gadgets & Appliances",
      description: "Best Prices Guaranteed",
      image: "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cta: "Buy Now",
      gradient: "from-green-500 to-blue-500"
    }
  ];

  const quickCategories = [
    { name: "Mobiles", icon: "📱", link: "/category/mobile" },
    { name: "Fashion", icon: "👕", link: "/category/fashion" },
    { name: "Electronics", icon: "💻", link: "/category/electronics" },
    { name: "Home", icon: "🏠", link: "/category/home-kitchen" },
    { name: "Beauty", icon: "💄", link: "/category/beauty" },
    { name: "Sports", icon: "⚽", link: "/category/sports" },
    { name: "Books", icon: "📚", link: "/category/books" },
    { name: "Grocery", icon: "🛒", link: "/category/grocery" }
  ];

  const topOffers = [
    {
      title: "Bank Offer",
      description: "10% off on HDFC Bank Cards",
      icon: "🏦"
    },
    {
      title: "Free Delivery",
      description: "On orders above ₹499",
      icon: "🚚"
    },
    {
      title: "No Cost EMI",
      description: "Available on select products",
      icon: "💳"
    },
    {
      title: "Exchange Offer",
      description: "Get up to ₹15,000 off",
      icon: "🔄"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/category/${searchQuery.toLowerCase()}`);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Main Banner Section */}
      <div className="relative h-[400px] overflow-hidden">
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-transform duration-500 ease-in-out",
              index === currentSlide ? "translate-x-0" : 
              index < currentSlide ? "-translate-x-full" : "translate-x-full"
            )}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-90`} />
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <Badge className="mb-4 bg-yellow-500 text-black font-bold">
                  {slide.subtitle}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl mb-6 opacity-90">
                  {slide.description}
                </p>
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8"
                  onClick={() => router.push('/deals')}
                >
                  {slide.cta}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-colors",
                index === currentSlide ? "bg-white" : "bg-white/50"
              )}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative flex">
              <Input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products, brands and more..."
                className="w-full h-12 pr-16 text-lg border-2 border-blue-200 focus-visible:border-blue-500"
              />
              <Button 
                type="submit"
                className="absolute right-0 h-12 px-6 bg-orange-500 hover:bg-orange-600 rounded-l-none"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Quick Categories */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Shop by Category</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {quickCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => router.push(category.link)}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Top Offers */}
      <div className="bg-blue-50">
        <div className="container mx-auto px-4 py-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Top Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {topOffers.map((offer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">{offer.icon}</span>
                  <h3 className="font-semibold text-gray-800">{offer.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-white border-t">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-green-600" />
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4 text-blue-600" />
              <span>7 Days Return</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-orange-600" />
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>Trusted by 10M+ customers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}