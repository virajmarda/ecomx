"use client";

import Link from "next/link";
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    // If user directly accesses this page without checkout, redirect to home
    if (!document.referrer.includes("/checkout")) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Thank You for Your Order!</h1>
        <p className="text-muted-foreground mb-6">
          Your order has been successfully placed. We'll send you an email with your order details
          and tracking information once your package ships.
        </p>
        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/">Continue Shopping</Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link href="/orders">View Orders</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}