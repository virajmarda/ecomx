"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Eye, Shield, Cookie, Bell, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

export default function PrivacySettingsPage() {
  const [settings, setSettings] = useState({
    dataCollection: true,
    personalizedAds: false,
    analyticsTracking: true,
    marketingEmails: false,
    thirdPartySharing: false,
    cookieConsent: true,
    locationTracking: false,
    behaviorTracking: true
  });

  const { toast } = useToast();

  const privacyControls = [
    {
      id: "dataCollection",
      title: "Data Collection",
      description: "Allow us to collect data to improve your shopping experience",
      icon: <Eye className="h-5 w-5" />,
      required: false
    },
    {
      id: "personalizedAds",
      title: "Personalized Advertising",
      description: "Show you ads based on your browsing and purchase history",
      icon: <Bell className="h-5 w-5" />,
      required: false
    },
    {
      id: "analyticsTracking",
      title: "Analytics Tracking",
      description: "Help us understand how you use our website to improve it",
      icon: <Shield className="h-5 w-5" />,
      required: false
    },
    {
      id: "marketingEmails",
      title: "Marketing Communications",
      description: "Receive promotional emails about deals and new products",
      icon: <Bell className="h-5 w-5" />,
      required: false
    },
    {
      id: "thirdPartySharing",
      title: "Third-Party Data Sharing",
      description: "Share anonymized data with trusted partners for analytics",
      icon: <Shield className="h-5 w-5" />,
      required: false
    },
    {
      id: "cookieConsent",
      title: "Cookie Consent",
      description: "Allow cookies for essential website functionality",
      icon: <Cookie className="h-5 w-5" />,
      required: true
    },
    {
      id: "locationTracking",
      title: "Location Services",
      description: "Use your location for delivery estimates and local offers",
      icon: <Eye className="h-5 w-5" />,
      required: false
    },
    {
      id: "behaviorTracking",
      title: "Behavioral Analytics",
      description: "Track your browsing patterns to recommend relevant products",
      icon: <Shield className="h-5 w-5" />,
      required: false
    }
  ];

  const handleToggle = (settingId: string, value: boolean) => {
    setSettings(prev => ({ ...prev, [settingId]: value }));
    toast({
      title: "Privacy setting updated",
      description: "Your preference has been saved.",
    });
  };

  const handleDownloadData = () => {
    toast({
      title: "Data export initiated",
      description: "We'll email you a download link within 24 hours.",
    });
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Account deletion request received",
      description: "We'll process your request within 30 days as required by law.",
      variant: "destructive"
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/account-payment" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Account & Payment
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Eye className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Privacy Settings</h1>
              <p className="text-muted-foreground">Control your data and privacy preferences</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Privacy Controls */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Privacy Controls</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {privacyControls.map((control) => (
                  <div key={control.id} className="flex items-start justify-between py-4 border-b last:border-b-0">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="p-2 bg-muted rounded-lg mt-1">
                        {control.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium">{control.title}</h3>
                          {control.required && (
                            <Badge variant="outline" className="text-xs">Required</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{control.description}</p>
                      </div>
                    </div>
                    <Switch
                      checked={settings[control.id as keyof typeof settings]}
                      onCheckedChange={(checked) => handleToggle(control.id, checked)}
                      disabled={control.required}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Data Rights */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Data Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Button onClick={handleDownloadData} variant="outline" className="h-auto p-4">
                  <div className="flex items-center gap-3">
                    <Download className="h-5 w-5 text-blue-600" />
                    <div className="text-left">
                      <h3 className="font-medium">Download My Data</h3>
                      <p className="text-xs text-muted-foreground">Get a copy of all your personal data</p>
                    </div>
                  </div>
                </Button>
                <Button onClick={handleDeleteAccount} variant="outline" className="h-auto p-4">
                  <div className="flex items-center gap-3">
                    <Trash2 className="h-5 w-5 text-red-600" />
                    <div className="text-left">
                      <h3 className="font-medium">Delete My Account</h3>
                      <p className="text-xs text-muted-foreground">Permanently delete your account and data</p>
                    </div>
                  </div>
                </Button>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Under GDPR and other privacy laws, you have the right to:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-1 text-sm">
                    <li>• Access your personal data</li>
                    <li>• Correct inaccurate information</li>
                    <li>• Delete your personal data</li>
                  </ul>
                  <ul className="space-y-1 text-sm">
                    <li>• Port your data to another service</li>
                    <li>• Object to data processing</li>
                    <li>• Restrict how we use your data</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookie Management */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="h-5 w-5" />
                Cookie Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Manage how we use cookies and similar technologies on our website.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-3 border rounded-lg">
                    <h3 className="font-medium mb-1">Essential Cookies</h3>
                    <p className="text-xs text-muted-foreground mb-2">Required for website functionality</p>
                    <Switch checked={true} disabled />
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h3 className="font-medium mb-1">Analytics Cookies</h3>
                    <p className="text-xs text-muted-foreground mb-2">Help us improve our website</p>
                    <Switch 
                      checked={settings.analyticsTracking}
                      onCheckedChange={(checked) => handleToggle('analyticsTracking', checked)}
                    />
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h3 className="font-medium mb-1">Marketing Cookies</h3>
                    <p className="text-xs text-muted-foreground mb-2">For personalized advertising</p>
                    <Switch 
                      checked={settings.personalizedAds}
                      onCheckedChange={(checked) => handleToggle('personalizedAds', checked)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Privacy Team */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy Questions?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Contact Our Privacy Team</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Email:</strong> privacy@xcom.com</p>
                    <p><strong>Phone:</strong> +91 123 456 7890</p>
                    <p><strong>Response Time:</strong> Within 30 days</p>
                    <p><strong>Address:</strong> Data Protection Officer, Xcom Technologies</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Common Privacy Requests</h3>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full">
                      Request Data Copy
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      Correct My Information
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      Opt-out of Marketing
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      File Privacy Complaint
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}