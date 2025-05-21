"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/utils";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const { toast } = useToast();
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.discountPrice || product.price,
      image: product.images[0],
      quantity: 1,
    });
    
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorited(!isFavorited);
    
    toast({
      title: isFavorited ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isFavorited ? "removed from" : "added to"} your wishlist.`,
    });
  };

  const discountPercentage = product.discountPrice
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  return (
    <div
      className={cn(
        "group h-full rounded-lg border bg-card overflow-hidden transition-all",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${product.id}`} className="flex flex-col h-full">
        <div className="relative aspect-square">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          
          {product.discountPrice && (
            <Badge className="absolute top-2 left-2 bg-destructive hover:bg-destructive">
              -{discountPercentage}%
            </Badge>
          )}
          
          {product.isNew && !product.discountPrice && (
            <Badge className="absolute top-2 left-2 bg-primary hover:bg-primary">
              New
            </Badge>
          )}
          
          <div className="absolute top-2 right-2">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm",
                isFavorited && "text-destructive"
              )}
              onClick={handleToggleFavorite}
            >
              <Heart className={cn("h-4 w-4", isFavorited && "fill-current")} />
            </Button>
          </div>
          
          <div 
            className={cn(
              "absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity",
              isHovered && "opacity-100"
            )}
          >
            <Button 
              className="w-full"
              size="sm"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col flex-grow p-4">
          <span className="text-sm text-muted-foreground">{product.category}</span>
          <h3 className="font-medium line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
          
          <div className="flex items-center my-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-3.5 w-3.5",
                    i < Math.floor(product.rating) 
                      ? "text-yellow-500 fill-yellow-500" 
                      : "text-muted-foreground"
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-1">
              ({product.reviewCount})
            </span>
          </div>
          
          <div className="mt-auto flex items-center">
            {product.discountPrice ? (
              <>
                <span className="font-semibold">${product.discountPrice.toFixed(2)}</span>
                <span className="text-xs text-muted-foreground line-through ml-2">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="font-semibold">${product.price.toFixed(2)}</span>
            )}
            
            {product.freeShipping && (
              <span className="ml-auto text-xs text-primary">Free Shipping</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}