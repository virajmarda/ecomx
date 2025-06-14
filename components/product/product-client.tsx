"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Heart, 
  Share2, 
  Star, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  Minus, 
  Plus,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/context/cart-context";
import { Product } from "@/lib/types";

interface ProductClientProps {
  product: Product;
}

export function ProductClient({ product }: ProductClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);
  const { toast } = useToast();
  const { addItem } = useCart();
  const router = useRouter();
  
  // Calculate discount percentage if discounted price exists
  const discountPercentage = product.discountPrice
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.discountPrice || product.price,
      image: product.images[0],
      quantity,
    });
    
    toast({
      title: "Added to cart!",
      description: `${quantity} × ${product.name} has been added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.discountPrice || product.price,
      image: product.images[0],
      quantity,
    });
    router.push('/cart');
  };

  const handleToggleFavorite = () => {
    setIsFavorited(!isFavorited);
    
    toast({
      title: isFavorited ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isFavorited ? "removed from" : "added to"} your wishlist.`,
    });
  };

  const handleShare = () => {
    toast({
      title: "Share link copied!",
      description: "Product link has been copied to clipboard.",
    });
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-muted/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href={`/category/${product.category.toLowerCase()}`} className="hover:text-foreground">
              {product.category}
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="truncate">{product.name}</span>
          </div>
        </div>
      </div>
    
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden border">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
              
              {product.discountPrice && (
                <Badge className="absolute top-4 left-4 bg-destructive hover:bg-destructive">
                  -{discountPercentage}% OFF
                </Badge>
              )}
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-1">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`relative rounded-md overflow-hidden border-2 min-w-[80px] aspect-square ${
                    selectedImage === index ? "border-primary" : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image src={image} alt={`Product view ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <Badge variant="outline" className="text-primary border-primary">
                  {product.brand}
                </Badge>
                {product.inStock ? (
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    In Stock
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-destructive border-destructive">
                    Out of Stock
                  </Badge>
                )}
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
              
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) 
                          ? "text-yellow-500 fill-yellow-500" 
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-baseline">
                {product.discountPrice ? (
                  <>
                    <span className="text-2xl md:text-3xl font-bold">${product.discountPrice.toFixed(2)}</span>
                    <span className="text-lg text-muted-foreground line-through ml-2">
                      ${product.price.toFixed(2)}
                    </span>
                    <Badge className="ml-3 bg-destructive hover:bg-destructive">
                      SAVE ${(product.price - product.discountPrice).toFixed(2)}
                    </Badge>
                  </>
                ) : (
                  <span className="text-2xl md:text-3xl font-bold">${product.price.toFixed(2)}</span>
                )}
              </div>
              
              {product.freeShipping && (
                <p className="text-sm text-primary font-medium flex items-center">
                  <Truck className="h-4 w-4 mr-1" />
                  Free Shipping
                </p>
              )}
            </div>
            
            <Separator />
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </div>
              
              {product.features && product.features.length > 0 && (
                <div>
                  <h3 className="font-medium mb-2">Key Features</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="font-medium mr-3">Quantity:</div>
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="h-10 w-10 rounded-none"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 10}
                    className="h-10 w-10 rounded-none"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="flex-grow" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
                <Button size="lg" className="flex-grow" onClick={handleBuyNow}>
                  Buy Now
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12"
                  onClick={handleToggleFavorite}
                >
                  <Heart className={`h-5 w-5 ${isFavorited ? "fill-destructive text-destructive" : ""}`} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12"
                  onClick={handleShare}
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="flex items-center p-3 border rounded-lg">
                <Truck className="h-5 w-5 text-muted-foreground mr-2" />
                <div>
                  <p className="font-medium">Fast Delivery</p>
                  <p className="text-muted-foreground text-xs">1-3 business days</p>
                </div>
              </div>
              <div className="flex items-center p-3 border rounded-lg">
                <ShieldCheck className="h-5 w-5 text-muted-foreground mr-2" />
                <div>
                  <p className="font-medium">Warranty</p>
                  <p className="text-muted-foreground text-xs">1 year warranty</p>
                </div>
              </div>
              <div className="flex items-center p-3 border rounded-lg">
                <RotateCcw className="h-5 w-5 text-muted-foreground mr-2" />
                <div>
                  <p className="font-medium">Easy Returns</p>
                  <p className="text-muted-foreground text-xs">30 day returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="text-muted-foreground">
            <div className="prose max-w-none dark:prose-invert">
              <p>{product.description}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>
              <h3>Features</h3>
              <ul>
                {product.features && product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="specifications">
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium bg-muted/50">Brand</td>
                    <td className="py-3 px-4">{product.brand}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium bg-muted/50">Model</td>
                    <td className="py-3 px-4">{product.name}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium bg-muted/50">Category</td>
                    <td className="py-3 px-4">{product.category}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium bg-muted/50">Warranty</td>
                    <td className="py-3 px-4">1 Year</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-muted/50">In Stock</td>
                    <td className="py-3 px-4">{product.inStock ? "Yes" : "No"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>
          <TabsContent value="reviews">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{product.rating} out of 5</h3>
                  <div className="flex items-center mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) 
                            ? "text-yellow-500 fill-yellow-500" 
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">
                      Based on {product.reviewCount} reviews
                    </span>
                  </div>
                </div>
                <Button>Write a Review</Button>
              </div>
              
              <div className="space-y-6">
                {/* Sample reviews - in a real app, these would come from an API */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium">John Doe</h4>
                      <p className="text-xs text-muted-foreground">Verified Purchase</p>
                    </div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 5 ? "text-yellow-500 fill-yellow-500" : ""}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Great product! Exactly as described and arrived quickly. Would definitely recommend.
                  </p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium">Jane Smith</h4>
                      <p className="text-xs text-muted-foreground">Verified Purchase</p>
                    </div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? "text-yellow-500 fill-yellow-500" : ""}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Very good quality, but shipping took longer than expected. Overall satisfied with my purchase.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}