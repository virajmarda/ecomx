"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Package, Bell, Search, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export default function ProductAvailabilityPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [notifyEmail, setNotifyEmail] = useState("");
  const { toast } = useToast();

  const stockStatus = [
    {
      product: "Premium Wireless Headphones",
      sku: "PWH-001",
      status: "In Stock",
      quantity: "50+ available",
      restockDate: null,
      color: "text-green-600"
    },
    {
      product: "Ultra HD Smart TV 55-inch", 
      sku: "TV-055",
      status: "Low Stock",
      quantity: "3 remaining",
      restockDate: null,
      color: "text-orange-600"
    },
    {
      product: "Carbon Fiber Road Bike",
      sku: "CFB-001", 
      status: "Out of Stock",
      quantity: "0 available",
      restockDate: "Dec 15, 2024",
      color: "text-red-600"
    },
    {
      product: "Designer Leather Handbag",
      sku: "DLH-001",
      status: "Pre-order",
      quantity: "Coming soon",
      restockDate: "Dec 20, 2024", 
      color: "text-blue-600"
    }
  ];

  const handleNotifyMe = () => {
    if (notifyEmail) {
      toast({
        title: "Notification set!",
        description: "We'll email you when the item is back in stock.",
      });
      setNotifyEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/product-information" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Product Information
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Product Availability</h1>
              <p className="text-muted-foreground">Check stock status and get restock notifications</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stock Search */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  placeholder="Search product name or SKU..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button>
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Enter product name or SKU to check availability
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Stock Status Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Current Stock Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stockStatus.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium">{item.product}</h3>
                    <p className="text-sm text-muted-foreground">SKU: {item.sku}</p>
                  </div>
                  <div className="text-center mx-4">
                    <Badge className={`${
                      item.status === 'In Stock' ? 'bg-green-100 text-green-800' :
                      item.status === 'Low Stock' ? 'bg-orange-100 text-orange-800' :
                      item.status === 'Out of Stock' ? 'bg-red-100 text-red-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {item.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{item.quantity}</p>
                  </div>
                  <div className="text-right">
                    {item.restockDate ? (
                      <div>
                        <p className="text-sm font-medium">Expected: {item.restockDate}</p>
                        <Button size="sm" className="mt-2">
                          <Bell className="h-3 w-3 mr-1" />
                          Notify Me
                        </Button>
                      </div>
                    ) : item.status === 'Low Stock' ? (
                      <Button size="sm" variant="outline">
                        Buy Now
                      </Button>
                    ) : item.status === 'In Stock' ? (
                      <Button size="sm">
                        Add to Cart
                      </Button>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Restock Notifications */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Restock Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Get notified when out-of-stock items are available again.
                </p>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter your email"
                    value={notifyEmail}
                    onChange={(e) => setNotifyEmail(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleNotifyMe}>
                    Notify Me
                  </Button>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium mb-1">Benefits:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Instant email alerts</li>
                    <li>• Early access to restocked items</li>
                    <li>• No spam - only restock notifications</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stock Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">In Stock</p>
                    <p className="text-sm text-muted-foreground">Available for immediate shipping</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-medium">Low Stock</p>
                    <p className="text-sm text-muted-foreground">Limited quantities available</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-medium">Out of Stock</p>
                    <p className="text-sm text-muted-foreground">Currently unavailable</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Package className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Pre-order</p>
                    <p className="text-sm text-muted-foreground">Available for advance booking</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Inventory Updates */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How We Update Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  1
                </div>
                <h3 className="font-semibold mb-2">Real-time Updates</h3>
                <p className="text-sm text-muted-foreground">Stock levels update every few minutes</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  2
                </div>
                <h3 className="font-semibold mb-2">Automatic Notifications</h3>
                <p className="text-sm text-muted-foreground">Get alerts when items are restocked</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  3
                </div>
                <h3 className="font-semibold mb-2">Priority Access</h3>
                <p className="text-sm text-muted-foreground">Subscribers get first access to new stock</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card>
          <CardHeader>
            <CardTitle>Availability FAQ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">How often is stock updated?</h3>
                  <p className="text-sm text-muted-foreground">Our inventory is updated in real-time as orders are placed and fulfilled.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Can I reserve an item?</h3>
                  <p className="text-sm text-muted-foreground">Items are reserved when you add them to cart for 30 minutes.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">What if an item goes out of stock in my cart?</h3>
                  <p className="text-sm text-muted-foreground">We'll notify you immediately and offer similar alternatives.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">How accurate are restock dates?</h3>
                  <p className="text-sm text-muted-foreground">We provide estimated dates based on supplier information, but delays can occur.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Can I pre-order out-of-stock items?</h3>
                  <p className="text-sm text-muted-foreground">Yes, pre-orders are available for select items with confirmed restock dates.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Do you offer backorders?</h3>
                  <p className="text-sm text-muted-foreground">We offer backorders for popular items with guaranteed restock schedules.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}