"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Trash2, Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/cart-context";
import { useToast } from "@/hooks/use-toast";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [isApplyingPromo, setIsApplyingPromo] = useState(false);
  const { toast } = useToast();

  const applyPromoCode = () => {
    if (!promoCode) return;
    
    setIsApplyingPromo(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Invalid promo code",
        description: "The promo code you entered is invalid or expired.",
        variant: "destructive",
      });
      setIsApplyingPromo(false);
    }, 1000);
  };

  // Calculate order summary values
  const shipping = totalPrice > 50 ? 0 : 5.99;
  const tax = totalPrice * 0.08; // 8% tax rate
  const orderTotal = totalPrice + shipping + tax;

  // Handle quantity change
  const handleQuantityChange = (id: string, delta: number, currentQty: number) => {
    const newQuantity = currentQty + delta;
    if (newQuantity >= 1 && newQuantity <= 10) {
      updateQuantity(id, newQuantity);
    }
  };

  // If cart is empty
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="p-4 bg-muted rounded-full">
              <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button asChild>
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="border rounded-lg overflow-hidden">
            <div className="grid grid-cols-12 p-4 bg-muted/50 border-b text-sm font-medium hidden md:grid">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-center">Total</div>
            </div>
            
            {items.map((item) => (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 p-4 border-b last:border-0 gap-4">
                <div className="md:col-span-6 flex">
                  <div className="relative w-20 h-20 mr-4 rounded-md overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between py-1">
                    <Link href={`/product/${item.id}`} className="font-medium hover:underline">
                      {item.name}
                    </Link>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="flex items-center text-sm text-red-500 hover:text-red-700 w-fit"
                    >
                      <Trash2 className="h-3.5 w-3.5 mr-1" />
                      Remove
                    </button>
                  </div>
                </div>
                
                <div className="md:col-span-2 flex items-center md:justify-center">
                  <span className="text-sm text-muted-foreground md:hidden mr-2">Price:</span>
                  <span>${item.price.toFixed(2)}</span>
                </div>
                
                <div className="md:col-span-2 flex items-center md:justify-center">
                  <span className="text-sm text-muted-foreground md:hidden mr-2">Quantity:</span>
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleQuantityChange(item.id, -1, item.quantity)}
                      disabled={item.quantity <= 1}
                      className="h-8 w-8 rounded-none"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleQuantityChange(item.id, 1, item.quantity)}
                      disabled={item.quantity >= 10}
                      className="h-8 w-8 rounded-none"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                
                <div className="md:col-span-2 flex items-center md:justify-center font-medium">
                  <span className="text-sm text-muted-foreground md:hidden mr-2">Total:</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between mt-4">
            <Button variant="outline" asChild>
              <Link href="/">Continue Shopping</Link>
            </Button>
            <Button variant="outline" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal ({totalItems} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-card px-2 text-xs text-muted-foreground">
                  PROMO CODE
                </span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Input
                placeholder="Enter code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <Button 
                onClick={applyPromoCode} 
                disabled={!promoCode || isApplyingPromo}
              >
                Apply
              </Button>
            </div>
            
            <Separator />
            
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${orderTotal.toFixed(2)}</span>
            </div>
            
            <Button className="w-full" size="lg" asChild>
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="flex justify-center space-x-4">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" 
                  alt="Visa" 
                  className="h-6" 
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
                  alt="Mastercard" 
                  className="h-6" 
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" 
                  alt="Stripe" 
                  className="h-6" 
                />
              </div>
              <div className="flex justify-center space-x-4">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" 
                  alt="UPI" 
                  className="h-6" 
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%282019%29.svg" 
                  alt="Paytm" 
                  className="h-6" 
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" 
                  alt="Google Pay" 
                  className="h-6" 
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/2/29/PhonePe_Logo.svg" 
                  alt="PhonePe" 
                  className="h-6" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}