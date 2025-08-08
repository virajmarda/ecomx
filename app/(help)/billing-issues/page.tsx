"use client";

import Link from "next/link";
import { ArrowLeft, CreditCard, AlertTriangle, RefreshCw, DollarSign, Receipt } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BillingIssuesPage() {
  const billingProblems = [
    {
      title: "Incorrect Charge",
      description: "You were charged the wrong amount",
      icon: <DollarSign className="h-5 w-5" />,
      solution: "We'll review your order and process a refund for any overcharge within 3-5 business days"
    },
    {
      title: "Duplicate Charge",
      description: "You were charged multiple times for the same order",
      icon: <RefreshCw className="h-5 w-5" />,
      solution: "We'll immediately reverse the duplicate charges and confirm the correction"
    },
    {
      title: "Payment Failed",
      description: "Your payment was declined or failed to process",
      icon: <AlertTriangle className="h-5 w-5" />,
      solution: "We'll help you update your payment method and retry the transaction"
    },
    {
      title: "Missing Receipt",
      description: "You need a copy of your receipt or invoice",
      icon: <Receipt className="h-5 w-5" />,
      solution: "We'll resend your receipt immediately to your registered email address"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/account-payment" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Account & Payment
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-orange-100 rounded-lg">
              <CreditCard className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Billing Issues</h1>
              <p className="text-muted-foreground">Resolve payment and billing problems</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {billingProblems.map((problem, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                    {problem.icon}
                  </div>
                  <h3 className="text-lg">{problem.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{problem.description}</p>
                <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg mb-4">
                  <p className="text-sm text-blue-800">{problem.solution}</p>
                </div>
                <Button className="w-full">Report This Issue</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}