"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Package, Truck, CheckCircle, Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function TrackOrderPage() {
  const [trackingId, setTrackingId] = useState("");
  const [orderData, setOrderData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock order data
  const mockOrderData = {
    orderId: "XC123456789",
    status: "In Transit",
    estimatedDelivery: "Tomorrow, Dec 8",
    trackingSteps: [
      {
        status: "Order Placed",
        date: "Dec 5, 2024 - 2:30 PM",
        description: "Your order has been confirmed",
        completed: true,
        icon: <CheckCircle className="h-4 w-4" />
      },
      {
        status: "Processing",
        date: "Dec 5, 2024 - 6:45 PM",
        description: "Your order is being prepared for shipment",
        completed: true,
        icon: <Package className="h-4 w-4" />
      },
      {
        status: "Shipped",
        date: "Dec 6, 2024 - 10:15 AM",
        description: "Your order has been shipped via Express Delivery",
        completed: true,
        icon: <Truck className="h-4 w-4" />
      },
      {
        status: "Out for Delivery",
        date: "Dec 7, 2024 - 8:30 AM",
        description: "Your package is out for delivery",
        completed: true,
        icon: <Truck className="h-4 w-4" />
      },
      {
        status: "Delivered",
        date: "Expected: Dec 8, 2024",
        description: "Your package will be delivered soon",
        completed: false,
        icon: <MapPin className="h-4 w-4" />
      }
    ],
    items: [
      {
        name: "Premium Wireless Headphones",
        quantity: 1,
        price: 249.99,
        image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ],
    shippingAddress: {
      name: "John Doe",
      address: "123 Main Street, Apt 4B",
      city: "Mumbai, Maharashtra 400001",
      phone: "+91 9876543210"
    },
    carrier: "Express Logistics",
    trackingNumber: "EL987654321"
  };

  const handleTrackOrder = () => {
    if (!trackingId.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setOrderData(mockOrderData);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/help" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Help Center
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Track Your Order</h1>
              <p className="text-muted-foreground">Enter your order number or tracking ID</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Tracking Input */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  placeholder="Enter order number or tracking ID"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  onClick={handleTrackOrder}
                  disabled={isLoading || !trackingId.trim()}
                >
                  {isLoading ? "Tracking..." : "Track Order"}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Example: XC123456789 or EL987654321
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Order Results */}
        {orderData && (
          <div className="space-y-6">
            {/* Order Status Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Order #{orderData.orderId}</span>
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    {orderData.status}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Estimated Delivery</h3>
                    <p className="text-lg font-medium text-green-600">{orderData.estimatedDelivery}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Tracking Number</h3>
                    <p className="font-mono text-sm">{orderData.trackingNumber}</p>
                    <p className="text-sm text-muted-foreground">Carrier: {orderData.carrier}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tracking Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Order Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData.trackingSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`p-2 rounded-full ${
                          step.completed 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          {step.icon}
                        </div>
                        {index < orderData.trackingSteps.length - 1 && (
                          <div className={`w-px h-8 mt-2 ${
                            step.completed ? 'bg-green-200' : 'bg-gray-200'
                          }`} />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className={`font-semibold ${
                            step.completed ? 'text-foreground' : 'text-muted-foreground'
                          }`}>
                            {step.status}
                          </h3>
                          <span className="text-sm text-muted-foreground">{step.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle>Order Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData.items.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                        <p className="font-semibold">${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle>Shipping Address</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="font-medium">{orderData.shippingAddress.name}</p>
                  <p className="text-sm text-muted-foreground">{orderData.shippingAddress.address}</p>
                  <p className="text-sm text-muted-foreground">{orderData.shippingAddress.city}</p>
                  <p className="text-sm text-muted-foreground">{orderData.shippingAddress.phone}</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <h3 className="font-medium">Call Support</h3>
                      <p className="text-sm text-muted-foreground">+91 123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Package className="h-5 w-5 text-green-600" />
                    <div>
                      <h3 className="font-medium">Report Issue</h3>
                      <p className="text-sm text-muted-foreground">Problem with delivery</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Help Section */}
        {!orderData && (
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Where to find your tracking number?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Check your order confirmation email</li>
                  <li>• Look in your account under "My Orders"</li>
                  <li>• SMS notification sent when order ships</li>
                  <li>• On your receipt or invoice</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tracking Issues?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Tracking info may take 24 hours to update</li>
                  <li>• Check for typos in your tracking number</li>
                  <li>• Contact support if order is delayed</li>
                  <li>• International orders may have longer delays</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
