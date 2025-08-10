import Link from "next/link";
import { ArrowLeft, Cookie, Settings, Eye, BarChart, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      type: "Essential Cookies",
      purpose: "Required for basic website functionality",
      icon: <Settings className="h-5 w-5" />,
      canDisable: false,
      examples: [
        "Shopping cart functionality",
        "User authentication",
        "Security features",
        "Language preferences"
      ],
      retention: "Session or until logout"
    },
    {
      type: "Analytics Cookies",
      purpose: "Help us understand how visitors use our website",
      icon: <BarChart className="h-5 w-5" />,
      canDisable: true,
      examples: [
        "Page views and traffic",
        "User behavior patterns",
        "Performance monitoring",
        "Error tracking"
      ],
      retention: "Up to 2 years"
    },
    {
      type: "Marketing Cookies",
      purpose: "Used to deliver personalized advertisements",
      icon: <Target className="h-5 w-5" />,
      canDisable: true,
      examples: [
        "Personalized ads",
        "Social media integration",
        "Retargeting campaigns",
        "Conversion tracking"
      ],
      retention: "Up to 1 year"
    },
    {
      type: "Preference Cookies",
      purpose: "Remember your choices and personalize your experience",
      icon: <Eye className="h-5 w-5" />,
      canDisable: true,
      examples: [
        "Theme preferences",
        "Language settings",
        "Currency selection",
        "Layout preferences"
      ],
      retention: "Up to 1 year"
    }
  ];

  const thirdPartyCookies = [
    {
      provider: "Google Analytics",
      purpose: "Website analytics and performance monitoring",
      cookies: ["_ga", "_gid", "_gat"],
      privacy: "https://policies.google.com/privacy"
    },
    {
      provider: "Facebook Pixel",
      purpose: "Social media integration and advertising",
      cookies: ["_fbp", "fr"],
      privacy: "https://www.facebook.com/privacy/explanation"
    },
    {
      provider: "Stripe",
      purpose: "Payment processing and fraud prevention",
      cookies: ["__stripe_mid", "__stripe_sid"],
      privacy: "https://stripe.com/privacy"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/legal-compliance" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Legal Compliance
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Cookie className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Cookie Policy</h1>
              <p className="text-muted-foreground">How we use cookies and similar technologies</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* What Are Cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What Are Cookies?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better browsing experience by remembering your preferences 
              and analyzing how you use our site.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 border rounded-lg text-center">
                <Cookie className="h-6 w-6 mx-auto mb-2 text-orange-600" />
                <h3 className="font-medium">First-Party Cookies</h3>
                <p className="text-xs text-muted-foreground">Set directly by our website</p>
              </div>
              <div className="p-3 border rounded-lg text-center">
                <Eye className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                <h3 className="font-medium">Third-Party Cookies</h3>
                <p className="text-xs text-muted-foreground">Set by external services we use</p>
              </div>
              <div className="p-3 border rounded-lg text-center">
                <Settings className="h-6 w-6 mx-auto mb-2 text-green-600" />
                <h3 className="font-medium">Session Cookies</h3>
                <p className="text-xs text-muted-foreground">Deleted when you close browser</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cookie Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Types of Cookies We Use</h2>
          <div className="space-y-6">
            {cookieTypes.map((cookie, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                        {cookie.icon}
                      </div>
                      {cookie.type}
                    </div>
                    <Badge className={cookie.canDisable ? "bg-blue-100 text-blue-800" : "bg-red-100 text-red-800"}>
                      {cookie.canDisable ? "Optional" : "Required"}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Purpose</h3>
                      <p className="text-sm text-muted-foreground mb-4">{cookie.purpose}</p>
                      <h3 className="font-semibold mb-2">Examples</h3>
                      <ul className="space-y-1">
                        {cookie.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1 h-1 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Data Retention</h3>
                      <p className="text-sm text-muted-foreground mb-4">{cookie.retention}</p>
                      <h3 className="font-semibold mb-2">Control Options</h3>
                      <p className="text-sm text-muted-foreground">
                        {cookie.canDisable 
                          ? "You can disable these cookies in your browser settings or our cookie preferences."
                          : "These cookies are essential for website functionality and cannot be disabled."
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Third-Party Cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Third-Party Cookies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {thirdPartyCookies.map((provider, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{provider.provider}</h3>
                    <a 
                      href={provider.privacy} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{provider.purpose}</p>
                  <div className="flex flex-wrap gap-2">
                    {provider.cookies.map((cookie, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs font-mono">
                        {cookie}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cookie Management */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Manage Your Cookie Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  You can control which cookies we use through your browser settings or our cookie preference center.
                </p>
                <div className="space-y-2">
                  <Button className="w-full">
                    Cookie Preference Center
                  </Button>
                  <Button variant="outline" className="w-full">
                    Browser Cookie Settings
                  </Button>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-xs text-yellow-800">
                    <strong>Note:</strong> Disabling certain cookies may affect website functionality and your user experience.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us About Cookies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  If you have questions about our use of cookies or this policy, please contact us.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Privacy Team:</strong> privacy@xcom.com</p>
                  <p><strong>Data Protection Officer:</strong> dpo@xcom.com</p>
                  <p><strong>Phone:</strong> +91 123 456 7890</p>
                  <p><strong>Address:</strong> 123 Commerce Street, Mumbai 400001</p>
                </div>
                <Button variant="outline" className="w-full">
                  Contact Privacy Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}