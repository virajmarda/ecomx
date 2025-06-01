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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Sophisticated Dark Background Design */}
      <div className="absolute inset-0">
        {/* Deep space gradient base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a2e,#000000_80%)]" />
        
        {/* Rich color overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/[0.07] via-purple-900/[0.05] to-blue-900/[0.1]" />
        
        {/* Ethereal mesh gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(78,81,102,0.1),rgba(0,0,0,0)_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,82,102,0.1),rgba(0,0,0,0)_50%)]" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Fine noise texture */}
        <div className="absolute inset-0 opacity-[0.15] [background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAD8/vz08vT09PT8+vz8/vzpPlMxAAAABXRSTlMCAgIDAwPJ4c0UAAAAPElEQVQ4y2NgYPj/n4GBkYGBgYkBDhgZGA0YGBgZ0AEjA4yDLgHRwIjfABZGdAtYGCE6WAYhOlgGIToA+f4FCS0IWdEAAAAASUVORK5CYII=')] [mask-image:radial-gradient(circle,white,transparent_80%)]" />
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Discover Premium Products
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
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
                className="w-full h-16 pl-6 pr-36 text-lg rounded-full border-2 border-gray-800 bg-gray-900/80 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.3)] 
                focus-visible:ring-2 focus-visible:ring-blue-500/30 focus-visible:border-blue-500/40
                transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]
                text-gray-200 placeholder:text-gray-400"
              />
              <Button 
                type="submit"
                size="lg"
                className="absolute right-2 top-2 h-12 rounded-full px-8 shadow-lg transition-transform duration-300 hover:scale-105 bg-blue-600 hover:bg-blue-700"
              >
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </form>

          {/* Popular Searches */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-gray-400">
            <span>Popular:</span>
            {["Electronics", "Fashion", "Home", "Beauty"].map((term) => (
              <button
                key={term}
                onClick={() => router.push(`/category/${term.toLowerCase()}`)}
                className="hover:text-blue-400 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}