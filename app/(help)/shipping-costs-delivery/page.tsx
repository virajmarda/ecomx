import Link from "next/link";
import { ArrowLeft, Truck, Clock, MapPin, DollarSign, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ShippingCostsDeliveryPage() {
  const shippingRates = [
    {
      method: "Standard Shipping",
      time: "3-5 business days",
      cost: "$5.99",
      freeThreshold: "Free on orders $50+",
      description: "Reliable delivery for everyday orders"
    },
    {
      method: "Express Shipping", 
      time: "1-2 business days",
      cost: "$12.99",
      freeThreshold: "Free on orders $100+",
      description: "Fast delivery when you need it quickly"
    },
    {
      method: "Same Day Delivery",
      time: "Within 6 hours",
      cost: "$19.99", 
      freeThreshold: "Free on orders $150+",
      description: "Available in select metro areas"
    },
    {
      method: "International Shipping",
      time: "7-14 business days",
      cost: "Varies by location",
      freeThreshold: "Free on orders $200+",
      description: "Worldwide delivery to 200+ countries"
    }
  ];

  const deliveryZones = [
    { zone: "Zone 1", areas: "Mumbai, Delhi, Bangalore, Chennai", time: "1-2 days", cost: "$3.99" },
    { zone: "Zone 2", areas: "Major cities and state capitals", time: "2-3 days", cost: "$5.99" },
    { zone: "Zone 3", areas: "Tier 2 cities and towns", time: "3-4 days", cost: "$7.99" },
    { zone: "Zone 4", areas: "Rural and remote areas", time: "4-5 days", cost: "$9.99" }
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
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Shipping Costs & Delivery Time</h1>
              <p className="text-muted-foreground">Understand our shipping rates and delivery options</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Shipping Methods */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Shipping Methods & Costs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shippingRates.map((rate, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-blue-600" />
                    {rate.method}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Delivery Time:</span>
                      <Badge variant="outline">{rate.time}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Cost:</span>
                      <span className="font-semibold">{rate.cost}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Free Shipping:</span>
                      <span className="text-sm font-medium text-green-600">{rate.freeThreshold}</span>
                    </div>
                    <p className="text-sm text-muted-foreground pt-2 border-t">
                      {rate.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Delivery Zones */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Delivery Zones & Timeline</h2>
          <Card>
            <CardContent className="p-0">
              {deliveryZones.map((zone, index) => (
                <div key={index} className="p-6 border-b last:border-b-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">{zone.zone}</h3>
                      <p className="text-sm text-muted-foreground">{zone.areas}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-1">{zone.time}</Badge>
                      <p className="text-sm font-medium">{zone.cost}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Free Shipping Benefits */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Free Shipping Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">How to Get Free Shipping:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Standard shipping free on orders over $50</li>
                  <li>• Express shipping free on orders over $100</li>
                  <li>• Same day delivery free on orders over $150</li>
                  <li>• International shipping free on orders over $200</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Additional Benefits:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• No minimum order for premium members</li>
                  <li>• Free shipping on all electronics over $199</li>
                  <li>• Free returns on all orders</li>
                  <li>• Priority processing for free shipping orders</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Delivery Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Delivery Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Delivery Hours</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Monday - Friday: 9:00 AM - 6:00 PM</li>
                    <li>• Saturday: 10:00 AM - 4:00 PM</li>
                    <li>• Sunday: Limited areas only</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Special Instructions</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Leave with neighbor</li>
                    <li>• Safe drop location</li>
                    <li>• Signature required</li>
                    <li>• Call before delivery</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shipping Restrictions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Items We Cannot Ship</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Hazardous materials</li>
                    <li>• Perishable goods</li>
                    <li>• Live animals</li>
                    <li>• Weapons and ammunition</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Restricted Areas</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Military bases (special approval required)</li>
                    <li>• P.O. boxes (selected items only)</li>
                    <li>• Remote islands</li>
                    <li>• Conflict zones</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}