import Link from "next/link";
import { ArrowLeft, FileText, Search, Filter, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function ProductSpecificationsPage() {
  const productCategories = [
    {
      category: "Electronics",
      icon: "💻",
      specs: [
        "Display size and resolution",
        "Processor and RAM specifications", 
        "Battery life and charging",
        "Connectivity options",
        "Operating system",
        "Storage capacity",
        "Camera specifications",
        "Audio features"
      ]
    },
    {
      category: "Fashion",
      icon: "👕", 
      specs: [
        "Material composition",
        "Size charts and measurements",
        "Care instructions",
        "Color options",
        "Fit type (slim, regular, loose)",
        "Country of origin",
        "Brand sizing guide",
        "Seasonal collection"
      ]
    },
    {
      category: "Home & Kitchen",
      icon: "🏠",
      specs: [
        "Dimensions and weight",
        "Material and construction",
        "Power consumption",
        "Capacity and volume",
        "Safety certifications",
        "Warranty information",
        "Assembly requirements",
        "Maintenance instructions"
      ]
    },
    {
      category: "Beauty",
      icon: "💄",
      specs: [
        "Ingredients list",
        "Skin type suitability",
        "Application instructions",
        "Expiry and shelf life",
        "Cruelty-free status",
        "Dermatologically tested",
        "SPF rating (if applicable)",
        "Volume/weight"
      ]
    }
  ];

  const specificationTypes = [
    {
      type: "Technical Specifications",
      description: "Detailed technical information about product features and capabilities",
      examples: ["Processor speed", "Memory capacity", "Display resolution", "Battery life"]
    },
    {
      type: "Physical Specifications", 
      description: "Size, weight, and physical characteristics of the product",
      examples: ["Dimensions", "Weight", "Color options", "Material composition"]
    },
    {
      type: "Performance Specifications",
      description: "How the product performs under different conditions",
      examples: ["Speed", "Efficiency", "Durability", "Temperature range"]
    },
    {
      type: "Compatibility Specifications",
      description: "What the product works with and system requirements",
      examples: ["Operating systems", "Device compatibility", "Software requirements", "Accessories"]
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
            <div className="p-3 bg-purple-100 rounded-lg">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Product Specifications</h1>
              <p className="text-muted-foreground">Detailed technical information and features</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search Specifications */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  placeholder="Search for product specifications..."
                  className="flex-1"
                />
                <Button>
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Search by product name, model, or specification type
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Specification Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Types of Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specificationTypes.map((spec, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-blue-600" />
                    {spec.type}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{spec.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {spec.examples.map((example, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Category Specifications */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Specifications by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-3">Common Specifications:</h4>
                  <ul className="space-y-2">
                    {category.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How to Read Specifications */}
        <Card>
          <CardHeader>
            <CardTitle>How to Read Product Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Understanding Technical Terms</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>RAM:</strong> Random Access Memory - affects multitasking performance</li>
                  <li><strong>Storage:</strong> Available space for files and applications</li>
                  <li><strong>Resolution:</strong> Image clarity measured in pixels</li>
                  <li><strong>Battery mAh:</strong> Battery capacity - higher means longer life</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">What to Look For</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Compare similar products side by side</li>
                  <li>• Check compatibility with your existing devices</li>
                  <li>• Look for certifications and standards</li>
                  <li>• Read customer reviews for real-world performance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}