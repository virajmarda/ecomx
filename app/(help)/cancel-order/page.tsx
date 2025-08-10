"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, X, Search, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export default function CancelOrderPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [orderData, setOrderData] = useState(null);
  const [cancelReason, setCancelReason] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  // Mock order data
  const mockOrderData = {
    orderNumber: "XC123456789",
    status: "Processing",
    canCancel: true,
    items: [
      {
        id: "1",
        name: "Premium Wireless Headphones",
        price: 249.99,
        quantity: 1,
        image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ],
    orderDate: "2024-12-08",
    totalAmount: 249.99,
    paymentMethod: "Credit Card ending in 1234"
  };

  const cancelReasons = [
    "Changed my mind",
    "Found a better price elsewhere", 
    "Ordered by mistake",
    "Need to change shipping address",
    "Financial reasons",
    "Product no longer needed",
    "Delivery taking too long",
    "Other"
  ];

  const handleOrderLookup = () => {
    if (!orderNumber.trim()) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setOrderData(mockOrderData);
      setIsLoading(false);
      setStep(2);
    }, 1500);
  };

  const handleCancelOrder = () => {
    toast({
      title: "Order cancelled successfully!",
      description: "Your refund will be processed within 3-5 business days.",
    });
    setStep(3);
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
            <div className="p-3 bg-red-100 rounded-lg">
              <X className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Cancel My Order</h1>
              <p className="text-muted-foreground">Cancel your order before it ships</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Step 1: Find Order */}
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Find Your Order
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-yellow-800 mb-1">Important</h3>
                      <p className="text-sm text-yellow-700">
                        Orders can only be cancelled within 24 hours of placement and before they ship.
                        Once shipped, you'll need to use our return process.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Order Number</label>
                  <Input
                    placeholder="Enter your order number (e.g., XC123456789)"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    You can find this in your order confirmation email
                  </p>
                </div>
                
                <Button 
                  onClick={handleOrderLookup} 
                  className="w-full" 
                  disabled={!orderNumber.trim() || isLoading}
                >
                  {isLoading ? "Looking up order..." : "Find My Order"}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Don't have your order number?</p>
                  <Link href="/orders" className="text-sm text-blue-600 hover:underline">
                    View your order history
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Cancel Confirmation */}
          {step === 2 && orderData && (
            <Card>
              <CardHeader>
                <CardTitle>Cancel Order #{orderData.orderNumber}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge className={orderData.canCancel ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                    {orderData.canCancel ? "Cancellable" : "Cannot Cancel"}
                  </Badge>
                  <Badge variant="outline">{orderData.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {orderData.canCancel ? (
                  <>
                    {/* Order Details */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-3">Order Details</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Order Date:</span>
                          <span>{new Date(orderData.orderDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Amount:</span>
                          <span className="font-semibold">${orderData.totalAmount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Payment Method:</span>
                          <span>{orderData.paymentMethod}</span>
                        </div>
                      </div>
                    </div>

                    {/* Items */}
                    <div>
                      <h3 className="font-semibold mb-3">Items to Cancel</h3>
                      {orderData.items.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 p-3 border rounded-lg">
                          <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                            <p className="font-semibold">${item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Cancel Reason */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Reason for Cancellation (Optional)</label>
                      <select
                        value={cancelReason}
                        onChange={(e) => setCancelReason(e.target.value)}
                        className="w-full p-2 border rounded-md"
                      >
                        <option value="">Select a reason</option>
                        {cancelReasons.map((reason) => (
                          <option key={reason} value={reason}>{reason}</option>
                        ))}
                      </select>
                    </div>

                    {/* Refund Information */}
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Refund Information</h3>
                      <ul className="text-sm space-y-1 text-blue-800">
                        <li>• Full refund of ${orderData.totalAmount} will be processed</li>
                        <li>• Refund will be credited to your original payment method</li>
                        <li>• Processing time: 3-5 business days</li>
                        <li>• You'll receive an email confirmation</li>
                      </ul>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                        Back
                      </Button>
                      <Button onClick={handleCancelOrder} variant="destructive" className="flex-1">
                        Cancel Order
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-red-500" />
                    <h3 className="text-lg font-semibold mb-2">Cannot Cancel Order</h3>
                    <p className="text-muted-foreground mb-6">
                      This order has already been shipped and cannot be cancelled. 
                      You can return the items once you receive them.
                    </p>
                    <div className="flex gap-3">
                      <Button asChild variant="outline">
                        <Link href="/start-return">Start Return Process</Link>
                      </Button>
                      <Button asChild>
                        <Link href="/track-order">Track Order</Link>
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Order Cancelled Successfully!</h2>
                <p className="text-muted-foreground mb-6">
                  Your order has been cancelled and your refund is being processed.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-medium mb-2">Cancellation Reference: CAN-{Date.now()}</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep this reference number for your records
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="flex-1">
                    <Link href="/orders">View My Orders</Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link href="/">Continue Shopping</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Help Section */}
        {step === 1 && (
          <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Cancellation Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Orders can be cancelled within 24 hours of placement</li>
                  <li>• Orders cannot be cancelled once shipped</li>
                  <li>• Full refund processed within 3-5 business days</li>
                  <li>• Custom or personalized items cannot be cancelled</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Alternative Options</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/start-return">Start Return Process</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Contact Customer Service</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/track-order">Track Your Order</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}