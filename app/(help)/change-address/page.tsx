"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Search, Edit, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export default function ChangeAddressPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [orderData, setOrderData] = useState(null);
  const [newAddress, setNewAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Mock order data
  const mockOrderData = {
    orderNumber: "XC123456789",
    status: "Processing",
    canChangeAddress: true,
    currentAddress: {
      name: "John Doe",
      phone: "+91 9876543210",
      address: "123 Main Street, Apt 4B",
      city: "Mumbai",
      state: "Maharashtra", 
      pincode: "400001"
    },
    orderDate: "2024-12-08",
    estimatedShipping: "2024-12-09"
  };

  const handleOrderLookup = () => {
    if (!orderNumber.trim()) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setOrderData(mockOrderData);
      setNewAddress(mockOrderData.currentAddress);
      setIsLoading(false);
      setStep(2);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewAddress(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitChange = () => {
    toast({
      title: "Address updated successfully!",
      description: "Your delivery address has been changed for this order.",
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
            <div className="p-3 bg-blue-100 rounded-lg">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Change Delivery Address</h1>
              <p className="text-muted-foreground">Update your delivery address before shipping</p>
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
                        Address changes are only possible before your order ships. Once shipped, 
                        you'll need to contact the carrier directly.
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

          {/* Step 2: Change Address */}
          {step === 2 && orderData && (
            <Card>
              <CardHeader>
                <CardTitle>Change Address for Order #{orderData.orderNumber}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge className={orderData.canChangeAddress ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                    {orderData.canChangeAddress ? "Address Change Available" : "Cannot Change Address"}
                  </Badge>
                  <Badge variant="outline">{orderData.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {orderData.canChangeAddress ? (
                  <>
                    {/* Current Address */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-3">Current Delivery Address</h3>
                      <div className="text-sm space-y-1">
                        <p className="font-medium">{orderData.currentAddress.name}</p>
                        <p>{orderData.currentAddress.phone}</p>
                        <p>{orderData.currentAddress.address}</p>
                        <p>{orderData.currentAddress.city}, {orderData.currentAddress.state} - {orderData.currentAddress.pincode}</p>
                      </div>
                    </div>

                    {/* New Address Form */}
                    <div>
                      <h3 className="font-semibold mb-4">New Delivery Address</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Full Name *</label>
                            <Input
                              name="name"
                              value={newAddress.name}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Phone Number *</label>
                            <Input
                              name="phone"
                              value={newAddress.phone}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Address *</label>
                          <Textarea
                            name="address"
                            value={newAddress.address}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">City *</label>
                            <Input
                              name="city"
                              value={newAddress.city}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">State *</label>
                            <Input
                              name="state"
                              value={newAddress.state}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">PIN Code *</label>
                          <Input
                            name="pincode"
                            value={newAddress.pincode}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Important Information */}
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Important Information</h3>
                      <ul className="text-sm space-y-1 text-blue-800">
                        <li>• Address change may affect delivery timeline</li>
                        <li>• New delivery estimate will be provided after change</li>
                        <li>• Shipping costs may be recalculated</li>
                        <li>• You'll receive confirmation via email and SMS</li>
                      </ul>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                        Back
                      </Button>
                      <Button onClick={handleSubmitChange} className="flex-1">
                        Update Address
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-red-500" />
                    <h3 className="text-lg font-semibold mb-2">Cannot Change Address</h3>
                    <p className="text-muted-foreground mb-6">
                      This order has already been shipped and the delivery address cannot be changed. 
                      Please contact the carrier directly to arrange delivery changes.
                    </p>
                    <div className="flex gap-3">
                      <Button asChild variant="outline">
                        <Link href="/track-order">Track Order</Link>
                      </Button>
                      <Button asChild>
                        <Link href="/contact">Contact Support</Link>
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
                <h2 className="text-2xl font-bold mb-2">Address Updated Successfully!</h2>
                <p className="text-muted-foreground mb-6">
                  Your delivery address has been updated. You'll receive a confirmation email shortly.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-medium mb-2">Updated Address:</h3>
                  <div className="text-sm space-y-1">
                    <p className="font-medium">{newAddress.name}</p>
                    <p>{newAddress.phone}</p>
                    <p>{newAddress.address}</p>
                    <p>{newAddress.city}, {newAddress.state} - {newAddress.pincode}</p>
                  </div>
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

        {/* Help Section */}
        {step === 1 && (
          <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Address Change Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Address can be changed before order ships</li>
                  <li>• Changes may affect delivery timeline</li>
                  <li>• Shipping costs may be recalculated</li>
                  <li>• Confirmation sent via email and SMS</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/track-order">Track Your Order</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Contact Customer Service</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/shipping">Shipping Information</Link>
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