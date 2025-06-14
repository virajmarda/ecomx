"use client";

import { useState } from "react";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { Heart, ShoppingCart, Trash2, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/context/cart-context";
import { mockProducts } from "@/lib/mock-data";
import Link from "next/link";
import Image from "next/image";

export default function WishlistPage() {
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const { addItem } = useCart();
  
  // Mock wishlist items - in a real app, this would come from an API
  const [wishlistItems, setWishlistItems] = useState(
    mockProducts.filter(product => product.featured).slice(0, 6)
  );

  if (!user) {
    router.push("/");
    return null;
  }

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId));
    toast({
      title: "Removed from wishlist",
      description: "Item has been removed from your wishlist.",
    });
  };

  const handleAddToCart = (product: any) => {
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

  const handleShare = (product: any) => {
    toast({
      title: "Share link copied!",
      description: "Product link has been copied to clipboard.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">My Wishlist</h1>
          <p className="text-muted-foreground">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
          </p>
        </div>

        {wishlistItems.length > 0 ? (
          <>
            {/* Wishlist Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
              {wishlistItems.map((product) => (
                <div key={product.id} className="group relative bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/product/${product.id}`}>
                    <div className="relative aspect-square">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      {product.discountPrice && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                          -{Math.round(((product.price - product.discountPrice) / product.price) * 100)}%
                        </div>
                      )}
                    </div>
                  </Link>
                  
                  <div className="p-4">
                    <Link href={`/product/${product.id}`}>
                      <h3 className="font-medium line-clamp-2 mb-2 hover:text-primary">
                        {product.name}
                      </h3>
                    </Link>
                    
                    <div className="flex items-center mb-3">
                      {product.discountPrice ? (
                        <>
                          <span className="font-semibold text-lg">${product.discountPrice.toFixed(2)}</span>
                          <span className="text-sm text-muted-foreground line-through ml-2">
                            ${product.price.toFixed(2)}
                          </span>
                        </>
                      ) : (
                        <span className="font-semibold text-lg">${product.price.toFixed(2)}</span>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add to Cart
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleShare(product)}
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRemoveFromWishlist(product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => {
                  wishlistItems.forEach(product => handleAddToCart(product));
                  setWishlistItems([]);
                }}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add All to Cart
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  setWishlistItems([]);
                  toast({
                    title: "Wishlist cleared",
                    description: "All items have been removed from your wishlist.",
                  });
                }}
              >
                <Trash2 className="mr-2 h-5 w-5" />
                Clear Wishlist
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="mb-6">
              <Heart className="mx-auto h-16 w-16 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Save items you love by clicking the heart icon on any product. 
              We'll keep them safe here for you!
            </p>
            <Button asChild size="lg">
              <Link href="/">Start Shopping</Link>
            </Button>
          </div>
        )}

        {/* Recommendations */}
        {wishlistItems.length > 0 && (
          <div className="mt-16 pt-8 border-t">
            <h2 className="text-xl font-semibold mb-6">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {mockProducts.filter(p => !wishlistItems.find(w => w.id === p.id)).slice(0, 4).map((product) => (
                <Link key={product.id} href={`/product/${product.id}`} className="group">
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium line-clamp-2 mb-1">{product.name}</h3>
                  <p className="font-semibold">${(product.discountPrice || product.price).toFixed(2)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}