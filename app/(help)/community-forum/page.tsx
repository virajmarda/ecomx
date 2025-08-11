"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Users, MessageCircle, Star, TrendingUp, Clock, ThumbsUp, Eye, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CommunityForumPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const forumStats = [
    { label: "Active Members", value: "25.8K", color: "text-blue-600" },
    { label: "Total Posts", value: "156K", color: "text-green-600" },
    { label: "Topics Discussed", value: "12.4K", color: "text-purple-600" },
    { label: "Expert Contributors", value: "1.2K", color: "text-orange-600" }
  ];

  const forumCategories = [
    {
      title: "General Discussion",
      description: "Share experiences and connect with other customers",
      posts: 1234,
      members: 5678,
      icon: <MessageCircle className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-600",
      lastPost: "2 hours ago"
    },
    {
      title: "Product Reviews & Recommendations",
      description: "Share and read detailed product reviews",
      posts: 892,
      members: 3456,
      icon: <Star className="h-5 w-5" />,
      color: "bg-yellow-100 text-yellow-600",
      lastPost: "1 hour ago"
    },
    {
      title: "Shopping Tips & Deals",
      description: "Get advice on finding the best deals and products",
      posts: 567,
      members: 2345,
      icon: <TrendingUp className="h-5 w-5" />,
      color: "bg-green-100 text-green-600",
      lastPost: "30 minutes ago"
    },
    {
      title: "Technical Help & Support",
      description: "Get help from the community with technical issues",
      posts: 345,
      members: 1234,
      icon: <Users className="h-5 w-5" />,
      color: "bg-purple-100 text-purple-600",
      lastPost: "45 minutes ago"
    },
    {
      title: "New Member Introductions",
      description: "Welcome new members to our community",
      posts: 234,
      members: 890,
      icon: <Users className="h-5 w-5" />,
      color: "bg-pink-100 text-pink-600",
      lastPost: "3 hours ago"
    },
    {
      title: "Feature Requests & Feedback",
      description: "Suggest improvements and share feedback",
      posts: 156,
      members: 567,
      icon: <MessageCircle className="h-5 w-5" />,
      color: "bg-indigo-100 text-indigo-600",
      lastPost: "1 day ago"
    }
  ];

  const recentPosts = [
    {
      title: "Best wireless headphones under $200?",
      author: "TechLover123",
      replies: 15,
      views: 234,
      time: "2 hours ago",
      category: "Product Reviews",
      solved: false,
      featured: true
    },
    {
      title: "How to get the best deals during sales?",
      author: "BargainHunter",
      replies: 8,
      views: 156,
      time: "4 hours ago",
      category: "Shopping Tips",
      solved: true,
      featured: false
    },
    {
      title: "Website not loading on mobile - SOLVED",
      author: "MobileUser",
      replies: 3,
      views: 89,
      time: "6 hours ago",
      category: "Technical Help",
      solved: true,
      featured: false
    },
    {
      title: "Great customer service experience!",
      author: "HappyCustomer",
      replies: 12,
      views: 201,
      time: "1 day ago",
      category: "General Discussion",
      solved: false,
      featured: false
    },
    {
      title: "New to Xcom - Hello everyone!",
      author: "NewShopper2024",
      replies: 18,
      views: 145,
      time: "1 day ago",
      category: "Introductions",
      solved: false,
      featured: false
    }
  ];

  const topContributors = [
    { name: "ShoppingExpert", posts: 1234, reputation: 9850, badge: "Expert" },
    { name: "TechGuru99", posts: 987, reputation: 8765, badge: "Guru" },
    { name: "DealHunter", posts: 756, reputation: 7432, badge: "Pro" },
    { name: "HelpfulUser", posts: 543, reputation: 6210, badge: "Helper" }
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
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Community Forum</h1>
              <p className="text-muted-foreground">Connect with fellow shoppers and get community support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Forum Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {forumStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-4 text-center">
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Actions */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Input
                    placeholder="Search forum topics, posts, or users..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pr-10"
                  />
                  <Button size="icon" variant="ghost" className="absolute right-0 top-0 h-full">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex gap-2">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  New Post
                </Button>
                <Button variant="outline">Join Community</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Forum Categories */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Forum Categories</h2>
              <div className="space-y-4">
                {forumCategories.map((category, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg ${category.color}`}>
                            {category.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-1">{category.title}</h3>
                            <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span>{category.posts} posts</span>
                              <span>{category.members} members</span>
                              <span>Last post: {category.lastPost}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Browse
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Recent Discussions</h2>
              <Tabs defaultValue="recent" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="solved">Solved</TabsTrigger>
                  <TabsTrigger value="featured">Featured</TabsTrigger>
                </TabsList>

                <TabsContent value="recent" className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-medium hover:text-blue-600">{post.title}</h3>
                              {post.solved && (
                                <Badge className="bg-green-100 text-green-800 text-xs">Solved</Badge>
                              )}
                              {post.featured && (
                                <Badge className="bg-yellow-100 text-yellow-800 text-xs">Featured</Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>by {post.author}</span>
                              <Badge variant="outline" className="text-xs">{post.category}</Badge>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {post.time}
                              </span>
                            </div>
                          </div>
                          <div className="text-right text-sm text-muted-foreground">
                            <div className="flex items-center gap-1 mb-1">
                              <MessageCircle className="h-3 w-3" />
                              {post.replies}
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {post.views}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="popular" className="space-y-4">
                  {recentPosts.filter(post => post.views > 150).map((post, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-medium mb-2 hover:text-blue-600">{post.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>by {post.author}</span>
                              <span className="flex items-center gap-1">
                                <ThumbsUp className="h-3 w-3" />
                                Popular
                              </span>
                            </div>
                          </div>
                          <div className="text-right text-sm text-muted-foreground">
                            <div>{post.views} views</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="solved" className="space-y-4">
                  {recentPosts.filter(post => post.solved).map((post, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer border-green-200">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-medium hover:text-blue-600">{post.title}</h3>
                              <Badge className="bg-green-100 text-green-800 text-xs">Solved</Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>by {post.author}</span>
                              <span>{post.replies} replies</span>
                            </div>
                          </div>
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="featured" className="space-y-4">
                  {recentPosts.filter(post => post.featured).map((post, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer border-yellow-200">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-medium hover:text-blue-600">{post.title}</h3>
                              <Badge className="bg-yellow-100 text-yellow-800 text-xs">Featured</Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>by {post.author}</span>
                              <span>{post.replies} replies</span>
                              <span>{post.views} views</span>
                            </div>
                          </div>
                          <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Top Contributors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{contributor.name}</h3>
                        <p className="text-xs text-muted-foreground">{contributor.posts} posts</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs">{contributor.badge}</Badge>
                        <p className="text-xs text-muted-foreground">{contributor.reputation} rep</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Forum Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle>Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Be respectful and helpful to others</li>
                  <li>• Search before posting duplicate questions</li>
                  <li>• Use clear, descriptive titles</li>
                  <li>• Mark solutions when your issue is resolved</li>
                  <li>• No spam or promotional content</li>
                </ul>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/user-guides">User Guides</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/faq">FAQ</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Join Community CTA */}
        <Card className="mt-12 text-center border-blue-200 bg-blue-50">
          <CardContent className="p-8">
            <Users className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-bold mb-2">Join Our Community</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with thousands of customers, share experiences, get help, and discover new products. 
              Our community is here to help you make the best shopping decisions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">Create Account & Join</Button>
              <Button size="lg" variant="outline">Browse as Guest</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}