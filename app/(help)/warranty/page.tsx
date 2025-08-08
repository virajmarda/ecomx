import Link from "next/link";
import { ArrowLeft, Shield, Clock, FileText, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function WarrantyPage() {
  const warrantyCategories = [
    {
      category: "Electronics",
      period: "1-2 Years",
      coverage: "Manufacturing defects, hardware failures",
      exclusions: "Physical damage, water damage, misuse",
      color: "bg-blue-100 text-blue-800"
    },
    {
      category: "Appliances",
      period: "1-3 Years",
      coverage: "Parts and labor, electrical components",
      exclusions: "Normal wear, consumables, accidents",
      color: "bg-green-100 text-green-800"
    },
    {
      category: "Fashion",
      period: "30 Days",
      coverage: "Manufacturing defects, material flaws",
      exclusions: "Normal wear, washing damage, alterations",
      color: "bg-purple-100 text-purple-800"
    },
    {
      category: "Home & Kitchen",
      period: "6 Months - 1 Year",
      coverage: "Material defects, functionality issues",
      exclusions: "Breakage, misuse, normal wear",
      color: "bg-orange-100 text-orange-800"
    }
  ];

  const warrantyProcess = [
    {
      step: 1,
      title: "Check Warranty Status",
      description: "Verify your product is still under warranty"
    },
    {
      step: 2,
      title: "Contact Support",
      description: "Reach out to our warranty team with your order details"
    },
    {
      step: 3,
      title: "Assessment",
      description: "We'll evaluate your warranty claim"
    },
    {
      step: 4,
      title: "Resolution",
      description: "Repair, replacement, or refund as applicable"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/policies-legal" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Policies & Legal
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Warranty Information</h1>
              <p className="text-muted-foreground">Product warranties and coverage details</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Warranty Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Warranty Coverage by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {warrantyCategories.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{item.category}</span>
                    <Badge className={item.color}>{item.period}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-green-600 mb-1">Covered:</h4>
                      <p className="text-sm text-muted-foreground">{item.coverage}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-600 mb-1">Not Covered:</h4>
                      <p className="text-sm text-muted-foreground">{item.exclusions}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Warranty Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">How to Claim Warranty</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {warrantyProcess.map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Important Warranty Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">What You Need for Warranty Claims:</h3>
                <ul className="text-sm space-y-2">
                  <li>• Original purchase receipt or order number</li>
                  <li>• Product serial number (if applicable)</li>
                  <li>• Clear description of the issue</li>
                  <li>• Photos or videos of the problem</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Warranty Terms:</h3>
                <ul className="text-sm space-y-2">
                  <li>• Warranty starts from date of purchase</li>
                  <li>• Original purchaser only</li>
                  <li>• Product must be used as intended</li>
                  <li>• Some items may have extended warranties available</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Warranty Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <Phone className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                <h3 className="font-medium mb-1">Phone Support</h3>
                <p className="text-sm text-muted-foreground">+91 123 456 7890</p>
                <p className="text-xs text-muted-foreground">Mon-Fri 9AM-6PM</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <FileText className="h-6 w-6 mx-auto mb-2 text-green-600" />
                <h3 className="font-medium mb-1">Email Support</h3>
                <p className="text-sm text-muted-foreground">warranty@xcom.com</p>
                <p className="text-xs text-muted-foreground">24-48 hour response</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Clock className="h-6 w-6 mx-auto mb-2 text-orange-600" />
                <h3 className="font-medium mb-1">Online Form</h3>
                <p className="text-sm text-muted-foreground">Submit warranty claim</p>
                <p className="text-xs text-muted-foreground">Available 24/7</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}