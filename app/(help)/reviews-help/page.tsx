import Link from "next/link";
import { ArrowLeft, Star, MessageCircle, ThumbsUp, Flag, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ReviewsHelpPage() {
  const reviewGuidelines = [
    {
      title: "Writing Helpful Reviews",
      icon: <MessageCircle className="h-5 w-5" />,
      tips: [
        "Be specific about product features and performance",
        "Include details about sizing, quality, and durability",
        "Mention how you use the product",
        "Be honest about both pros and cons",
        "Include photos if possible"
      ]
    },
    {
      title: "Review Standards",
      icon: <Star className="h-5 w-5" />,
      tips: [
        "Must be based on actual product experience",
        "No promotional or spam content",
        "Respectful language only",
        "No personal information sharing",
        "One review per product per customer"
      ]
    },
    {
      title: "Reading Reviews",
      icon: <ThumbsUp className="h-5 w-5" />,
      tips: [
        "Look for verified purchase badges",
        "Read both positive and negative reviews",
        "Check review dates for recent feedback",
        "Consider reviewer's use case vs. yours",
        "Look for detailed, specific comments"
      ]
    }
  ];

  const reviewTypes = [
    {
      type: "Verified Purchase",
      description: "Reviews from customers who actually bought the product",
      badge: "Most Trusted",
      color: "bg-green-100 text-green-800"
    },
    {
      type: "Expert Review",
      description: "Professional reviews from industry experts",
      badge: "Professional",
      color: "bg-blue-100 text-blue-800"
    },
    {
      type: "Video Review",
      description: "Video demonstrations and unboxing reviews",
      badge: "Visual",
      color: "bg-purple-100 text-purple-800"
    },
    {
      type: "Long-term Review",
      description: "Reviews after extended use of the product",
      badge: "Detailed",
      color: "bg-orange-100 text-orange-800"
    }
  ];

  const reviewRewards = [
    {
      action: "Write a Review",
      reward: "10 points",
      description: "Earn points for each helpful review"
    },
    {
      action: "Add Photos",
      reward: "5 bonus points", 
      description: "Extra points for including product photos"
    },
    {
      action: "Helpful Votes",
      reward: "1 point each",
      description: "Earn points when others find your review helpful"
    },
    {
      action: "Video Review",
      reward: "25 points",
      description: "Maximum points for video reviews"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/product-information" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Product Information
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Star className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Product Reviews Help</h1>
              <p className="text-muted-foreground">How to write and read helpful product reviews</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Review Guidelines */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Review Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewGuidelines.map((guideline, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600">
                      {guideline.icon}
                    </div>
                    {guideline.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {guideline.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Review Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Types of Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviewTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">{type.type}</h3>
                    <Badge className={type.color}>{type.badge}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Review Rewards */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Review Rewards Program
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              {reviewRewards.map((reward, index) => (
                <div key={index} className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{reward.reward}</div>
                  <h3 className="font-semibold mb-1">{reward.action}</h3>
                  <p className="text-xs text-muted-foreground">{reward.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Redeem Points:</strong> Use your review points for discounts on future purchases. 
                100 points = $5 off your next order!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Review Moderation */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Flag className="h-5 w-5" />
                Review Moderation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  All reviews go through our moderation process to ensure quality and authenticity.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">We Remove Reviews That:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Contain inappropriate language</li>
                    <li>• Are not about the actual product</li>
                    <li>• Include personal information</li>
                    <li>• Are promotional or spam</li>
                    <li>• Violate our community guidelines</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Review Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">For Helpful Reviews:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Use the product for at least a week</li>
                    <li>• Compare with similar products if possible</li>
                    <li>• Mention specific use cases</li>
                    <li>• Include pros and cons</li>
                    <li>• Update review if your opinion changes</li>
                  </ul>
                </div>
                <Button className="w-full">
                  Start Writing a Review
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}