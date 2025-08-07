"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Phone, Mail, MessageCircle, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactMethods = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "Available 24/7",
      icon: <MessageCircle className="h-6 w-6" />,
      action: "Start Chat",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our customer service",
      availability: "Mon-Fri 9AM-6PM IST",
      icon: <Phone className="h-6 w-6" />,
      action: "Call +91 123 456 7890",
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "24-48 hour response time",
      icon: <Mail className="h-6 w-6" />,
      action: "Send Email",
      color: "bg-purple-600 hover:bg-purple-700"
    }
  ];

  const officeLocations = [
    {
      city: "Mumbai (Headquarters)",
      address: "123 Commerce Street, Business District",
      postal: "Mumbai, Maharashtra 400001",
      phone: "+91 123 456 7890",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    },
    {
      city: "Delhi",
      address: "456 Tech Park, Sector 18",
      postal: "Gurugram, Haryana 122015",
      phone: "+91 987 654 3210",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    },
    {
      city: "Bangalore",
      address: "789 Innovation Hub, Electronic City",
      postal: "Bangalore, Karnataka 560100",
      phone: "+91 555 123 4567",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    }
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
        title: "Message sent successfully!",
        description: "We'll get back to you within 24-48 hours.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: ""
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
            <Link href="/help" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Help Center
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-lg">
              <MessageCircle className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Contact Us</h1>
              <p className="text-muted-foreground">We're here to help you with any questions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="p-4 bg-gray-100 rounded-full w-fit mx-auto mb-4">
                  {method.icon}
                </div>
                <h3 className="font-semibold mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                <p className="text-xs text-muted-foreground mb-4">{method.availability}</p>
                <Button className={`w-full ${method.color}`}>
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Category</label>
                  <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="order">Order Issues</SelectItem>
                      <SelectItem value="shipping">Shipping & Delivery</SelectItem>
                      <SelectItem value="returns">Returns & Refunds</SelectItem>
                      <SelectItem value="payment">Payment Issues</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="product">Product Information</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Subject *</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief description of your inquiry"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please provide details about your inquiry..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Office Locations */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Our Offices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {officeLocations.map((office, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                      <h3 className="font-semibold mb-2">{office.city}</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>{office.address}</p>
                        <p>{office.postal}</p>
                        <p className="flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {office.phone}
                        </p>
                        <p className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {office.hours}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Help</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="/faq" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <h3 className="font-medium text-sm">Frequently Asked Questions</h3>
                    <p className="text-xs text-muted-foreground">Find quick answers to common questions</p>
                  </Link>
                  <Link href="/track-order" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <h3 className="font-medium text-sm">Track Your Order</h3>
                    <p className="text-xs text-muted-foreground">Get real-time updates on your order</p>
                  </Link>
                  <Link href="/returns" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <h3 className="font-medium text-sm">Returns & Refunds</h3>
                    <p className="text-xs text-muted-foreground">Learn about our return policy</p>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Response Time Info */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Response Times</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium">Live Chat</p>
                  <p className="text-muted-foreground">Instant response</p>
                </div>
                <div>
                  <p className="font-medium">Phone Support</p>
                  <p className="text-muted-foreground">Immediate assistance</p>
                </div>
                <div>
                  <p className="font-medium">Email Support</p>
                  <p className="text-muted-foreground">24-48 hours</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}