"use client";

import Link from "next/link";
import { ArrowLeft, Lock, Mail, Key, Smartphone, HelpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function LoginHelpPage() {
  const [email, setEmail] = useState("");

  const loginIssues = [
    {
      title: "Forgot Password",
      description: "Reset your password to regain access to your account",
      icon: <Lock className="h-5 w-5" />,
      action: "Reset Password"
    },
    {
      title: "Account Locked",
      description: "Your account has been temporarily locked for security",
      icon: <Key className="h-5 w-5" />,
      action: "Unlock Account"
    },
    {
      title: "Email Not Recognized",
      description: "The email address you entered is not in our system",
      icon: <Mail className="h-5 w-5" />,
      action: "Find Account"
    },
    {
      title: "Two-Factor Issues",
      description: "Problems with 2FA codes or authentication app",
      icon: <Smartphone className="h-5 w-5" />,
      action: "Reset 2FA"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/technical-support" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Technical Support
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Lock className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Login Help</h1>
              <p className="text-muted-foreground">Get help accessing your account</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Password Reset */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Password Reset</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
              />
              <Button>Send Reset Link</Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              We'll send you a link to reset your password
            </p>
          </CardContent>
        </Card>

        {/* Login Issues */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {loginIssues.map((issue, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {issue.icon}
                  </div>
                  <h3 className="text-lg">{issue.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{issue.description}</p>
                <Button className="w-full">{issue.action}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}