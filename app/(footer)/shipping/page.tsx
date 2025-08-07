"use client";

import Link from "next/link";
import { ArrowLeft, Truck, Clock, MapPin, Package, Shield, Zap, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function ShippingPage() {
  const shippingMethods = [
    {
      name: "Standard Shipping",
      time: "3-5 business days",
      cost: "$5.99",
      freeThreshold: "$50+",
      description: "Reliable delivery for everyday orders",
      icon: <Truck className="h-5 w-5" />
    },
    {
      name: "Express Shipping",
      time: "1-2 business days",
      cost: "$12.99",
      freeThreshold: "$100+",
      description: "Fast delivery when you need it quickly",
      icon: <Zap className="h-5 w-5" />
    },
    {
      name: "Same Day Delivery",
      time: "Within 6 hours",
      cost: "$19.99",
      freeThreshold: "$150+",
      description: "Available in select metro areas",
      icon: <Clock className="h-5 w-5" />
    },
    {
      name: "International Shipping",
      time: "7-14 business days",
      cost: "Varies",
      freeThreshold: "$200+",
      description: "Worldwide delivery to 200+ countries",
      icon: <Globe className="h-5 w-5" />
    }
  ];

  const domesticZones = [
    { zone: "Zone 1", regions: "Mumbai, Delhi, Bangalore, Chennai", time: "1-2 days" },
    { zone: "Zone 2", regions: "Major cities and state capitals", time: "2-3 days" },
    { zone: "Zone 3", regions: "Tier 2 cities and towns", time: "3-4 days" },
    { zone: "Zone 4", regions: "Rural and remote areas", time: "4-5 days" }
  ];

  const internationalZones = [
    { zone: "Zone A", regions: "USA, Canada, UK, Australia", time: "7-10 days", cost: "$15-25" },
    { zone: "Zone B", regions: "Europe, Japan, Singapore", time: "8-12 days", cost: "$18-30" },
    { zone: "Zone C", regions: "Middle East, South America", time: "10-14 days", cost: "$20-35" },
    { zone: "Zone D", regions: "Africa, Other regions", time: "12-16 days", cost: "$25-40" }
  ];

  const packagingFeatures = [
    {
      title: "Eco-Friendly Packaging",
      description: "100% recyclable materials",
      icon: <Package className="h-5 w-5 text-green-600" />
    },
    {
      title: "Secure Protection",
      description: "Bubble wrap and protective padding",
      icon: <Shield className="h-5 w-5 text-blue-600" />
    },
    {
      title: "Fragile Item Care",
      description: "Special handling for delicate products",
      icon: <Package className="h-5 w-5 text-orange-600" />
    }
  ];

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
              <Truck className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Shipping & Delivery</h1>
              <p className="text-muted-foreground">Fast, reliable delivery to your doorstep</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Shipping Methods Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {shippingMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{method.name}</h3>
                    <Badge variant="outline" className="text-xs">{method.time}</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Cost:</span>
                    <span className="font-medium">{method.cost}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Free on:</span>
                    <span className="font-medium text-green-600">{method.freeThreshold}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{method.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="domestic" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="domestic">Domestic Shipping</TabsTrigger>
            <TabsTrigger value="international">International</TabsTrigger>
            <TabsTrigger value="tracking">Order Tracking</TabsTrigger>
            <TabsTrigger value="packaging">Packaging</TabsTrigger>
          </TabsList>

          <TabsContent value="domestic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Domestic Delivery Zones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {domesticZones.map((zone, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{zone.zone}</h3>
                        <p className="text-sm text-muted-foreground">{zone.regions}</p>
                      </div>
                      <Badge variant="outline">{zone.time}</Badge>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Free Shipping Benefits</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Free standard shipping on orders over ₹499</li>
                      <li>• Free express shipping on orders over ₹999</li>
                      <li>• No minimum order for premium members</li>
                      <li>• Free shipping on all electronics over ₹1999</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Delivery Features</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Real-time tracking updates</li>
                      <li>• SMS and email notifications</li>
                      <li>• Flexible delivery time slots</li>
                      <li>• Safe contactless delivery</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="international" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  International Shipping Zones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {internationalZones.map((zone, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{zone.zone}</h3>
                        <p className="text-sm text-muted-foreground">{zone.regions}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-1">{zone.time}</Badge>
                        <p className="text-sm font-medium">{zone.cost}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Important International Shipping Notes</h3>
                  <ul className="text-sm space-y-1 text-yellow-800">
                    <li>• Customs duties and taxes are the responsibility of the recipient</li>
                    <li>• Some items may be restricted in certain countries</li>
                    <li>• Delivery times may vary due to customs processing</li>
                    <li>• Signature required for all international deliveries</li>
                  </ul>
                </div>

                <Separator className="my-6" />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Restricted Items</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Batteries and electronic items (some countries)</li>
                      <li>• Liquids and cosmetics</li>
                      <li>• Food and perishable items</li>
                      <li>• Weapons and sharp objects</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Documentation Required</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Commercial invoice</li>
                      <li>• Customs declaration form</li>
                      <li>• Product certificates (if applicable)</li>
                      <li>• Recipient identification</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tracking" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Tracking & Updates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Tracking Your Order</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-semibold text-blue-600">1</span>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Order Confirmed</p>
                          <p className="text-xs text-muted-foreground">Your order has been received</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-semibold text-orange-600">2</span>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Processing</p>
                          <p className="text-xs text-muted-foreground">Your order is being prepared</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-semibold text-purple-600">3</span>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Shipped</p>
                          <p className="text-xs text-muted-foreground">Your order is on the way</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-semibold text-green-600">4</span>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Delivered</p>
                          <p className="text-xs text-muted-foreground">Your order has arrived</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Notification Preferences</h3>
                    <div className="space-y-3">
                      <div className="p-3 border rounded">
                        <h4 className="font-medium text-sm mb-1">SMS Updates</h4>
                        <p className="text-xs text-muted-foreground">Get real-time SMS notifications</p>
                      </div>
                      <div className="p-3 border rounded">
                        <h4 className="font-medium text-sm mb-1">Email Updates</h4>
                        <p className="text-xs text-muted-foreground">Detailed email notifications</p>
                      </div>
                      <div className="p-3 border rounded">
                        <h4 className="font-medium text-sm mb-1">Push Notifications</h4>
                        <p className="text-xs text-muted-foreground">Mobile app notifications</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Track Your Order</h3>
                  <p className="text-sm text-blue-800 mb-3">Enter your order number or tracking ID to get real-time updates</p>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Enter order number or tracking ID" 
                      className="flex-1 px-3 py-2 border rounded text-sm"
                    />
                    <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700">
                      Track Order
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="packaging" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Packaging & Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {packagingFeatures.map((feature, index) => (
                    <div key={index} className="text-center p-4 border rounded-lg">
                      <div className="flex justify-center mb-3">
                        {feature.icon}
                      </div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Standard Packaging</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Recyclable cardboard boxes</li>
                      <li>• Biodegradable packing peanuts</li>
                      <li>• Minimal plastic usage</li>
                      <li>• Appropriate box sizing</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Special Item Packaging</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Electronics: Anti-static protection</li>
                      <li>• Fragile items: Extra bubble wrap</li>
                      <li>• Liquids: Leak-proof containers</li>
                      <li>• Clothing: Moisture protection</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Package className="h-4 w-4 text-green-600" />
                    Sustainability Commitment
                  </h3>
                  <p className="text-sm text-green-800">
                    We're committed to reducing our environmental impact through sustainable packaging practices. 
                    All our packaging materials are recyclable, and we continuously work to minimize waste.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* FAQ Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Can I change my delivery address?</h3>
                  <p className="text-sm text-muted-foreground">Yes, you can change your delivery address before the order is shipped. Contact customer service immediately.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">What if I'm not home during delivery?</h3>
                  <p className="text-sm text-muted-foreground">Our delivery partner will attempt redelivery or leave the package at a safe location if authorized.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Do you deliver on weekends?</h3>
                  <p className="text-sm text-muted-foreground">Yes, we offer weekend delivery in most areas for an additional fee.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">How do I schedule a delivery time?</h3>
                  <p className="text-sm text-muted-foreground">You can select preferred delivery time slots during checkout or contact customer service.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">What about damaged packages?</h3>
                  <p className="text-sm text-muted-foreground">If your package arrives damaged, please contact us immediately with photos for a quick resolution.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Can I track multiple orders?</h3>
                  <p className="text-sm text-muted-foreground">Yes, you can track all your orders from your account dashboard or using individual tracking numbers.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}