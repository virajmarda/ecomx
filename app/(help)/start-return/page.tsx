"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Package, Search, Upload, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export default function StartReturnPage() {
  const [step, setStep] = useState(1);
  const [orderNumber, setOrderNumber] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [returnReason, setReturnReason] = useState("");
  const [returnDetails, setReturnDetails] = useState("");
  const { toast } = useToast();

  // Mock order data
  const mockOrder = {
    orderNumber: "XC123456789",
    date: "2024-12-01",
    items: [
      {
        id: "1",
        name: "Premium Wireless Headphones",
        price: 249.99,
        quantity: 1,
        image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
        returnable: true
      },
      {
        id: "2", 
        name: "USB-C Cable",
        price: 19.99,
        quantity: 2,
        image: "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=400",
        returnable: true
      }
    ]
  };

  const returnReasons = [
    "Defective or damaged item",
    "Wrong item received", 
    "Item doesn't match description",
    "Changed my mind",
    "Size/fit issues",
    "Quality not as expected",
    "Arrived too late",
    "Other"
  ];

  const handleOrderLookup = () => {
    if (orderNumber.trim()) {
      setStep(2);
    }
  };

  const handleItemSelection = (itemId: string) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSubmitReturn = () => {
    toast({
      title: "Return request submitted!",
      description: "We'll process your return and send you a shipping label within 24 hours.",
    });
    setStep(4);
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
            <div className="p-3 bg-green-100 rounded-lg">
              <Package className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Start a Return</h1>
              <p className="text-muted-foreground">Easy returns in just a few steps</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            {[
              { num: 1, title: "Find Order", active: step >= 1, completed: step > 1 },
              { num: 2, title: "Select Items", active: step >= 2, completed: step > 2 },
              { num: 3, title: "Return Details", active: step >= 3, completed: step > 3 },
              { num: 4, title: "Confirmation", active: step >= 4, completed: step > 4 }
            ].map((stepItem, index) => (
              <div key={stepItem.num} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  stepItem.completed ? 'bg-green-600 text-white' :
                  stepItem.active ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepItem.completed ? <CheckCircle className="h-5 w-5" /> : stepItem.num}
                </div>
                <div className="ml-2 hidden sm:block">
                  <p className={`text-sm font-medium ${stepItem.active ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {stepItem.title}
                  </p>
                </div>
                {index < 3 && (
                  <div className={`w-8 md:w-16 h-0.5 mx-2 md:mx-4 ${
                    stepItem.completed ? 'bg-green-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

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
                <div>
                  <label className="block text-sm font-medium mb-2">Order Number</label>
                  <Input
                    placeholder="Enter your order number (e.g., XC123456789)"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="w-full"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    You can find this in your order confirmation email
                  </p>
                </div>
                
                <Button onClick={handleOrderLookup} className="w-full" disabled={!orderNumber.trim()}>
                  Find My Order
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

          {/* Step 2: Select Items */}
          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Select Items to Return</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Order #{mockOrder.orderNumber} • Placed on {new Date(mockOrder.date).toLocaleDateString()}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockOrder.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleItemSelection(item.id)}
                      className="h-4 w-4"
                    />
                    <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                      <p className="font-semibold">${item.price}</p>
                    </div>
                    {item.returnable ? (
                      <Badge className="bg-green-100 text-green-800">Returnable</Badge>
                    ) : (
                      <Badge variant="outline">Non-returnable</Badge>
                    )}
                  </div>
                ))}
                
                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button 
                    onClick={() => setStep(3)} 
                    className="flex-1"
                    disabled={selectedItems.length === 0}
                  >
                    Continue ({selectedItems.length} items)
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Return Details */}
          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Return Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Reason for Return *</label>
                  <Select value={returnReason} onValueChange={setReturnReason}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    <SelectContent>
                      {returnReasons.map((reason) => (
                        <SelectItem key={reason} value={reason}>
                          {reason}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Details</label>
                  <Textarea
                    placeholder="Please provide more details about the issue (optional)"
                    value={returnDetails}
                    onChange={(e) => setReturnDetails(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">What happens next?</h3>
                  <ul className="text-sm space-y-1 text-blue-800">
                    <li>• We'll email you a prepaid return shipping label</li>
                    <li>• Pack the items securely in original packaging</li>
                    <li>• Drop off at any authorized shipping location</li>
                    <li>• Refund processed within 5-7 business days</li>
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                    Back
                  </Button>
                  <Button 
                    onClick={handleSubmitReturn} 
                    className="flex-1"
                    disabled={!returnReason}
                  >
                    Submit Return Request
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Return Request Submitted!</h2>
                <p className="text-muted-foreground mb-6">
                  Your return request has been received. We'll email you a prepaid shipping label within 24 hours.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-medium mb-2">Return Reference: RET-{Date.now()}</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep this reference number for tracking your return
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="flex-1">
                    <Link href="/orders">View My Orders</Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link href="/help">Back to Help Center</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}