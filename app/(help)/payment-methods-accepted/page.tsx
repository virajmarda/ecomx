import Link from "next/link";
import { ArrowLeft, CreditCard, Smartphone, Wallet, Shield, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PaymentMethodsPage() {
  const paymentMethods = [
    {
      category: "Credit & Debit Cards",
      icon: <CreditCard className="h-6 w-6" />,
      methods: [
        { name: "Visa", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg", accepted: true },
        { name: "Mastercard", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg", accepted: true },
        { name: "American Express", logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg", accepted: true },
        { name: "Discover", logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg", accepted: true }
      ],
      features: ["Instant processing", "Secure encryption", "Fraud protection", "International cards accepted"]
    },
    {
      category: "Digital Wallets",
      icon: <Smartphone className="h-6 w-6" />,
      methods: [
        { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg", accepted: true },
        { name: "Apple Pay", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg", accepted: true },
        { name: "Google Pay", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg", accepted: true },
        { name: "Samsung Pay", logo: "https://upload.wikimedia.org/wikipedia/commons/7/71/Samsung_Pay_logo.svg", accepted: true }
      ],
      features: ["One-click checkout", "Biometric authentication", "No card details shared", "Instant confirmation"]
    },
    {
      category: "Indian Payment Methods",
      icon: <Wallet className="h-6 w-6" />,
      methods: [
        { name: "UPI", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg", accepted: true },
        { name: "Paytm", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%282019%29.svg", accepted: true },
        { name: "PhonePe", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/PhonePe_Logo.svg", accepted: true },
        { name: "Net Banking", logo: "", accepted: true }
      ],
      features: ["Instant transfers", "No transaction fees", "All major banks supported", "QR code payments"]
    }
  ];

  const securityFeatures = [
    {
      title: "SSL Encryption",
      description: "All payment data is encrypted using 256-bit SSL",
      icon: <Shield className="h-5 w-5 text-green-600" />
    },
    {
      title: "PCI Compliance",
      description: "We meet the highest payment security standards",
      icon: <CheckCircle className="h-5 w-5 text-blue-600" />
    },
    {
      title: "Fraud Detection",
      description: "Advanced AI monitors all transactions for security",
      icon: <Shield className="h-5 w-5 text-purple-600" />
    },
    {
      title: "Zero Liability",
      description: "You're protected against unauthorized transactions",
      icon: <CheckCircle className="h-5 w-5 text-orange-600" />
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
              <CreditCard className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Payment Methods Accepted</h1>
              <p className="text-muted-foreground">Safe and secure payment options for your convenience</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Payment Methods */}
        <div className="space-y-8 mb-12">
          {paymentMethods.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {category.icon}
                  </div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4">Accepted Methods:</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {category.methods.map((method, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 border rounded-lg">
                          {method.logo ? (
                            <img src={method.logo} alt={method.name} className="h-6 w-auto" />
                          ) : (
                            <span className="font-medium">{method.name}</span>
                          )}
                          {method.accepted && (
                            <CheckCircle className="h-4 w-4 text-green-600 ml-auto" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Features:</h3>
                    <ul className="space-y-2">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Payment Security</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Payment Process */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How Payment Processing Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  1
                </div>
                <h3 className="font-semibold mb-2">Select Payment</h3>
                <p className="text-sm text-muted-foreground">Choose your preferred payment method</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  2
                </div>
                <h3 className="font-semibold mb-2">Secure Processing</h3>
                <p className="text-sm text-muted-foreground">Your payment is encrypted and processed securely</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  3
                </div>
                <h3 className="font-semibold mb-2">Confirmation</h3>
                <p className="text-sm text-muted-foreground">Receive instant payment confirmation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  4
                </div>
                <h3 className="font-semibold mb-2">Order Processing</h3>
                <p className="text-sm text-muted-foreground">Your order begins processing immediately</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card>
          <CardHeader>
            <CardTitle>Payment FAQ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Is my payment information safe?</h3>
                  <p className="text-sm text-muted-foreground">Yes, we use bank-level encryption and never store your full card details.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Can I save my payment methods?</h3>
                  <p className="text-sm text-muted-foreground">Yes, you can securely save payment methods for faster checkout.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">What if my payment fails?</h3>
                  <p className="text-sm text-muted-foreground">Try a different payment method or contact your bank to authorize the transaction.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Do you accept international cards?</h3>
                  <p className="text-sm text-muted-foreground">Yes, we accept international credit and debit cards from most countries.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Are there any payment fees?</h3>
                  <p className="text-sm text-muted-foreground">No, we don't charge any additional fees for using any payment method.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Can I change my payment method after ordering?</h3>
                  <p className="text-sm text-muted-foreground">Contact customer service immediately if you need to change payment methods.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}