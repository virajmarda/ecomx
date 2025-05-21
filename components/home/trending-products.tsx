"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product/product-card";
import { mockProducts } from "@/lib/mock-data";

export default function TrendingProducts() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Filter trending products - could use different criteria in a real app
  const trendingProducts = mockProducts
    .filter(product => product.rating >= 4.5)
    .slice(0, 10);

  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Trending Now</h2>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={scrollLeft}
            className="hidden sm:flex h-8 w-8 shrink-0"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={scrollRight}
            className="hidden sm:flex h-8 w-8 shrink-0"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Link 
            href="/products/trending" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all →
          </Link>
        </div>
      </div>
      
      <div 
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
      >
        {trendingProducts.map((product) => (
          <div 
            key={product.id} 
            className="snap-start min-w-[240px] sm:min-w-[260px]"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}