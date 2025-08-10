"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Zap, Search, Clock, DollarSign, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export default function ExpediteShippingPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [orderData, setOrderData] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Mock order data
  const mockOrderData = {
    orderNumber: "XC123456789",
    status: "Processing",
    canExpedite: true,
    currentShipping: "Standard Shipping (3-5 days)",
    currentCost: 5.99,
    estimatedDelivery: "Dec 12, 2024",
    orderValue: 249.99
  };

  const expediteOptions = [
    {
      id: "express",
      name: "Express Shipping",
      time: "1-2 business days",
      cost: 12.99,
      savings: "Save 2-3 days",
      newDelivery: "Dec 10, 2024"
    },
    {
      id: "overnight",
      name: "Overnight Shipping", 
      time: "Next business day",
      cost: 24.99,
      savings: "Save 3-4 days",
      newDelivery: "Dec 9, 2024"
    },
    {
      id: "same-day",
      name: "Same Day Delivery",
      time: "Within 6 hours",
      cost: 19.99,
      savings: "Get it today",
      newDelivery: "Today by 6 PM",
      available: false,
      reason: "Not available in your area"
    }
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

  const handleExpediteOrder = () => {
    const option = expediteOptions.find(opt => opt.id === selectedOption);
    toast({
      title: "Shipping upgraded successfully!",
      description: `Your order will now arrive via ${option?.name}.`,
    });
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/orders-shipping" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Orders & Shipping
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Zap className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Expedite Shipping</h1>
              <p className="text-muted-foreground">Upgrade to faster delivery options</p>
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
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-1">Expedite Shipping</h3>
                      <p className="text-sm text-blue-700">
                        Upgrade your shipping speed for faster delivery. Available only before your order ships.
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

          {/* Step 2: Choose Expedite Option */}
          {step === 2 && orderData && (
            <Card>
              <CardHeader>
                <CardTitle>Upgrade Shipping for Order #{orderData.orderNumber}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge className={orderData.canExpedite ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                    {orderData.canExpedite ? "Expedite Available" : "Cannot Expedite"}
                  </Badge>
                  <Badge variant="outline">{orderData.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {orderData.canExpedite ? (
                  <>
                    {/* Current Shipping */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Current Shipping</h3>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{orderData.currentShipping}</p>
                          <p className="text-sm text-muted-foreground">Estimated delivery: {orderData.estimatedDelivery}</p>
                        </div>
                        <p className="font-semibold">${orderData.currentCost}</p>
                      </div>
                    </div>

                    {/* Expedite Options */}
                    <div>
                      <h3 className="font-semibold mb-4">Choose Faster Shipping</h3>
                      <div className="space-y-3">
                        {expediteOptions.map((option) => (
                          <div
                            key={option.id}
                            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                              selectedOption === option.id ? 'border-blue-500 bg-blue-50' : 
                              option.available === false ? 'border-gray-200 bg-gray-50 cursor-not-allowed' : 'border-gray-200 hover:border-gray-300'
                            }`}
                            onClick={() => option.available !== false && setSelectedOption(option.id)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <input
                                  type="radio"
                                  checked={selectedOption === option.id}
                                  onChange={() => setSelectedOption(option.id)}
                                  disabled={option.available === false}
                                  className="h-4 w-4"
                                />
                                <div>
                                  <h4 className={`font-medium ${option.available === false ? 'text-gray-400' : ''}`}>
                                    {option.name}
                                  </h4>
                                  <p className={`text-sm ${option.available === false ? 'text-gray-400' : 'text-muted-foreground'}`}>
                                    {option.time} • {option.savings}
                                  </p>
                                  {option.available === false && (
                                    <p className="text-xs text-red-600">{option.reason}</p>
                                  )}
                                </div>
                              </div>
                              <div className="text-right">
                                <p className={`font-semibold ${option.available === false ? 'text-gray-400' : ''}`}>
                                  +${option.cost}
                                </p>
                                <p className={`text-sm ${option.available === false ? 'text-gray-400' : 'text-green-600'}`}>
                                  {option.newDelivery}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Cost Summary */}
                    {selectedOption && (
                      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <h3 className="font-semibold mb-3">Cost Summary</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Original shipping:</span>
                            <span>${orderData.currentCost}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>New shipping cost:</span>
                            <span>${expediteOptions.find(opt => opt.id === selectedOption)?.cost}</span>
                          </div>
                          <div className="flex justify-between font-semibold border-t pt-2">
                            <span>Additional charge:</span>
                            <span>+${(expediteOptions.find(opt => opt.id === selectedOption)?.cost - orderData.currentCost).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3">
                      <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                        Back
                      </Button>
                      <Button 
                        onClick={handleExpediteOrder} 
                        className="flex-1"
                        disabled={!selectedOption}
                      >
                        Upgrade Shipping
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-red-500" />
                    <h3 className="text-lg font-semibold mb-2">Cannot Expedite Shipping</h3>
                    <p className="text-muted-foreground mb-6">
                      This order has already been shipped and shipping cannot be expedited. 
                      You can track your order for the latest delivery updates.
                    </p>
                    <Button asChild>
                      <Link href="/track-order">Track Your Order</Link>
                    </Button>
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
                <h2 className="text-2xl font-bold mb-2">Shipping Upgraded!</h2>
                <p className="text-muted-foreground mb-6">
                  Your order shipping has been upgraded. You'll receive updated tracking information shortly.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-medium mb-2">Updated Delivery:</h3>
                  <p className="text-lg font-semibold text-green-600">
                    {expediteOptions.find(opt => opt.id === selectedOption)?.newDelivery}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="flex-1">
                    <Link href="/track-order">Track Your Order</Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link href="/orders">View All Orders</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Information Cards */}
        {step === 1 && (
          <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Expedite Shipping Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Faster delivery to your doorstep</li>
                  <li>• Priority processing in our warehouse</li>
                  <li>• Enhanced tracking with real-time updates</li>
                  <li>• Dedicated customer support</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Important Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Expedite options available before shipping only</li>
                  <li>• Additional charges will be applied</li>
                  <li>• Delivery times are estimates, not guarantees</li>
                  <li>• Some areas may have limited expedite options</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}