"use client";

import Link from "next/link";
import { 
  Package, 
  CreditCard, 
  Shield, 
  Phone, 
  Mail, 
  MessageCircle, 
  FileText, 
  Truck, 
  RotateCcw, 
  User, 
  Settings, 
  HelpCircle,
  Search,
  Clock,
  Star,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function HelpPage() {
  const helpCategories = [
    {
      title: "Orders & Shipping",
      icon: <Package className="h-6 w-6" />,
      description: "Track orders, shipping info, and delivery updates",
      links: [
        { title: "Track Your Order", href: "/track-order", description: "Real-time order tracking" },
        { title: "Shipping Information", href: "/shipping", description: "Delivery options and timelines" },
        { title: "Order Issues", href: "/order-issues", description: "Problems with your order" },
        { title: "Delivery Problems", href: "/delivery-problems", description: "Missing or damaged packages" }
      ]
    },
    {
      title: "Returns & Refunds",
      icon: <RotateCcw className="h-6 w-6" />,
      description: "Return policy, refund process, and exchanges",
      links: [
        { title: "Return Policy", href: "/returns", description: "30-day return policy details" },
        { title: "Start a Return", href: "/start-return", description: "Initiate a product return" },
        { title: "Refund Status", href: "/refund-status", description: "Check your refund progress" },
        { title: "Exchange Items", href: "/exchanges", description: "Exchange for different size/color" }
      ]
    },
    {
      title: "Account & Payment",
      icon: <CreditCard className="h-6 w-6" />,
      description: "Account settings, payment methods, and billing",
      links: [
        { title: "Account Settings", href: "/account", description: "Manage your account details" },
        { title: "Payment Methods", href: "/account/payment", description: "Add or update payment options" },
        { title: "Billing Issues", href: "/billing-issues", description: "Problems with charges" },
        { title: "Order History", href: "/orders", description: "View past purchases" }
      ]
    },
    {
      title: "Product Information",
      icon: <FileText className="h-6 w-6" />,
      description: "Product details, specifications, and availability",
      links: [
        { title: "Product Specifications", href: "/product-specs", description: "Detailed product information" },
        { title: "Size Guides", href: "/size-guide", description: "Sizing charts and fit guides" },
        { title: "Product Availability", href: "/availability", description: "Stock and restock information" },
        { title: "Product Reviews", href: "/reviews-help", description: "How to write and read reviews" }
      ]
    },
    {
      title: "Technical Support",
      icon: <Settings className="h-6 w-6" />,
      description: "Website issues, app problems, and technical help",
      links: [
        { title: "Website Issues", href: "/website-issues", description: "Problems using our website" },
        { title: "Mobile App Help", href: "/app-help", description: "Mobile app troubleshooting" },
        { title: "Login Problems", href: "/login-help", description: "Can't access your account" },
        { title: "Browser Compatibility", href: "/browser-help", description: "Supported browsers and settings" }
      ]
    },
    {
      title: "Policies & Legal",
      icon: <Shield className="h-6 w-6" />,
      description: "Terms, privacy policy, and legal information",
      links: [
        { title: "Privacy Policy", href: "/privacy", description: "How we protect your data" },
        { title: "Terms & Conditions", href: "/terms", description: "Terms of service" },
        { title: "Warranty Information", href: "/warranty", description: "Product warranty details" },
        { title: "Security Policy", href: "/security-policy", description: "How we keep you safe" }
      ]
    }
  ];

  const quickActions = [
    {
      title: "Track an Order",
      description: "Get real-time updates on your order status",
      icon: <Package className="h-5 w-5" />,
      href: "/track-order",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Start a Return",
      description: "Return an item from a recent purchase",
      icon: <RotateCcw className="h-5 w-5" />,
      href: "/start-return",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Contact Support",
      description: "Get help from our customer service team",
      icon: <MessageCircle className="h-5 w-5" />,
      href: "/contact",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Check Refund",
      description: "See the status of your refund request",
      icon: <CreditCard className="h-5 w-5" />,
      href: "/refund-status",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const contactMethods = [
    {
      title: "Live Chat",
      description: "Chat with our support team",
      availability: "24/7 Available",
      icon: <MessageCircle className="h-6 w-6" />,
      action: "Start Chat",
      color: "bg-blue-600"
    },
    {
      title: "Phone Support",
      description: "+91 123 456 7890",
      availability: "Mon-Fri 9AM-6PM",
      icon: <Phone className="h-6 w-6" />,
      action: "Call Now",
      color: "bg-green-600"
    },
    {
      title: "Email Support",
      description: "support@xcom.com",
      availability: "24-48 hour response",
      icon: <Mail className="h-6 w-6" />,
      action: "Send Email",
      color: "bg-purple-600"
    }
  ];

  const popularTopics = [
    "How to track my order",
    "Return policy and process",
    "Payment methods accepted",
    "Shipping costs and delivery time",
    "How to cancel an order",
    "Product warranty information",
    "Account registration issues",
    "Size guide and fitting"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <HelpCircle className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">How can we help you?</h1>
            <p className="text-muted-foreground mb-6">
              Find answers to your questions or get in touch with our support team
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search for help topics..." 
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className={`p-3 rounded-lg w-fit mb-3 ${action.color}`}>
                      {action.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Help Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse Help Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg">{category.title}</h3>
                      <p className="text-sm text-muted-foreground font-normal">
                        {category.description}
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.links.map((link, linkIndex) => (
                      <Link 
                        key={linkIndex} 
                        href={link.href}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div>
                          <h4 className="font-medium text-sm group-hover:text-blue-600">
                            {link.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {link.description}
                          </p>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-blue-600" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popular Help Topics</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {popularTopics.map((topic, index) => (
                  <Link 
                    key={index}
                    href={`/help/search?q=${encodeURIComponent(topic)}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <HelpCircle className="h-4 w-4 text-muted-foreground group-hover:text-blue-600" />
                    <span className="text-sm group-hover:text-blue-600">{topic}</span>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Support */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Contact Our Support Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className={`p-4 rounded-full w-fit mx-auto mb-4 ${method.color} text-white`}>
                    {method.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{method.title}</h3>
                  <p className="text-sm mb-1">{method.description}</p>
                  <p className="text-xs text-muted-foreground mb-4">{method.availability}</p>
                  <Button className="w-full">{method.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <Card>
          <CardHeader>
            <CardTitle>Additional Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="p-3 bg-yellow-100 rounded-full w-fit mx-auto mb-3">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold mb-2">Community Forum</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Connect with other customers and share experiences
                </p>
                <Button variant="outline" size="sm">Visit Forum</Button>
              </div>
              <div className="text-center">
                <div className="p-3 bg-green-100 rounded-full w-fit mx-auto mb-3">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">User Guides</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Step-by-step guides for using our platform
                </p>
                <Button variant="outline" size="sm">View Guides</Button>
              </div>
              <div className="text-center">
                <div className="p-3 bg-purple-100 rounded-full w-fit mx-auto mb-3">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Service Status</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Check current system status and maintenance updates
                </p>
                <Button variant="outline" size="sm">Check Status</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}