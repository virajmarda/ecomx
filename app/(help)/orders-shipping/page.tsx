import Link from "next/link";
import { ArrowLeft, Package, Truck, Clock, MapPin, Phone, Mail, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function OrdersShippingPage() {
  const orderTopics = [
    {
      title: "Track Your Order",
      description: "Get real-time updates on your order status",
      icon: <Package className="h-5 w-5" />,
      link: "/track-order"
    },
    {
      title: "Shipping Information",
      description: "Delivery options, costs, and timelines",
      icon: <Truck className="h-5 w-5" />,
      link: "/shipping"
    },
    {
      title: "Order Issues",
      description: "Problems with your order or delivery",
      icon: <Clock className="h-5 w-5" />,
      link: "/order-issues"
    },
    {
      title: "Delivery Problems",
      description: "Missing, damaged, or delayed packages",
      icon: <MapPin className="h-5 w-5" />,
      link: "/delivery-problems"
    }
  ];

  const quickActions = [
    { title: "Track Order", link: "/track-order" },
    { title: "Change Address", link: "/change-address" },
    { title: "Cancel Order", link: "/cancel-order" },
    { title: "Expedite Shipping", link: "/expedite-shipping" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
              <h1 className="text-2xl md:text-3xl font-bold">Orders & Shipping</h1>
              <p className="text-muted-foreground">Everything about your orders and deliveries</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickActions.map((action, index) => (
            <Link key={index} href={action.link}>
              <Button variant="outline" className="w-full h-16 text-sm">
                {action.title}
              </Button>
            </Link>
          ))}
        </div>

        {/* Main Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {orderTopics.map((topic, index) => (
            <Link key={index} href={topic.link}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {topic.icon}
                    </div>
                    <h3 className="text-lg">{topic.title}</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{topic.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}