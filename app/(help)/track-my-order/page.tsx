"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Package, Search, MapPin, Truck, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function TrackMyOrderPage() {
  const [trackingInput, setTrackingInput] = useState("");
  const [orderData, setOrderData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock tracking data
  const mockTrackingData = {
    orderNumber: "XC123456789",
    status: "Out for Delivery",
    estimatedDelivery: "Today by 6:00 PM",
    currentLocation: "Local Delivery Facility - Mumbai",
    trackingSteps: [
      {
        status: "Order Confirmed",
        date: "Dec 5, 2024 - 2:30 PM",
        location: "Mumbai Warehouse",
        completed: true
      },
      {
        status: "Packed",
        date: "Dec 5, 2024 - 6:45 PM", 
        location: "Mumbai Warehouse",
        completed: true
      },
      {
        status: "Shipped",
        date: "Dec 6, 2024 - 10:15 AM",
        location: "Mumbai Sorting Center",
        completed: true
      },
      {
        status: "In Transit",
        date: "Dec 7, 2024 - 8:30 AM",
        location: "Regional Hub - Mumbai",
        completed: true
      },
      {
        status: "Out for Delivery",
        date: "Dec 8, 2024 - 9:00 AM",
        location: "Local Delivery Facility",
        completed: true
      },
      {
        status: "Delivered",
        date: "Expected today",
        location: "Your Address",
        completed: false
      }
    ],
    deliveryAddress: {
      name: "John Doe",
      address: "123 Main Street, Apt 4B",
      city: "Mumbai, Maharashtra 400001"
    },
    carrier: "Express Logistics",
    trackingNumber: "EL987654321"
  };

  const handleTrackOrder = () => {
    if (!trackingInput.trim()) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setOrderData(mockTrackingData);
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
              <h1 className="text-2xl md:text-3xl font-bold">Track My Order</h1>
              <p className="text-muted-foreground">Get real-time updates on your order</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Tracking Input */}
        <Card className="max-w-md mx-auto mb-8">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Order Number or Tracking ID</label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter order number"
                    value={trackingInput}
                    onChange={(e) => setTrackingInput(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleTrackOrder} disabled={isLoading || !trackingInput.trim()}>
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Example: XC123456789 or EL987654321
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tracking Results */}
        {orderData && (
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Order Status Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Order #{orderData.orderNumber}</span>
                  <Badge className="bg-blue-100 text-blue-800">
                    {orderData.status}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Estimated Delivery
                    </h3>
                    <p className="text-lg font-medium text-green-600">{orderData.estimatedDelivery}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Current Location
                    </h3>
                    <p className="text-sm">{orderData.currentLocation}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Truck className="h-4 w-4" />
                      Carrier
                    </h3>
                    <p className="text-sm">{orderData.carrier}</p>
                    <p className="text-xs text-muted-foreground">{orderData.trackingNumber}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Live Tracking Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Live Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                    <p className="font-medium">Live Map Tracking</p>
                    <p className="text-sm text-muted-foreground">Track your package in real-time</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tracking Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Tracking History</CardTitle>
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
                          {step.completed ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <Clock className="h-4 w-4" />
                          )}
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
                        <p className="text-sm text-muted-foreground">{step.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Delivery Address */}
            <Card>
              <CardHeader>
                <CardTitle>Delivery Address</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="font-medium">{orderData.deliveryAddress.name}</p>
                  <p className="text-sm text-muted-foreground">{orderData.deliveryAddress.address}</p>
                  <p className="text-sm text-muted-foreground">{orderData.deliveryAddress.city}</p>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="grid md:grid-cols-3 gap-4">
              <Button variant="outline" className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Call Delivery Partner
              </Button>
              <Button variant="outline" className="w-full">
                Change Delivery Instructions
              </Button>
              <Button variant="outline" className="w-full">
                Report Delivery Issue
              </Button>
            </div>
          </div>
        )}

        {/* Help Section */}
        {!orderData && (
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Tracking Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Tracking updates may take 24 hours to appear</li>
                  <li>• Check your email for shipping notifications</li>
                  <li>• International orders may have longer delays</li>
                  <li>• Contact support if tracking hasn't updated in 48 hours</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need More Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/delivery-problems">Report Delivery Problem</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Contact Customer Service</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/shipping">Shipping Information</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}