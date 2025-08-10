import Link from "next/link";
import { ArrowLeft, Search, Filter, Star, Tag, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ProductSearchHelpPage() {
  const searchTips = [
    {
      category: "Basic Search",
      icon: <Search className="h-5 w-5" />,
      tips: [
        "Use specific product names for better results",
        "Try different spellings or synonyms",
        "Use brand names when looking for specific brands",
        "Search by product categories (e.g., 'wireless headphones')"
      ]
    },
    {
      category: "Advanced Search",
      icon: <Filter className="h-5 w-5" />,
      tips: [
        "Use quotes for exact phrases (e.g., \"iPhone 15 Pro\")",
        "Use minus sign to exclude terms (e.g., phone -case)",
        "Search by price range using 'under $100' or '$50-$200'",
        "Use 'OR' to search multiple terms (e.g., laptop OR notebook)"
      ]
    },
    {
      category: "Filter Usage",
      icon: <Star className="h-5 w-5" />,
      tips: [
        "Use brand filters to narrow down options",
        "Filter by price range to stay within budget",
        "Sort by customer ratings for quality products",
        "Use availability filters to see only in-stock items"
      ]
    }
  ];

  const searchExamples = [
    {
      query: "wireless bluetooth headphones under $100",
      description: "Find affordable wireless headphones",
      category: "Electronics"
    },
    {
      query: "nike running shoes size 9",
      description: "Specific brand and size search",
      category: "Fashion"
    },
    {
      query: "stainless steel kitchen knife set",
      description: "Material and product type search",
      category: "Home & Kitchen"
    },
    {
      query: "organic skincare sensitive skin",
      description: "Product type with specific requirements",
      category: "Beauty"
    }
  ];

  const searchFeatures = [
    {
      feature: "Auto-complete",
      description: "Get search suggestions as you type",
      icon: <Lightbulb className="h-4 w-4" />
    },
    {
      feature: "Spell Check",
      description: "Automatic correction of misspelled words",
      icon: <Search className="h-4 w-4" />
    },
    {
      feature: "Smart Filters",
      description: "AI-powered filters based on your search",
      icon: <Filter className="h-4 w-4" />
    },
    {
      feature: "Visual Search",
      description: "Search using product images",
      icon: <Tag className="h-4 w-4" />
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
            <div className="p-3 bg-green-100 rounded-lg">
              <Search className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Product Search Help</h1>
              <p className="text-muted-foreground">Tips for finding the perfect products</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Try Search */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="max-w-md mx-auto">
              <h3 className="font-semibold mb-4 text-center">Try Our Search</h3>
              <div className="flex gap-3">
                <Input
                  placeholder="Search for products..."
                  className="flex-1"
                />
                <Button>
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Try searching for "wireless headphones" or "running shoes"
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Search Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Search Tips & Tricks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {searchTips.map((tip, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600">
                      {tip.icon}
                    </div>
                    {tip.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tip.tips.map((tipItem, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                        {tipItem}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Search Examples */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Search Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {searchExamples.map((example, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline">{example.category}</Badge>
                    <Search className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg mb-3 font-mono text-sm">
                    "{example.query}"
                  </div>
                  <p className="text-sm text-muted-foreground">{example.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Search Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              {searchFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{feature.feature}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Troubleshooting */}
        <Card>
          <CardHeader>
            <CardTitle>Search Troubleshooting</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">No Results Found?</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Check spelling and try different keywords</li>
                  <li>• Use broader search terms</li>
                  <li>• Browse categories instead</li>
                  <li>• Contact support for help finding specific items</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Too Many Results?</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Use more specific search terms</li>
                  <li>• Apply filters to narrow down options</li>
                  <li>• Sort by relevance or price</li>
                  <li>• Use brand names for specific products</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}