import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Server, CreditCard, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SecurityPolicyPage() {
  const securityMeasures = [
    {
      title: "Data Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard protocols",
      icon: <Lock className="h-5 w-5" />,
      details: [
        "TLS 1.3 encryption for all web traffic",
        "AES-256 encryption for stored data",
        "End-to-end encryption for sensitive information"
      ]
    },
    {
      title: "Payment Security",
      description: "Your payment information is protected by multiple layers of security",
      icon: <CreditCard className="h-5 w-5" />,
      details: [
        "PCI DSS Level 1 compliance",
        "Tokenization of payment data",
        "Secure payment processing partners"
      ]
    },
    {
      title: "Access Controls",
      description: "Strict access controls limit who can view your personal information",
      icon: <Eye className="h-5 w-5" />,
      details: [
        "Role-based access control",
        "Multi-factor authentication for staff",
        "Regular access reviews and audits"
      ]
    },
    {
      title: "Infrastructure Security",
      description: "Our systems are protected by enterprise-grade security measures",
      icon: <Server className="h-5 w-5" />,
      details: [
        "24/7 security monitoring",
        "Regular security assessments",
        "Automated threat detection"
      ]
    }
  ];

  const userSecurity = [
    {
      title: "Strong Passwords",
      description: "Use unique, complex passwords for your account",
      tips: [
        "At least 12 characters long",
        "Mix of letters, numbers, and symbols",
        "Don't reuse passwords from other sites",
        "Consider using a password manager"
      ]
    },
    {
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security to your account",
      tips: [
        "Enable 2FA in your account settings",
        "Use an authenticator app when possible",
        "Keep backup codes in a safe place",
        "Don't share 2FA codes with anyone"
      ]
    },
    {
      title: "Safe Browsing",
      description: "Protect yourself while shopping online",
      tips: [
        "Always check the URL starts with https://",
        "Don't click suspicious links in emails",
        "Log out when using shared computers",
        "Keep your browser updated"
      ]
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
            <div className="p-3 bg-green-100 rounded-lg">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Security Policy</h1>
              <p className="text-muted-foreground">How we protect your data and transactions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Our Security Measures */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Security Measures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityMeasures.map((measure, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600">
                      {measure.icon}
                    </div>
                    <h3 className="text-lg">{measure.title}</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{measure.description}</p>
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <ul className="text-sm space-y-1">
                      {measure.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* User Security Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">How You Can Stay Secure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {userSecurity.map((tip, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{tip.description}</p>
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <ul className="text-sm space-y-1">
                      {tip.tips.map((tipItem, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {tipItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Incident Reporting */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Report Security Issues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">If you suspect a security issue:</h3>
                <ul className="text-sm space-y-2">
                  <li>• Change your password immediately</li>
                  <li>• Contact our security team</li>
                  <li>• Review your recent account activity</li>
                  <li>• Enable two-factor authentication</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Contact Security Team:</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> security@xcom.com</p>
                  <p><strong>Phone:</strong> +91 123 456 7890</p>
                  <p><strong>Response Time:</strong> Within 24 hours</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compliance */}
        <Card>
          <CardHeader>
            <CardTitle>Compliance & Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="p-4 border rounded-lg">
                <Shield className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <h3 className="font-medium">ISO 27001</h3>
                <p className="text-xs text-muted-foreground">Information Security</p>
              </div>
              <div className="p-4 border rounded-lg">
                <CreditCard className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <h3 className="font-medium">PCI DSS</h3>
                <p className="text-xs text-muted-foreground">Payment Security</p>
              </div>
              <div className="p-4 border rounded-lg">
                <Lock className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                <h3 className="font-medium">SOC 2</h3>
                <p className="text-xs text-muted-foreground">Security Controls</p>
              </div>
              <div className="p-4 border rounded-lg">
                <Eye className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                <h3 className="font-medium">GDPR</h3>
                <p className="text-xs text-muted-foreground">Data Protection</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}