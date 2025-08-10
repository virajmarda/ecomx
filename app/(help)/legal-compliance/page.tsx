import Link from "next/link";
import { ArrowLeft, Scale, Shield, FileText, Globe, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LegalCompliancePage() {
  const complianceStandards = [
    {
      standard: "GDPR",
      fullName: "General Data Protection Regulation",
      region: "European Union",
      description: "Comprehensive data protection and privacy regulation",
      status: "Compliant",
      icon: <Shield className="h-5 w-5" />
    },
    {
      standard: "CCPA",
      fullName: "California Consumer Privacy Act", 
      region: "California, USA",
      description: "Consumer privacy rights and data protection",
      status: "Compliant",
      icon: <FileText className="h-5 w-5" />
    },
    {
      standard: "PCI DSS",
      fullName: "Payment Card Industry Data Security Standard",
      region: "Global",
      description: "Security standards for payment card data",
      status: "Level 1 Certified",
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      standard: "SOC 2",
      fullName: "Service Organization Control 2",
      region: "Global",
      description: "Security, availability, and confidentiality controls",
      status: "Type II Certified",
      icon: <Shield className="h-5 w-5" />
    }
  ];

  const legalDocuments = [
    {
      title: "Terms of Service",
      description: "Legal terms governing the use of our platform",
      lastUpdated: "November 2024",
      link: "/terms"
    },
    {
      title: "Privacy Policy",
      description: "How we collect, use, and protect your personal data",
      lastUpdated: "November 2024", 
      link: "/privacy"
    },
    {
      title: "Cookie Policy",
      description: "Information about cookies and tracking technologies",
      lastUpdated: "October 2024",
      link: "/cookie-policy"
    },
    {
      title: "Accessibility Statement",
      description: "Our commitment to digital accessibility",
      lastUpdated: "September 2024",
      link: "/accessibility"
    }
  ];

  const dataRights = [
    {
      right: "Right to Access",
      description: "Request a copy of your personal data we hold"
    },
    {
      right: "Right to Rectification", 
      description: "Correct inaccurate or incomplete personal data"
    },
    {
      right: "Right to Erasure",
      description: "Request deletion of your personal data"
    },
    {
      right: "Right to Portability",
      description: "Receive your data in a structured, machine-readable format"
    },
    {
      right: "Right to Object",
      description: "Object to processing of your personal data"
    },
    {
      right: "Right to Restrict",
      description: "Limit how we process your personal data"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
              <Scale className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Legal Compliance</h1>
              <p className="text-muted-foreground">Our regulatory compliance and legal standards</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Compliance Standards */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Compliance Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceStandards.map((standard, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {standard.icon}
                    </div>
                    <div>
                      <h3 className="text-lg">{standard.standard}</h3>
                      <Badge className="bg-green-100 text-green-800 mt-1">
                        {standard.status}
                      </Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">{standard.fullName}</h4>
                      <p className="text-sm text-muted-foreground">{standard.region}</p>
                    </div>
                    <p className="text-sm">{standard.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Legal Documents */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Legal Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalDocuments.map((doc, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">{doc.title}</h3>
                      <p className="text-sm text-muted-foreground">{doc.description}</p>
                    </div>
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">
                      Last updated: {doc.lastUpdated}
                    </p>
                    <Link href={doc.link}>
                      <Button size="sm" variant="outline">
                        Read Document
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Data Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Your Data Rights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {dataRights.map((right, index) => (
                <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-sm">{right.right}</h3>
                    <p className="text-xs text-muted-foreground">{right.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-2">Exercise Your Rights</h3>
              <p className="text-sm text-blue-800 mb-3">
                To exercise any of these rights, contact our Data Protection Officer at privacy@xcom.com
              </p>
              <Button size="sm">Contact Data Protection Officer</Button>
            </div>
          </CardContent>
        </Card>

        {/* Regulatory Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Business Registration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-medium">Company Name:</h4>
                  <p className="text-muted-foreground">Xcom Technologies Private Limited</p>
                </div>
                <div>
                  <h4 className="font-medium">Registration Number:</h4>
                  <p className="text-muted-foreground">CIN: U74999MH2020PTC123456</p>
                </div>
                <div>
                  <h4 className="font-medium">Registered Address:</h4>
                  <p className="text-muted-foreground">
                    123 Commerce Street, Business District<br />
                    Mumbai, Maharashtra 400001, India
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">GST Number:</h4>
                  <p className="text-muted-foreground">27ABCDE1234F1Z5</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compliance Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Legal Department</h4>
                  <p className="text-sm text-muted-foreground">legal@xcom.com</p>
                </div>
                <div>
                  <h4 className="font-medium">Data Protection Officer</h4>
                  <p className="text-sm text-muted-foreground">privacy@xcom.com</p>
                </div>
                <div>
                  <h4 className="font-medium">Compliance Officer</h4>
                  <p className="text-sm text-muted-foreground">compliance@xcom.com</p>
                </div>
                <div>
                  <h4 className="font-medium">Response Time</h4>
                  <p className="text-sm text-muted-foreground">Within 30 days as required by law</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}