import Link from "next/link";
import { ArrowLeft, FileText, Play, Download, BookOpen, Video, HelpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function UserGuidesPage() {
  const guideCategories = [
    {
      title: "Getting Started",
      description: "New to our platform? Start here",
      guides: [
        { title: "Creating Your Account", type: "text", duration: "5 min read" },
        { title: "First Purchase Guide", type: "video", duration: "8 min watch" },
        { title: "Setting Up Your Profile", type: "text", duration: "3 min read" }
      ],
      icon: <BookOpen className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Shopping Guides",
      description: "Make the most of your shopping experience",
      guides: [
        { title: "How to Find the Best Deals", type: "text", duration: "7 min read" },
        { title: "Using Filters and Search", type: "video", duration: "6 min watch" },
        { title: "Comparing Products", type: "text", duration: "4 min read" }
      ],
      icon: <HelpCircle className="h-5 w-5" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Account Management",
      description: "Manage your account settings and preferences",
      guides: [
        { title: "Managing Payment Methods", type: "text", duration: "5 min read" },
        { title: "Address Book Setup", type: "video", duration: "4 min watch" },
        { title: "Privacy Settings", type: "text", duration: "6 min read" }
      ],
      icon: <FileText className="h-5 w-5" />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Orders & Returns",
      description: "Everything about orders, shipping, and returns",
      guides: [
        { title: "Tracking Your Orders", type: "video", duration: "5 min watch" },
        { title: "Return Process Guide", type: "text", duration: "8 min read" },
        { title: "Exchange Instructions", type: "text", duration: "6 min read" }
      ],
      icon: <Download className="h-5 w-5" />,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const popularGuides = [
    {
      title: "Complete Shopping Guide for Beginners",
      description: "Everything you need to know to start shopping with confidence",
      type: "video",
      duration: "15 min watch",
      views: "12.5K views",
      rating: 4.8
    },
    {
      title: "How to Get the Best Deals and Discounts",
      description: "Tips and tricks to save money on every purchase",
      type: "text",
      duration: "10 min read",
      views: "8.2K views",
      rating: 4.9
    },
    {
      title: "Returns and Refunds Made Easy",
      description: "Step-by-step guide to hassle-free returns",
      type: "video",
      duration: "8 min watch",
      views: "6.7K views",
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/help" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Help Center
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">User Guides</h1>
              <p className="text-muted-foreground">Step-by-step guides to help you get the most out of our platform</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Popular Guides */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popular Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularGuides.map((guide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {guide.type === 'video' ? (
                      <Play className="h-4 w-4 text-red-600" />
                    ) : (
                      <FileText className="h-4 w-4 text-blue-600" />
                    )}
                    <Badge variant="outline" className="text-xs">
                      {guide.type === 'video' ? 'Video' : 'Article'}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2">{guide.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{guide.duration}</span>
                    <span>{guide.views}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`text-xs ${
                            i < Math.floor(guide.rating) ? 'text-yellow-500' : 'text-gray-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">({guide.rating})</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Guide Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guideCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg">{category.title}</h3>
                      <p className="text-sm text-muted-foreground font-normal">{category.description}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.guides.map((guide, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center gap-3">
                          {guide.type === 'video' ? (
                            <Play className="h-4 w-4 text-red-600" />
                          ) : (
                            <FileText className="h-4 w-4 text-blue-600" />
                          )}
                          <span className="text-sm font-medium">{guide.title}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{guide.duration}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Download Guides */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Downloadable Guides
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <FileText className="h-5 w-5 text-blue-600" />
                <div className="flex-1">
                  <h3 className="font-medium text-sm">Complete User Manual</h3>
                  <p className="text-xs text-muted-foreground">PDF • 2.5 MB</p>
                </div>
                <Button size="sm" variant="outline">Download</Button>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <FileText className="h-5 w-5 text-green-600" />
                <div className="flex-1">
                  <h3 className="font-medium text-sm">Quick Start Guide</h3>
                  <p className="text-xs text-muted-foreground">PDF • 1.2 MB</p>
                </div>
                <Button size="sm" variant="outline">Download</Button>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <FileText className="h-5 w-5 text-purple-600" />
                <div className="flex-1">
                  <h3 className="font-medium text-sm">Shopping Tips Checklist</h3>
                  <p className="text-xs text-muted-foreground">PDF • 800 KB</p>
                </div>
                <Button size="sm" variant="outline">Download</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}