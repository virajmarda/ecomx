"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Package, RotateCcw, Clock, CheckCircle, AlertCircle, FileText, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function ReturnsPage() {
  const [selectedReason, setSelectedReason] = useState("");

  const returnReasons = [
    "Defective or damaged item",
    "Wrong item received",
    "Item doesn't match description",
    "Changed my mind",
    "Size/fit issues",
    "Quality not as expected"
  ];

  const returnSteps = [
    {
      step: 1,
      title: "Initiate Return",
      description: "Log into your account and select the item you want to return",
      icon: <Package className="h-5 w-5" />
    },
    {
      step: 2,
      title: "Print Label",
      description: "Download and print the prepaid return shipping label",
      icon: <FileText className="h-5 w-5" />
    },
    {
      step: 3,
      title: "Pack & Ship",
      description: "Pack the item securely and drop it off at any authorized location",
      icon: <Package className="h-5 w-5" />
    },
    {
      step: 4,
      title: "Get Refund",
      description: "Receive your refund within 5-7 business days after we receive the item",
      icon: <CheckCircle className="h-5 w-5" />
    }
  ];

  const nonReturnableItems = [
    "Personal care and hygiene products",
    "Undergarments and swimwear",
    "Customized or personalized items",
    "Digital downloads and software",
    "Gift cards and vouchers",
    "Perishable goods and food items",
    "Items damaged by misuse"
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
              <RotateCcw className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Returns & Refunds</h1>
              <p className="text-muted-foreground">Easy returns within 30 days of purchase</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="p-3 bg-green-100 rounded-full w-fit mx-auto mb-4">
                <Package className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Start a Return</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Return an item from a recent order
              </p>
              <Button className="w-full">Return an Item</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Track Return Status</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Check the status of your return
              </p>
              <Button variant="outline" className="w-full">Track Return</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="p-3 bg-orange-100 rounded-full w-fit mx-auto mb-4">
                <Phone className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Contact our support team
              </p>
              <Button variant="outline" className="w-full">Get Support</Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="policy" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="policy">Return Policy</TabsTrigger>
            <TabsTrigger value="process">Return Process</TabsTrigger>
            <TabsTrigger value="refunds">Refunds</TabsTrigger>
            <TabsTrigger value="exchanges">Exchanges</TabsTrigger>
          </TabsList>

          <TabsContent value="policy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  30-Day Return Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-green-600">✓ Returnable Items</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Items in original condition and packaging</li>
                      <li>• Unused products with all tags attached</li>
                      <li>• Electronics in working condition</li>
                      <li>• Books and media in sellable condition</li>
                      <li>• Clothing and accessories (unworn)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-red-600">✗ Non-Returnable Items</h3>
                    <ul className="space-y-2 text-sm">
                      {nonReturnableItems.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Separator />

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-blue-600" />
                    Important Notes
                  </h3>
                  <ul className="text-sm space-y-1 text-blue-800">
                    <li>• Returns must be initiated within 30 days of delivery</li>
                    <li>• Original receipt or order number required</li>
                    <li>• Items must be in resellable condition</li>
                    <li>• Return shipping is free for defective items</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="process" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How to Return an Item</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {returnSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">Return Shipping Options</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-green-200 bg-green-50 p-3 rounded">
                      <h4 className="font-medium text-green-800">Free Return Shipping</h4>
                      <p className="text-sm text-green-700">For defective, damaged, or wrong items</p>
                    </div>
                    <div className="border border-orange-200 bg-orange-50 p-3 rounded">
                      <h4 className="font-medium text-orange-800">Customer Pays Shipping</h4>
                      <p className="text-sm text-orange-700">For change of mind returns ($5.99)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="refunds" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Refund Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Refund Timeline</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="text-sm">Processing Time</span>
                        <Badge variant="outline">1-2 business days</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="text-sm">Credit Card Refund</span>
                        <Badge variant="outline">3-5 business days</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="text-sm">Bank Transfer</span>
                        <Badge variant="outline">5-7 business days</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="text-sm">Digital Wallet</span>
                        <Badge variant="outline">1-3 business days</Badge>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Refund Methods</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Refunds are processed to the original payment method</li>
                      <li>• Gift card purchases refunded as store credit</li>
                      <li>• Partial refunds for damaged packaging</li>
                      <li>• Shipping costs refunded for our errors</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-600" />
                    Refund Policy Notes
                  </h3>
                  <ul className="text-sm space-y-1 text-yellow-800">
                    <li>• Original shipping charges are non-refundable (except for our errors)</li>
                    <li>• Refund amount may be reduced for items not in original condition</li>
                    <li>• Gift wrapping charges are non-refundable</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="exchanges" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Exchanges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Size & Color Exchanges</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Free exchanges for different sizes</li>
                      <li>• Color exchanges subject to availability</li>
                      <li>• Same product line exchanges only</li>
                      <li>• Price difference may apply</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Defective Item Exchanges</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Immediate replacement for defective items</li>
                      <li>• Free shipping both ways</li>
                      <li>• Expedited processing available</li>
                      <li>• Full warranty on replacement items</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Exchange Process</h3>
                  <ol className="text-sm space-y-1 text-blue-800">
                    <li>1. Contact customer service to initiate exchange</li>
                    <li>2. Receive exchange authorization and shipping label</li>
                    <li>3. Send original item back to us</li>
                    <li>4. New item ships once we receive the return</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Contact Support */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Need Additional Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <Phone className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                <h3 className="font-medium mb-1">Call Us</h3>
                <p className="text-sm text-muted-foreground mb-2">Mon-Fri 9AM-6PM</p>
                <p className="text-sm font-medium">+91 123 456 7890</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Mail className="h-6 w-6 mx-auto mb-2 text-green-600" />
                <h3 className="font-medium mb-1">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-2">24/7 Response</p>
                <p className="text-sm font-medium">returns@xcom.com</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Package className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                <h3 className="font-medium mb-1">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-2">Instant Help</p>
                <Button size="sm" className="mt-1">Start Chat</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}