"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Bug, Upload, Send, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function ReportBugPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    priority: "",
    description: "",
    stepsToReproduce: "",
    expectedBehavior: "",
    actualBehavior: "",
    browserInfo: "",
    deviceInfo: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const bugCategories = [
    "Website functionality",
    "Mobile app",
    "Payment processing", 
    "Account/login issues",
    "Search functionality",
    "Product pages",
    "Checkout process",
    "Performance issues",
    "Visual/display issues",
    "Other"
  ];

  const priorityLevels = [
    { value: "low", label: "Low - Minor issue, workaround available" },
    { value: "medium", label: "Medium - Affects functionality but not critical" },
    { value: "high", label: "High - Major functionality broken" },
    { value: "critical", label: "Critical - Site unusable or security issue" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Bug report submitted!",
        description: "Thank you for helping us improve. We'll investigate this issue.",
      });
      setFormData({
        title: "",
        category: "",
        priority: "",
        description: "",
        stepsToReproduce: "",
        expectedBehavior: "",
        actualBehavior: "",
        browserInfo: "",
        deviceInfo: ""
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/technical-support" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Technical Support
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-red-100 rounded-lg">
              <Bug className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Report a Bug</h1>
              <p className="text-muted-foreground">Help us improve by reporting technical issues</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Important Notice */}
          <Card className="mb-8 border-orange-200 bg-orange-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-orange-800 mb-2">Before Reporting a Bug</h3>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Try refreshing the page or clearing your browser cache</li>
                    <li>• Check if the issue occurs in a different browser</li>
                    <li>• Ensure you have a stable internet connection</li>
                    <li>• Check our <Link href="/system-status" className="underline">system status page</Link> for known issues</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bug Report Form */}
          <Card>
            <CardHeader>
              <CardTitle>Bug Report Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Bug Title *</label>
                    <Input
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Brief description of the issue"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Category *</label>
                    <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {bugCategories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Priority Level *</label>
                  <Select value={formData.priority} onValueChange={(value) => setFormData(prev => ({ ...prev, priority: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      {priorityLevels.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          {level.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Bug Description *</label>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe the bug in detail..."
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Steps to Reproduce *</label>
                  <Textarea
                    name="stepsToReproduce"
                    value={formData.stepsToReproduce}
                    onChange={handleInputChange}
                    placeholder="1. Go to...&#10;2. Click on...&#10;3. See error..."
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Expected Behavior</label>
                    <Textarea
                      name="expectedBehavior"
                      value={formData.expectedBehavior}
                      onChange={handleInputChange}
                      placeholder="What should have happened?"
                      className="min-h-[80px]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Actual Behavior</label>
                    <Textarea
                      name="actualBehavior"
                      value={formData.actualBehavior}
                      onChange={handleInputChange}
                      placeholder="What actually happened?"
                      className="min-h-[80px]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Browser Information</label>
                    <Input
                      name="browserInfo"
                      value={formData.browserInfo}
                      onChange={handleInputChange}
                      placeholder="e.g., Chrome 120.0, Safari 17.0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Device Information</label>
                    <Input
                      name="deviceInfo"
                      value={formData.deviceInfo}
                      onChange={handleInputChange}
                      placeholder="e.g., iPhone 15, Windows 11, MacBook Pro"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Screenshots (Optional)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drag and drop screenshots here, or click to browse
                    </p>
                    <Button variant="outline" size="sm">
                      Choose Files
                    </Button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting || !formData.title || !formData.category || !formData.description}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting Bug Report...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Bug Report
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* What Happens Next */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>What Happens Next?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                    1
                  </div>
                  <h3 className="font-semibold mb-1">Acknowledgment</h3>
                  <p className="text-xs text-muted-foreground">You'll receive a confirmation email with ticket number</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                    2
                  </div>
                  <h3 className="font-semibold mb-1">Investigation</h3>
                  <p className="text-xs text-muted-foreground">Our technical team will investigate the issue</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                    3
                  </div>
                  <h3 className="font-semibold mb-1">Resolution</h3>
                  <p className="text-xs text-muted-foreground">We'll work on fixing the bug</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                    4
                  </div>
                  <h3 className="font-semibold mb-1">Update</h3>
                  <p className="text-xs text-muted-foreground">You'll be notified when the bug is fixed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}