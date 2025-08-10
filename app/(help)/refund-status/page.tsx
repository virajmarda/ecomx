"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CreditCard, Search, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function RefundStatusPage() {
  const [refundId, setRefundId] = useState("");
  const [refundData, setRefundData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock refund data
  const mockRefundData = {
    refundId: "REF789012345",
    orderNumber: "XC123456789",
    status: "Processing",
    amount: 249.99,
    method: "Credit Card ending in 1234",
    estimatedDate: "Dec 12, 2024",
    timeline: [
      {
        status: "Return Received",
        date: "Dec 8, 2024 - 2:30 PM",
        description: "We received your returned item",
        completed: true
      },
      {
        status: "Quality Check",
        date: "Dec 9, 2024 - 10:15 AM", 
        description: "Item passed quality inspection",
        completed: true
      },
      {
        status: "Refund Processing",
        date: "Dec 10, 2024 - 9:00 AM",
        description: "Refund is being processed",
        completed: true
      },
      {
        status: "Refund Issued",
        date: "Expected: Dec 12, 2024",
        description: "Refund will be credited to your account",
        completed: false
      }
    ]
  };

  const handleCheckStatus = () => {
    if (!refundId.trim()) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setRefundData(mockRefundData);
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
              <CreditCard className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Check Refund Status</h1>
              <p className="text-muted-foreground">Track your refund progress</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Refund Lookup */}
        <Card className="max-w-md mx-auto mb-8">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Refund ID or Order Number</label>
                <Input
                  placeholder="Enter refund ID or order number"
                  value={refundId}
                  onChange={(e) => setRefundId(e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Example: REF789012345 or XC123456789
                </p>
              </div>
              <Button 
                onClick={handleCheckStatus}
                disabled={isLoading || !refundId.trim()}
                className="w-full"
              >
                {isLoading ? "Checking..." : "Check Status"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Refund Results */}
        {refundData && (
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Refund Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Refund #{refundData.refundId}</span>
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    {refundData.status}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold mb-1">Refund Amount</h3>
                    <p className="text-2xl font-bold text-green-600">${refundData.amount}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Refund Method</h3>
                    <p className="text-sm">{refundData.method}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Expected Date</h3>
                    <p className="text-sm font-medium text-blue-600">{refundData.estimatedDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Refund Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Refund Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {refundData.timeline.map((step, index) => (
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
                        {index < refundData.timeline.length - 1 && (
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
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Important Information */}
            <Card>
              <CardHeader>
                <CardTitle>Important Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Refund Timeline</h3>
                    <ul className="text-sm space-y-2">
                      <li>• Credit cards: 3-5 business days</li>
                      <li>• Debit cards: 5-7 business days</li>
                      <li>• Digital wallets: 1-3 business days</li>
                      <li>• Bank transfers: 5-10 business days</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Need Help?</h3>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full">
                        Contact Refund Team
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        View Return Policy
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Help Section */}
        {!refundData && (
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Where to find your refund ID?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Check your return confirmation email</li>
                  <li>• Look in your account under "Returns"</li>
                  <li>• Use your original order number</li>
                  <li>• Check SMS notifications</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Refund Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Processing: 1-2 business days</li>
                  <li>• Bank processing: 3-7 business days</li>
                  <li>• Total time: 5-10 business days</li>
                  <li>• Expedited refunds available for some cases</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}