"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function HeroBanner() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (searchRef.current) {
        const scrollPosition = window.scrollY;
        const threshold = window.innerHeight * 0.3;
        setIsVisible(scrollPosition < threshold);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/category/${searchQuery.toLowerCase()}`);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div 
          ref={searchRef}
          className={cn(
            "max-w-3xl mx-auto text-center transition-all duration-700 ease-in-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Discover Premium Products
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore our curated collection of premium products from top brands worldwide
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
            <div className="relative flex w-full group">
              <Input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products, brands and more..."
                className="w-full h-16 pl-6 pr-36 text-lg rounded-full border-2 border-primary/20 bg-background/80 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.05)] 
                focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/40
                transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.1)]"
              />
              <Button 
                type="submit"
                size="lg"
                className="absolute right-2 top-2 h-12 rounded-full px-8 shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </form>

          {/* Popular Searches */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
            <span>Popular:</span>
            {["Electronics", "Fashion", "Home", "Beauty"].map((term) => (
              <button
                key={term}
                onClick={() => router.push(`/category/${term.toLowerCase()}`)}
                className="hover:text-primary transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </div>
  );
}