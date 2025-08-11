"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, UserPlus, Mail, AlertTriangle, CheckCircle, Eye, EyeOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function AccountRegistrationIssuesPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const commonIssues = [
    {
      issue: "Email Already Exists",
      description: "The email address is already registered",
      solution: "Try logging in instead or use password reset if you forgot your password",
      icon: <Mail className="h-5 w-5" />
    },
    {
      issue: "Weak Password",
      description: "Password doesn't meet security requirements",
      solution: "Use at least 8 characters with uppercase, lowercase, numbers, and symbols",
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      issue: "Email Verification",
      description: "Haven't received verification email",
      solution: "Check spam folder or request a new verification email",
      icon: <Mail className="h-5 w-5" />
    },
    {
      issue: "Form Errors",
      description: "Registration form showing validation errors",
      solution: "Ensure all required fields are filled correctly and try again",
      icon: <AlertTriangle className="h-5 w-5" />
    }
  ];

  const passwordRequirements = [
    "At least 8 characters long",
    "Contains uppercase letters (A-Z)",
    "Contains lowercase letters (a-z)", 
    "Contains numbers (0-9)",
    "Contains special characters (!@#$%^&*)"
  ];

  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate account creation
    setTimeout(() => {
      toast({
        title: "Account created successfully!",
        description: "Welcome to Xcom! You can now start shopping.",
      });
      setIsLoading(false);
    }, 2000);
  };

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
            <div className="p-3 bg-blue-100 rounded-lg">
              <UserPlus className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Account Registration Issues</h1>
              <p className="text-muted-foreground">Get help creating your Xcom account</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Quick Account Creation */}
          <Card className="mb-8 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle>Create Account Now</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreateAccount} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Email Address</label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create a strong password"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Common Issues */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Common Registration Issues</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonIssues.map((issue, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-red-100 rounded-lg text-red-600">
                        {issue.icon}
                      </div>
                      {issue.issue}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{issue.description}</p>
                    <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                      <p className="text-sm text-blue-800">{issue.solution}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Password Requirements */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Password Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Your password must include:</h3>
                  <ul className="space-y-2">
                    {passwordRequirements.map((req, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Password Tips:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Use a unique password you don't use elsewhere</li>
                    <li>• Consider using a password manager</li>
                    <li>• Avoid personal information like birthdays</li>
                    <li>• Make it memorable but secure</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Troubleshooting */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Still Having Issues?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    If you're still unable to create an account, try these steps:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Clear your browser cache and cookies</li>
                    <li>• Try a different browser or device</li>
                    <li>• Disable browser extensions temporarily</li>
                    <li>• Check if JavaScript is enabled</li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Alternative Options</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/login-help">Login Help</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/privacy-settings">Privacy Settings</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/technical-support">Technical Support</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}