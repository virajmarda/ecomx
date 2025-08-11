import Link from "next/link";
import { ArrowLeft, RotateCcw, Clock, CheckCircle, Package, CreditCard, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ReturnPolicyProcessPage() {
  const returnSteps = [
    {
      step: 1,
      title: "Initiate Return",
      description: "Start your return request online or contact customer service",
      timeframe: "Within 30 days of delivery",
      icon: <Package className="h-5 w-5" />
    },
    {
      step: 2,
      title: "Print Return Label",
      description: "Download and print the prepaid return shipping label",
      timeframe: "Within 24 hours of request",
      icon: <Package className="h-5 w-5" />
    },
    {
      step: 3,
      title: "Pack & Ship",
      description: "Pack item securely and drop off at authorized location",
      timeframe: "Within 7 days of label generation",
      icon: <Package className="h-5 w-5" />
    },
    {
      step: 4,
      title: "Processing",
      description: "We inspect the item and process your return",
      timeframe: "1-3 business days after receipt",
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      step: 5,
      title: "Refund Issued",
      description: "Refund is processed to your original payment method",
      timeframe: "3-7 business days",
      icon: <CreditCard className="h-5 w-5" />
    }
  ];

  const returnableItems = [
    "Items in original packaging with tags",
    "Unused products in sellable condition",
    "Electronics in working condition",
    "Books and media without damage",
    "Clothing and accessories (unworn)",
    "Home goods in original condition"
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

  const refundMethods = [
    {
      method: "Credit Card",
      timeframe: "3-5 business days",
      description: "Refunded to original card"
    },
    {
      method: "Debit Card",
      timeframe: "5-7 business days", 
      description: "Refunded to original card"
    },
    {
      method: "Digital Wallet",
      timeframe: "1-3 business days",
      description: "PayPal, Apple Pay, Google Pay"
    },
    {
      method: "Store Credit",
      timeframe: "Immediate",
      description: "For gift card purchases"
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
            <div className="p-3 bg-green-100 rounded-lg">
              <RotateCcw className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Return Policy & Process</h1>
              <p className="text-muted-foreground">Complete guide to returning items and getting refunds</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Start */}
        <Card className="mb-8 border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-6 w-6 text-green-600" />
              <div>
                <h2 className="text-xl font-bold text-green-800">30-Day Return Policy</h2>
                <p className="text-green-700">Easy returns with free shipping on our errors</p>
              </div>
            </div>
            <Button asChild>
              <Link href="/start-return">Start a Return Now</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Return Process Steps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Step-by-Step Return Process</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                {returnSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      {index < returnSteps.length - 1 && (
                        <div className="w-px h-8 bg-blue-200 mt-2" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{step.title}</h3>
                        <Badge variant="outline">{step.timeframe}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What Can Be Returned */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What Can Be Returned?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <CheckCircle className="h-5 w-5" />
                  Returnable Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {returnableItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <AlertTriangle className="h-5 w-5" />
                  Non-Returnable Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {nonReturnableItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Refund Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Refund Timeline by Payment Method</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-6">
                {refundMethods.map((method, index) => (
                  <div key={index} className="text-center p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">{method.method}</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{method.timeframe}</div>
                    <p className="text-xs text-muted-foreground">{method.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Notes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Important Return Policy Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-green-600">✓ What's Included</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Free return shipping for our errors</li>
                  <li>• Full refund including original shipping</li>
                  <li>• No restocking fees</li>
                  <li>• Easy online return process</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-orange-600">⚠ Important Conditions</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Items must be returned within 30 days</li>
                  <li>• Original packaging required</li>
                  <li>• Customer pays return shipping for change of mind</li>
                  <li>• Some items have different return periods</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4">
          <Button asChild size="lg" className="h-auto p-4">
            <Link href="/start-return">
              <div className="text-center">
                <RotateCcw className="h-6 w-6 mx-auto mb-2" />
                <div>Start a Return</div>
              </div>
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-auto p-4">
            <Link href="/refund-status">
              <div className="text-center">
                <CreditCard className="h-6 w-6 mx-auto mb-2" />
                <div>Check Refund Status</div>
              </div>
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-auto p-4">
            <Link href="/contact">
              <div className="text-center">
                <Package className="h-6 w-6 mx-auto mb-2" />
                <div>Contact Support</div>
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}