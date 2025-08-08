import Link from "next/link";
import { ArrowLeft, Users, MessageCircle, Star, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CommunityForumPage() {
  const forumCategories = [
    {
      title: "General Discussion",
      description: "Share experiences and connect with other customers",
      posts: 1234,
      members: 5678,
      icon: <MessageCircle className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Product Reviews",
      description: "Share and read detailed product reviews",
      posts: 892,
      members: 3456,
      icon: <Star className="h-5 w-5" />,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      title: "Shopping Tips",
      description: "Get advice on finding the best deals and products",
      posts: 567,
      members: 2345,
      icon: <TrendingUp className="h-5 w-5" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Technical Help",
      description: "Get help from the community with technical issues",
      posts: 345,
      members: 1234,
      icon: <Users className="h-5 w-5" />,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const recentPosts = [
    {
      title: "Best wireless headphones under $200?",
      author: "TechLover123",
      replies: 15,
      time: "2 hours ago",
      category: "Product Reviews"
    },
    {
      title: "How to get the best deals during sales?",
      author: "BargainHunter",
      replies: 8,
      time: "4 hours ago",
      category: "Shopping Tips"
    },
    {
      title: "Website not loading on mobile",
      author: "MobileUser",
      replies: 3,
      time: "6 hours ago",
      category: "Technical Help"
    },
    {
      title: "Great customer service experience!",
      author: "HappyCustomer",
      replies: 12,
      time: "1 day ago",
      category: "General Discussion"
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
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Community Forum</h1>
              <p className="text-muted-foreground">Connect with other customers and share experiences</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Forum Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">12.5K</div>
              <div className="text-sm text-muted-foreground">Members</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">3.2K</div>
              <div className="text-sm text-muted-foreground">Posts</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">856</div>
              <div className="text-sm text-muted-foreground">Topics</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">24/7</div>
              <div className="text-sm text-muted-foreground">Active</div>
            </CardContent>
          </Card>
        </div>

        {/* Forum Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Forum Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {forumCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg">{category.title}</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  <div className="flex justify-between text-sm">
                    <span>{category.posts} posts</span>
                    <span>{category.members} members</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
          <Card>
            <CardContent className="p-0">
              {recentPosts.map((post, index) => (
                <div key={index} className="p-4 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{post.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>by {post.author}</span>
                        <span>•</span>
                        <Badge variant="outline" className="text-xs">{post.category}</Badge>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.time}
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {post.replies} replies
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Join Community */}
        <Card className="text-center">
          <CardContent className="p-8">
            <Users className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Join Our Community</h3>
            <p className="text-muted-foreground mb-6">
              Connect with thousands of customers, share experiences, and get help from the community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">Create Account</Button>
              <Button size="lg" variant="outline">Browse as Guest</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}