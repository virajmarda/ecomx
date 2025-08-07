"use client";

import Link from "next/link";
import { ArrowLeft, AlertTriangle, Package, CreditCard, Truck, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function OrderIssuesPage() {
  const commonIssues = [
    {
      title: "Wrong Item Received",
      description: "You received a different product than what you ordered",
      icon: <Package className="h-5 w-5" />,
      solution: "We'll arrange a free return and send the correct item immediately",
      action: "Report Wrong Item"
    },
    {
      title: "Missing Items",
      description: "Some items from your order are missing from the package",
      icon: <AlertTriangle className="h-5 w-5" />,
      solution: "We'll investigate and either refund or ship the missing items",
      action: "Report Missing Items"
    },
    {
      title: "Damaged Package",
      description: "Your order arrived damaged or in poor condition",
      icon: <Package className="h-5 w-5" />,
      solution: "We'll provide a full refund or replacement at no cost to you",
      action: "Report Damage"
    },
    {
      title: "Order Not Delivered",
      description: "Your order shows as delivered but you haven't received it",
      icon: <Truck className="h-5 w-5" />,
      solution: "We'll track down your package and ensure proper delivery",
      action: "Report Non-Delivery"
    },
    {
      title: "Billing Issues",
      description: "Problems with charges, duplicate payments, or billing errors",
      icon: <CreditCard className="h-5 w-5" />,
      solution: "Our billing team will review and resolve any payment discrepancies",
      action: "Report Billing Issue"
    }
  ];

  const resolutionSteps = [
    {
      step: 1,
      title: "Report the Issue",
      description: "Contact us with your order details and describe the problem"
    },
    {
      step: 2,
      title: "Investigation",
      description: "Our team will investigate the issue and determine the best solution"
    },
    {
      step: 3,
      title: "Resolution",
      description: "We'll provide a refund, replacement, or other appropriate resolution"
    },
    {
      step: 4,
      title: "Follow-up",
      description: "We'll ensure you're satisfied with the resolution"
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
            <div className="p-3 bg-red-100 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Order Issues</h1>
              <p className="text-muted-foreground">We're here to resolve any problems with your order</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Resolution */}
        <Card className="mb-8 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Phone className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h2 className="font-semibold text-blue-800">Need Immediate Help?</h2>
                <p className="text-sm text-blue-700">Call our priority support line for urgent order issues</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Call +91 123 456 7890
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Start Live Chat
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Common Issues */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Common Order Issues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonIssues.map((issue, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 rounded-lg text-red-600">
                      {issue.icon}
                    </div>
                    <h3 className="text-lg">{issue.title}</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{issue.description}</p>
                  <div className="bg-green-50 border border-green-200 p-3 rounded-lg mb-4">
                    <p className="text-sm text-green-800">{issue.solution}</p>
                  </div>
                  <Button className="w-full" variant="outline">
                    {issue.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resolution Process */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How We Resolve Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              {resolutionSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Guarantees */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="p-3 bg-green-100 rounded-full w-fit mx-auto mb-4">
                <Package className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">100% Resolution Guarantee</h3>
              <p className="text-sm text-muted-foreground">
                We guarantee to resolve every order issue to your satisfaction
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                <Truck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Free Return Shipping</h3>
              <p className="text-sm text-muted-foreground">
                No cost to you for returns due to our errors
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="p-3 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                <CreditCard className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Instant Refunds</h3>
              <p className="text-sm text-muted-foreground">
                Quick refund processing for eligible issues
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Options */}
        <Card>
          <CardHeader>
            <CardTitle>Get Help Now</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold">For Urgent Issues:</h3>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Priority Support Line</p>
                    <p className="text-sm text-muted-foreground">+91 123 456 7890 (24/7)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Mail className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-sm text-muted-foreground">issues@xcom.com</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">What to Include:</h3>
                <ul className="text-sm space-y-2">
                  <li>• Your order number</li>
                  <li>• Description of the issue</li>
                  <li>• Photos (if applicable)</li>
                  <li>• Your contact information</li>
                  <li>• Preferred resolution</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}