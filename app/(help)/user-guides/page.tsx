import Link from "next/link";
import { ArrowLeft, BookOpen, Play, Download, FileText, Video, Clock, Star, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function UserGuidesPage() {
  const guideCategories = [
    {
      title: "Getting Started",
      description: "New to our platform? Start here",
      guides: [
        { 
          title: "Creating Your First Account", 
          type: "video", 
          duration: "5 min", 
          difficulty: "Beginner",
          views: "12.5K",
          rating: 4.9
        },
        { 
          title: "Your First Purchase Guide", 
          type: "text", 
          duration: "8 min read", 
          difficulty: "Beginner",
          views: "8.2K",
          rating: 4.8
        },
        { 
          title: "Setting Up Your Profile & Preferences", 
          type: "video", 
          duration: "6 min", 
          difficulty: "Beginner",
          views: "6.7K",
          rating: 4.7
        }
      ],
      icon: <BookOpen className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Shopping Mastery",
      description: "Advanced shopping tips and techniques",
      guides: [
        { 
          title: "Finding the Best Deals & Discounts", 
          type: "text", 
          duration: "12 min read", 
          difficulty: "Intermediate",
          views: "15.3K",
          rating: 4.9
        },
        { 
          title: "Using Advanced Search & Filters", 
          type: "video", 
          duration: "10 min", 
          difficulty: "Intermediate",
          views: "9.8K",
          rating: 4.6
        },
        { 
          title: "Product Comparison Techniques", 
          type: "text", 
          duration: "7 min read", 
          difficulty: "Intermediate",
          views: "7.1K",
          rating: 4.8
        }
      ],
      icon: <Star className="h-5 w-5" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Account Management",
      description: "Manage your account like a pro",
      guides: [
        { 
          title: "Managing Payment Methods Safely", 
          type: "text", 
          duration: "6 min read", 
          difficulty: "Beginner",
          views: "11.2K",
          rating: 4.7
        },
        { 
          title: "Address Book & Delivery Setup", 
          type: "video", 
          duration: "8 min", 
          difficulty: "Beginner",
          views: "5.9K",
          rating: 4.8
        },
        { 
          title: "Privacy & Security Settings", 
          type: "text", 
          duration: "10 min read", 
          difficulty: "Advanced",
          views: "4.3K",
          rating: 4.9
        }
      ],
      icon: <Users className="h-5 w-5" />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Orders & Support",
      description: "Everything about orders and getting help",
      guides: [
        { 
          title: "Complete Order Tracking Guide", 
          type: "video", 
          duration: "12 min", 
          difficulty: "Beginner",
          views: "18.7K",
          rating: 4.8
        },
        { 
          title: "Returns & Refunds Made Simple", 
          type: "text", 
          duration: "15 min read", 
          difficulty: "Beginner",
          views: "14.1K",
          rating: 4.9
        },
        { 
          title: "Getting Help When You Need It", 
          type: "video", 
          duration: "7 min", 
          difficulty: "Beginner",
          views: "6.8K",
          rating: 4.6
        }
      ],
      icon: <FileText className="h-5 w-5" />,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const featuredGuides = [
    {
      title: "Complete Beginner's Shopping Guide",
      description: "Everything you need to know to start shopping with confidence",
      type: "video",
      duration: "25 min watch",
      views: "45.2K views",
      rating: 4.9,
      thumbnail: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Master Guide to Deals and Discounts",
      description: "Advanced strategies to save money on every purchase",
      type: "text",
      duration: "18 min read",
      views: "32.1K views", 
      rating: 4.8,
      thumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Returns and Exchanges Masterclass",
      description: "Complete guide to hassle-free returns and exchanges",
      type: "video",
      duration: "15 min watch",
      views: "28.9K views",
      rating: 4.7,
      thumbnail: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const downloadableGuides = [
    {
      title: "Complete User Manual",
      description: "Comprehensive guide covering all platform features",
      format: "PDF",
      size: "2.5 MB",
      pages: "45 pages",
      downloads: "12.3K"
    },
    {
      title: "Quick Start Checklist",
      description: "Essential steps for new users",
      format: "PDF", 
      size: "1.2 MB",
      pages: "8 pages",
      downloads: "8.7K"
    },
    {
      title: "Shopping Tips & Tricks",
      description: "Pro tips for better shopping experience",
      format: "PDF",
      size: "1.8 MB", 
      pages: "22 pages",
      downloads: "15.6K"
    }
  ];

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
            <div className="p-3 bg-green-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">User Guides & Tutorials</h1>
              <p className="text-muted-foreground">Step-by-step guides to help you master our platform</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Featured Guides */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGuides.map((guide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                <div className="relative aspect-video">
                  <img 
                    src={guide.thumbnail} 
                    alt={guide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    {guide.type === 'video' ? (
                      <Play className="h-12 w-12 text-white" />
                    ) : (
                      <FileText className="h-12 w-12 text-white" />
                    )}
                  </div>
                  <Badge className="absolute top-2 right-2 bg-black/70 text-white">
                    {guide.type === 'video' ? 'Video' : 'Article'}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">{guide.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{guide.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{guide.duration}</span>
                    <span>{guide.views}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(guide.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                          }`}
                        />
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
        <div className="mb-12">
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
                          <div>
                            <h4 className="text-sm font-medium">{guide.title}</h4>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span>{guide.duration}</span>
                              <Badge variant="outline" className="text-xs">{guide.difficulty}</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="text-right text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            {guide.rating}
                          </div>
                          <div>{guide.views} views</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Downloadable Resources */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Downloadable Guides
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {downloadableGuides.map((guide, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{guide.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{guide.description}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <span>{guide.format} • {guide.size}</span>
                        <span>{guide.pages}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{guide.downloads} downloads</span>
                        <Button size="sm">Download</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Paths */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Recommended Learning Paths</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border rounded-lg">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">New User Path</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete beginner's journey from account creation to first purchase
                </p>
                <Badge variant="outline">4 guides • 30 min</Badge>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Smart Shopper Path</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn advanced techniques to save money and find the best products
                </p>
                <Badge variant="outline">6 guides • 45 min</Badge>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Power User Path</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Master all platform features and become a community expert
                </p>
                <Badge variant="outline">8 guides • 60 min</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Video Tutorials */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-5 w-5" />
              Video Tutorial Series
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4">Beginner Series</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Play className="h-5 w-5 text-red-600" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Episode 1: Getting Started</h4>
                      <p className="text-xs text-muted-foreground">5 min • 12.5K views</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Play className="h-5 w-5 text-red-600" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Episode 2: Your First Order</h4>
                      <p className="text-xs text-muted-foreground">8 min • 9.8K views</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Play className="h-5 w-5 text-red-600" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Episode 3: Account Setup</h4>
                      <p className="text-xs text-muted-foreground">6 min • 7.2K views</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Advanced Series</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Play className="h-5 w-5 text-red-600" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Advanced Search Techniques</h4>
                      <p className="text-xs text-muted-foreground">12 min • 6.1K views</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Play className="h-5 w-5 text-red-600" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Deal Hunting Strategies</h4>
                      <p className="text-xs text-muted-foreground">15 min • 8.9K views</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Play className="h-5 w-5 text-red-600" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Security Best Practices</h4>
                      <p className="text-xs text-muted-foreground">10 min • 4.5K views</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}