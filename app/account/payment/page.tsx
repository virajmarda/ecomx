"use client";

import { useState } from "react";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { Plus, CreditCard, Trash2, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface PaymentMethod {
  id: string;
  type: "card" | "upi" | "wallet";
  name: string;
  details: string;
  isDefault: boolean;
  lastUsed?: string;
}

export default function PaymentPage() {
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: "1",
      type: "card",
      name: "HDFC Credit Card",
      details: "**** **** **** 1234",
      isDefault: true,
      lastUsed: "2024-01-15"
    },
    {
      id: "2",
      type: "upi",
      name: "Google Pay",
      details: "john.doe@okaxis",
      isDefault: false,
      lastUsed: "2024-01-10"
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<"card" | "upi" | "wallet">("card");
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    upiId: "",
    walletType: ""
  });

  if (!user) {
    router.push("/");
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let newMethod: PaymentMethod;
    
    if (selectedType === "card") {
      newMethod = {
        id: Date.now().toString(),
        type: "card",
        name: `${formData.cardholderName}'s Card`,
        details: `**** **** **** ${formData.cardNumber.slice(-4)}`,
        isDefault: paymentMethods.length === 0
      };
    } else if (selectedType === "upi") {
      newMethod = {
        id: Date.now().toString(),
        type: "upi",
        name: "UPI ID",
        details: formData.upiId,
        isDefault: paymentMethods.length === 0
      };
    } else {
      newMethod = {
        id: Date.now().toString(),
        type: "wallet",
        name: formData.walletType,
        details: "Wallet",
        isDefault: paymentMethods.length === 0
      };
    }

    setPaymentMethods(prev => [...prev, newMethod]);
    toast({
      title: "Payment method added",
      description: "Your new payment method has been added successfully.",
    });

    setIsDialogOpen(false);
    setFormData({
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardholderName: "",
      upiId: "",
      walletType: ""
    });
  };

  const handleDelete = (id: string) => {
    setPaymentMethods(prev => prev.filter(method => method.id !== id));
    toast({
      title: "Payment method removed",
      description: "The payment method has been removed from your account.",
    });
  };

  const handleSetDefault = (id: string) => {
    setPaymentMethods(prev => prev.map(method => ({
      ...method,
      isDefault: method.id === id
    })));
    toast({
      title: "Default payment updated",
      description: "This payment method is now set as your default.",
    });
  };

  const getPaymentIcon = (type: string) => {
    switch (type) {
      case "card":
        return <CreditCard className="h-5 w-5" />;
      case "upi":
        return <span className="text-lg">📱</span>;
      case "wallet":
        return <span className="text-lg">💳</span>;
      default:
        return <CreditCard className="h-5 w-5" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Payment Methods</h1>
            <p className="text-muted-foreground">Manage your payment options</p>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Payment Method
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Add Payment Method</DialogTitle>
                <DialogDescription>
                  Choose a payment method to add to your account.
                </DialogDescription>
              </DialogHeader>
              
              {/* Payment Type Selection */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <button
                  type="button"
                  className={`p-4 border rounded-lg text-center ${
                    selectedType === "card" ? "border-primary bg-primary/5" : "border-muted"
                  }`}
                  onClick={() => setSelectedType("card")}
                >
                  <CreditCard className="h-6 w-6 mx-auto mb-2" />
                  <span className="text-sm">Card</span>
                </button>
                <button
                  type="button"
                  className={`p-4 border rounded-lg text-center ${
                    selectedType === "upi" ? "border-primary bg-primary/5" : "border-muted"
                  }`}
                  onClick={() => setSelectedType("upi")}
                >
                  <span className="text-2xl mb-2 block">📱</span>
                  <span className="text-sm">UPI</span>
                </button>
                <button
                  type="button"
                  className={`p-4 border rounded-lg text-center ${
                    selectedType === "wallet" ? "border-primary bg-primary/5" : "border-muted"
                  }`}
                  onClick={() => setSelectedType("wallet")}
                >
                  <span className="text-2xl mb-2 block">💳</span>
                  <span className="text-sm">Wallet</span>
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {selectedType === "card" && (
                  <>
                    <div>
                      <Label htmlFor="cardholderName">Cardholder Name</Label>
                      <Input
                        name="cardholderName"
                        value={formData.cardholderName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}
                
                {selectedType === "upi" && (
                  <div>
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input
                      name="upiId"
                      value={formData.upiId}
                      onChange={handleInputChange}
                      placeholder="yourname@paytm"
                      required
                    />
                  </div>
                )}
                
                {selectedType === "wallet" && (
                  <div>
                    <Label htmlFor="walletType">Wallet Type</Label>
                    <select
                      name="walletType"
                      value={formData.walletType}
                      onChange={(e) => setFormData(prev => ({ ...prev, walletType: e.target.value }))}
                      className="w-full mt-1 p-2 border rounded-md"
                      required
                    >
                      <option value="">Select Wallet</option>
                      <option value="Paytm">Paytm</option>
                      <option value="PhonePe">PhonePe</option>
                      <option value="Amazon Pay">Amazon Pay</option>
                      <option value="Mobikwik">Mobikwik</option>
                    </select>
                  </div>
                )}
                
                <div className="flex gap-3 pt-4">
                  <Button type="submit" className="flex-1">
                    Add Payment Method
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Security Notice */}
        <Card className="mb-6 border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-blue-800">Your payment information is secure</p>
                <p className="text-xs text-blue-600">We use industry-standard encryption to protect your data</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods List */}
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <Card key={method.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-muted rounded-lg">
                      {getPaymentIcon(method.type)}
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{method.name}</h3>
                        {method.isDefault && (
                          <Badge variant="secondary">Default</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{method.details}</p>
                      {method.lastUsed && (
                        <p className="text-xs text-muted-foreground">
                          Last used: {new Date(method.lastUsed).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {!method.isDefault && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSetDefault(method.id)}
                      >
                        Set Default
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(method.id)}
                      disabled={method.isDefault && paymentMethods.length === 1}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {paymentMethods.length === 0 && (
          <div className="text-center py-12">
            <CreditCard className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No payment methods added</h3>
            <p className="text-muted-foreground mb-6">
              Add your first payment method to make checkout faster.
            </p>
          </div>
        )}

        {/* Accepted Payment Methods */}
        <div className="mt-8 p-6 bg-muted/50 rounded-lg">
          <h3 className="font-semibold mb-4">We Accept</h3>
          <div className="flex flex-wrap items-center gap-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" 
              alt="Visa" 
              className="h-6" 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
              alt="Mastercard" 
              className="h-6" 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" 
              alt="UPI" 
              className="h-6" 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%282019%29.svg" 
              alt="Paytm" 
              className="h-6" 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" 
              alt="Google Pay" 
              className="h-6" 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/29/PhonePe_Logo.svg" 
              alt="PhonePe" 
              className="h-6" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}