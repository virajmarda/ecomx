"use client";

import Link from "next/link";
import { ArrowLeft, Shield, Lock, Key, Smartphone, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AccountSecurityPage() {
  const securityTopics = [
    {
      title: "Change Password",
      description: "Update your account password for better security",
      icon: <Lock className="h-5 w-5" />,
      action: "Change Password"
    },
    {
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security to your account",
      icon: <Smartphone className="h-5 w-5" />,
      action: "Enable 2FA"
    },
    {
      title: "Security Alerts",
      description: "Get notified of suspicious account activity",
      icon: <AlertTriangle className="h-5 w-5" />,
      action: "Manage Alerts"
    },
    {
      title: "Login History",
      description: "Review recent login activity on your account",
      icon: <Key className="h-5 w-5" />,
      action: "View History"
    },
    {
      title: "Trusted Devices",
      description: "Manage devices that can access your account",
      icon: <CheckCircle className="h-5 w-5" />,
      action: "Manage Devices"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/account-payment" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Account & Payment
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-lg">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Account Security</h1>
              <p className="text-muted-foreground">Protect your account and personal information</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityTopics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg text-green-600">
                    {topic.icon}
                  </div>
                  <h3 className="text-lg">{topic.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{topic.description}</p>
                <Button className="w-full">{topic.action}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}