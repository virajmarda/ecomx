import Link from "next/link";
import { ArrowLeft, Package, Search, Smartphone, Bell, MapPin, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function HowToTrackOrderPage() {
  const trackingMethods = [
    {
      method: "Order Number",
      description: "Use your order confirmation number",
      example: "XC123456789",
      steps: [
        "Go to Track Order page",
        "Enter your order number",
        "Click 'Track Order'",
        "View real-time updates"
      ]
    },
    {
      method: "Email Link",
      description: "Click the tracking link in your email",
      example: "Check your order confirmation email",
      steps: [
        "Open order confirmation email",
        "Click 'Track Your Order' button",
        "View tracking details",
        "Set up notifications"
      ]
    },
    {
      method: "Account Dashboard",
      description: "Track from your account page",
      example: "Login to your account",
      steps: [
        "Login to your account",
        "Go to 'My Orders'",
        "Click on order to track",
        "View detailed timeline"
      ]
    }
  ];

  const trackingStatuses = [
    {
      status: "Order Confirmed",
      description: "Your order has been received and confirmed",
      icon: <CheckCircle className="h-5 w-5 text-blue-600" />,
      timeframe: "Immediately after purchase"
    },
    {
      status: "Processing",
      description: "Your order is being prepared for shipment",
      icon: <Package className="h-5 w-5 text-orange-600" />,
      timeframe: "1-2 business days"
    },
    {
      status: "Shipped",
      description: "Your order has left our warehouse",
      icon: <Package className="h-5 w-5 text-purple-600" />,
      timeframe: "2-3 business days after order"
    },
    {
      status: "Out for Delivery",
      description: "Your package is on the delivery truck",
      icon: <MapPin className="h-5 w-5 text-green-600" />,
      timeframe: "Day of delivery"
    },
    {
      status: "Delivered",
      description: "Your order has been successfully delivered",
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
      timeframe: "Final status"
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
              <Package className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">How to Track My Order</h1>
              <p className="text-muted-foreground">Complete guide to tracking your orders</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Track Section */}
        <Card className="mb-8 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Quick Track Your Order</h2>
            <div className="flex gap-3">
              <Input
                placeholder="Enter your order number (e.g., XC123456789)"
                className="flex-1"
              />
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Track Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tracking Methods */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">3 Ways to Track Your Order</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trackingMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{method.method}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <p className="text-xs text-muted-foreground mb-1">Example:</p>
                    <p className="font-mono text-sm">{method.example}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Steps:</h4>
                    <ol className="text-sm space-y-1">
                      {method.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-600 mr-2 font-medium">{idx + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Order Status Guide */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Understanding Order Status</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                {trackingStatuses.map((status, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      {status.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{status.status}</h3>
                        <Badge variant="outline">{status.timeframe}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{status.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Troubleshooting */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Tracking Not Working?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Check for typos in your order number</li>
                <li>• Wait 24 hours after order confirmation</li>
                <li>• Try using your email address instead</li>
                <li>• Contact support if still having issues</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Get Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">SMS updates to your phone</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Email notifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-purple-600" />
                  <span className="text-sm">Mobile app push notifications</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Links */}
        <Card>
          <CardHeader>
            <CardTitle>Related Help Topics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button asChild variant="outline" className="h-auto p-4">
                <Link href="/shipping-costs-delivery">
                  <div className="text-center">
                    <Clock className="h-5 w-5 mx-auto mb-2" />
                    <div className="text-sm">Shipping Times</div>
                  </div>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4">
                <Link href="/change-address">
                  <div className="text-center">
                    <MapPin className="h-5 w-5 mx-auto mb-2" />
                    <div className="text-sm">Change Address</div>
                  </div>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4">
                <Link href="/delivery-problems">
                  <div className="text-center">
                    <Package className="h-5 w-5 mx-auto mb-2" />
                    <div className="text-sm">Delivery Issues</div>
                  </div>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}