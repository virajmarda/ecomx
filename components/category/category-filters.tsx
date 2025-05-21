"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, SlidersHorizontal, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/lib/types";

interface CategoryFiltersProps {
  products: Product[];
}

interface FilterSection {
  id: string;
  title: string;
  expanded: boolean;
}

export default function CategoryFilters({ products }: CategoryFiltersProps) {
  const [filters, setFilters] = useState({
    price: [0, 2000],
    brands: [] as string[],
    ratings: [] as number[],
    inStock: false,
    freeShipping: false,
    priceRange: "" as string, // For predefined price ranges
    discount: [] as string[], // For discount ranges
    availability: [] as string[],
  });

  const [sort, setSort] = useState("featured");
  const [activeFilters, setActiveFilters] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [sections, setSections] = useState<FilterSection[]>([
    { id: "price", title: "Price", expanded: true },
    { id: "brands", title: "Brand", expanded: true },
    { id: "ratings", title: "Customer Ratings", expanded: true },
    { id: "discount", title: "Discount", expanded: true },
    { id: "availability", title: "Availability", expanded: true },
  ]);

  // Get unique brands for filter
  const uniqueBrands = [...new Set(products.map(product => product.brand))];
  const filteredBrands = uniqueBrands.filter(brand => 
    brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Predefined price ranges
  const priceRanges = [
    { value: "under-100", label: "Under $100" },
    { value: "100-500", label: "$100 - $500" },
    { value: "500-1000", label: "$500 - $1000" },
    { value: "over-1000", label: "Over $1000" },
  ];

  // Discount ranges
  const discountRanges = [
    { value: "10+", label: "10% or more" },
    { value: "20+", label: "20% or more" },
    { value: "30+", label: "30% or more" },
    { value: "40+", label: "40% or more" },
    { value: "50+", label: "50% or more" },
  ];

  // Availability options
  const availabilityOptions = [
    { value: "in-stock", label: "In Stock" },
    { value: "free-shipping", label: "Free Shipping" },
  ];

  const toggleSection = (sectionId: string) => {
    setSections(prev => prev.map(section => 
      section.id === sectionId 
        ? { ...section, expanded: !section.expanded }
        : section
    ));
  };

  const toggleFilter = (type: string, value: string) => {
    setFilters(prev => {
      const array = prev[type as keyof typeof prev] as string[];
      return {
        ...prev,
        [type]: array.includes(value)
          ? array.filter(v => v !== value)
          : [...array, value]
      };
    });
  };

  const resetFilters = () => {
    setFilters({
      price: [0, 2000],
      brands: [],
      ratings: [],
      inStock: false,
      freeShipping: false,
      priceRange: "",
      discount: [],
      availability: [],
    });
    setSearchTerm("");
  };

  // Filter section component
  const FilterSection = ({ 
    section, 
    children 
  }: { 
    section: FilterSection, 
    children: React.ReactNode 
  }) => (
    <div className="border-b last:border-b-0">
      <div
        className="flex items-center justify-between py-3 cursor-pointer"
        onClick={() => toggleSection(section.id)}
      >
        <h3 className="font-medium text-sm">{section.title}</h3>
        {section.expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>
      {section.expanded && (
        <div className="pb-4 space-y-2">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden lg:block w-64 shrink-0 bg-background border rounded-lg overflow-hidden">
        <div className="p-4 border-b bg-muted/50">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Filters</h2>
            {activeFilters > 0 && (
              <Button variant="ghost" size="sm" onClick={resetFilters}>
                Clear All
              </Button>
            )}
          </div>
        </div>

        <div className="divide-y">
          {/* Price Ranges */}
          <FilterSection section={sections.find(s => s.id === "price")!}>
            <div className="space-y-2">
              {priceRanges.map(range => (
                <div key={range.value} className="flex items-center">
                  <Checkbox
                    id={`price-${range.value}`}
                    checked={filters.priceRange === range.value}
                    onCheckedChange={() => setFilters({...filters, priceRange: range.value})}
                  />
                  <label
                    htmlFor={`price-${range.value}`}
                    className="ml-2 text-sm"
                  >
                    {range.label}
                  </label>
                </div>
              ))}
            </div>
          </FilterSection>

          {/* Brands */}
          <FilterSection section={sections.find(s => s.id === "brands")!}>
            <div className="space-y-3">
              <Input
                placeholder="Search brands..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-8 text-sm"
              />
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {filteredBrands.map(brand => (
                  <div key={brand} className="flex items-center">
                    <Checkbox
                      id={`brand-${brand}`}
                      checked={filters.brands.includes(brand)}
                      onCheckedChange={() => toggleFilter("brands", brand)}
                    />
                    <label
                      htmlFor={`brand-${brand}`}
                      className="ml-2 text-sm"
                    >
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </FilterSection>

          {/* Customer Ratings */}
          <FilterSection section={sections.find(s => s.id === "ratings")!}>
            <div className="space-y-2">
              {[4, 3, 2, 1].map(rating => (
                <div key={rating} className="flex items-center">
                  <Checkbox
                    id={`rating-${rating}`}
                    checked={filters.ratings.includes(rating)}
                    onCheckedChange={() => toggleFilter("ratings", rating.toString())}
                  />
                  <label
                    htmlFor={`rating-${rating}`}
                    className="ml-2 text-sm flex items-center"
                  >
                    {rating}
                    <Star className="h-3 w-3 fill-yellow-500 text-yellow-500 ml-1" />
                    <span className="ml-1">& above</span>
                  </label>
                </div>
              ))}
            </div>
          </FilterSection>

          {/* Discounts */}
          <FilterSection section={sections.find(s => s.id === "discount")!}>
            <div className="space-y-2">
              {discountRanges.map(range => (
                <div key={range.value} className="flex items-center">
                  <Checkbox
                    id={`discount-${range.value}`}
                    checked={filters.discount.includes(range.value)}
                    onCheckedChange={() => toggleFilter("discount", range.value)}
                  />
                  <label
                    htmlFor={`discount-${range.value}`}
                    className="ml-2 text-sm"
                  >
                    {range.label}
                  </label>
                </div>
              ))}
            </div>
          </FilterSection>

          {/* Availability */}
          <FilterSection section={sections.find(s => s.id === "availability")!}>
            <div className="space-y-2">
              {availabilityOptions.map(option => (
                <div key={option.value} className="flex items-center">
                  <Checkbox
                    id={`availability-${option.value}`}
                    checked={filters.availability.includes(option.value)}
                    onCheckedChange={() => toggleFilter("availability", option.value)}
                  />
                  <label
                    htmlFor={`availability-${option.value}`}
                    className="ml-2 text-sm"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </FilterSection>
        </div>
      </div>

      {/* Mobile Filter Sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="lg:hidden">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filters
            {activeFilters > 0 && (
              <Badge className="ml-2 h-5 w-5 p-0 flex items-center justify-center">
                {activeFilters}
              </Badge>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full sm:w-[400px] p-0">
          <SheetHeader className="p-4 border-b bg-muted/50">
            <SheetTitle className="flex justify-between">
              Filters
              {activeFilters > 0 && (
                <Button variant="ghost" size="sm" onClick={resetFilters}>
                  Clear All
                </Button>
              )}
            </SheetTitle>
          </SheetHeader>
          <div className="divide-y overflow-y-auto h-[calc(100vh-5rem)]">
            {/* Same filter sections as desktop */}
            {/* Price Ranges */}
            <FilterSection section={sections.find(s => s.id === "price")!}>
              <div className="space-y-2">
                {priceRanges.map(range => (
                  <div key={range.value} className="flex items-center">
                    <Checkbox
                      id={`price-mobile-${range.value}`}
                      checked={filters.priceRange === range.value}
                      onCheckedChange={() => setFilters({...filters, priceRange: range.value})}
                    />
                    <label
                      htmlFor={`price-mobile-${range.value}`}
                      className="ml-2 text-sm"
                    >
                      {range.label}
                    </label>
                  </div>
                ))}
              </div>
            </FilterSection>

            {/* Brands */}
            <FilterSection section={sections.find(s => s.id === "brands")!}>
              <div className="space-y-3">
                <Input
                  placeholder="Search brands..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-8 text-sm"
                />
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {filteredBrands.map(brand => (
                    <div key={brand} className="flex items-center">
                      <Checkbox
                        id={`brand-mobile-${brand}`}
                        checked={filters.brands.includes(brand)}
                        onCheckedChange={() => toggleFilter("brands", brand)}
                      />
                      <label
                        htmlFor={`brand-mobile-${brand}`}
                        className="ml-2 text-sm"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </FilterSection>

            {/* Customer Ratings */}
            <FilterSection section={sections.find(s => s.id === "ratings")!}>
              <div className="space-y-2">
                {[4, 3, 2, 1].map(rating => (
                  <div key={rating} className="flex items-center">
                    <Checkbox
                      id={`rating-mobile-${rating}`}
                      checked={filters.ratings.includes(rating)}
                      onCheckedChange={() => toggleFilter("ratings", rating.toString())}
                    />
                    <label
                      htmlFor={`rating-mobile-${rating}`}
                      className="ml-2 text-sm flex items-center"
                    >
                      {rating}
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500 ml-1" />
                      <span className="ml-1">& above</span>
                    </label>
                  </div>
                ))}
              </div>
            </FilterSection>

            {/* Discounts */}
            <FilterSection section={sections.find(s => s.id === "discount")!}>
              <div className="space-y-2">
                {discountRanges.map(range => (
                  <div key={range.value} className="flex items-center">
                    <Checkbox
                      id={`discount-mobile-${range.value}`}
                      checked={filters.discount.includes(range.value)}
                      onCheckedChange={() => toggleFilter("discount", range.value)}
                    />
                    <label
                      htmlFor={`discount-mobile-${range.value}`}
                      className="ml-2 text-sm"
                    >
                      {range.label}
                    </label>
                  </div>
                ))}
              </div>
            </FilterSection>

            {/* Availability */}
            <FilterSection section={sections.find(s => s.id === "availability")!}>
              <div className="space-y-2">
                {availabilityOptions.map(option => (
                  <div key={option.value} className="flex items-center">
                    <Checkbox
                      id={`availability-mobile-${option.value}`}
                      checked={filters.availability.includes(option.value)}
                      onCheckedChange={() => toggleFilter("availability", option.value)}
                    />
                    <label
                      htmlFor={`availability-mobile-${option.value}`}
                      className="ml-2 text-sm"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </FilterSection>
          </div>
        </SheetContent>
      </Sheet>

      {/* Sort Controls */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-sm text-muted-foreground">Sort by:</span>
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Featured" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="rating">Best Rating</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}