"use client";

import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Package } from "lucide-react";

export default function OrdersPage() {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/");
    return null;
  }

  // Mock orders data
  const orders = [
    {
      id: "ORD123456",
      date: "2025-04-29",
      status: "Delivered",
      total: 299.99,
      items: [
        {
          name: "Premium Wireless Headphones",
          quantity: 1,
          price: 299.99,
        }
      ]
    },
    // Add more mock orders as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">My Orders</h1>
      
      {orders.length > 0 ? (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="border rounded-lg p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <p className="font-medium">Order #{order.id}</p>
                  <p className="text-sm text-muted-foreground">
                    Placed on {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">${order.total.toFixed(2)}</p>
                  <p className="text-sm text-green-600">{order.status}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex gap-4">
                <Button variant="outline">Track Order</Button>
                <Button variant="outline">View Details</Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Package className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h2 className="text-xl font-semibold mb-2">No Orders Yet</h2>
          <p className="text-muted-foreground mb-6">
            You haven't placed any orders yet. Start shopping to see your orders here.
          </p>
          <Button asChild>
            <a href="/">Start Shopping</a>
          </Button>
        </div>
      )}
    </div>
  );
}