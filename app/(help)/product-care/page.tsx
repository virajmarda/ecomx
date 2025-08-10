import Link from "next/link";
import { ArrowLeft, Heart, Wrench, Droplets, Sun, Snowflake, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProductCarePage() {
  const careCategories = [
    {
      category: "Electronics",
      icon: "💻",
      tips: [
        "Keep devices away from water and moisture",
        "Use original chargers and accessories",
        "Clean screens with microfiber cloth",
        "Avoid extreme temperatures",
        "Update software regularly",
        "Use protective cases and screen guards"
      ],
      storage: [
        "Store in cool, dry places",
        "Remove batteries if not used for long periods",
        "Keep away from magnetic fields",
        "Use original packaging for storage"
      ]
    },
    {
      category: "Fashion & Clothing",
      icon: "👕",
      tips: [
        "Read care labels before washing",
        "Separate colors when washing",
        "Use appropriate water temperature",
        "Air dry when possible",
        "Iron on correct heat settings",
        "Store properly to prevent wrinkles"
      ],
      storage: [
        "Use padded hangers for delicate items",
        "Fold heavy knits to prevent stretching",
        "Store in breathable garment bags",
        "Use cedar blocks to prevent moths"
      ]
    },
    {
      category: "Home & Kitchen",
      icon: "🏠",
      tips: [
        "Clean after each use",
        "Use appropriate cleaning products",
        "Dry thoroughly to prevent rust",
        "Follow manufacturer's instructions",
        "Regular maintenance and servicing",
        "Replace worn parts promptly"
      ],
      storage: [
        "Store in dry, ventilated areas",
        "Keep sharp items safely covered",
        "Organize to prevent damage",
        "Check expiry dates regularly"
      ]
    },
    {
      category: "Beauty Products",
      icon: "💄",
      tips: [
        "Check expiration dates regularly",
        "Store in cool, dry places",
        "Keep containers tightly closed",
        "Use clean applicators",
        "Avoid contamination",
        "Patch test new products"
      ],
      storage: [
        "Keep away from direct sunlight",
        "Store at room temperature",
        "Separate liquid and powder products",
        "Use within recommended timeframe"
      ]
    }
  ];

  const seasonalCare = [
    {
      season: "Summer",
      icon: <Sun className="h-5 w-5 text-yellow-600" />,
      tips: [
        "Protect electronics from heat and humidity",
        "Store clothing in breathable containers",
        "Use sunscreen on leather products",
        "Keep beauty products in cool places"
      ]
    },
    {
      season: "Winter", 
      icon: <Snowflake className="h-5 w-5 text-blue-600" />,
      tips: [
        "Prevent condensation on electronics",
        "Use moisturizers for leather goods",
        "Store summer clothes properly",
        "Protect outdoor equipment from frost"
      ]
    },
    {
      season: "Monsoon",
      icon: <Droplets className="h-5 w-5 text-blue-500" />,
      tips: [
        "Use dehumidifiers for electronics",
        "Dry clothes completely before storing",
        "Check for mold and mildew regularly",
        "Use waterproof covers for outdoor items"
      ]
    }
  ];

  const maintenanceSchedule = [
    {
      frequency: "Daily",
      tasks: ["Clean after use", "Check for damage", "Proper storage"]
    },
    {
      frequency: "Weekly", 
      tasks: ["Deep cleaning", "Check expiry dates", "Organize storage"]
    },
    {
      frequency: "Monthly",
      tasks: ["Detailed inspection", "Replace worn parts", "Professional servicing"]
    },
    {
      frequency: "Seasonally",
      tasks: ["Deep storage preparation", "Climate protection", "Annual maintenance"]
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
              <Heart className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Product Care Guide</h1>
              <p className="text-muted-foreground">Keep your products in perfect condition</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Care by Category */}
        <Tabs defaultValue="electronics" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="electronics">Electronics</TabsTrigger>
            <TabsTrigger value="fashion">Fashion</TabsTrigger>
            <TabsTrigger value="home">Home & Kitchen</TabsTrigger>
            <TabsTrigger value="beauty">Beauty</TabsTrigger>
          </TabsList>

          {careCategories.map((category, index) => (
            <TabsContent key={index} value={category.category.toLowerCase().replace(' & ', '-').replace(' ', '-')} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    {category.category} Care
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-4">Daily Care Tips</h3>
                      <ul className="space-y-2">
                        {category.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">Storage Guidelines</h3>
                      <ul className="space-y-2">
                        {category.storage.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Seasonal Care */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Seasonal Care Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seasonalCare.map((season, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {season.icon}
                    {season.season} Care
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {season.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Maintenance Schedule */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="h-5 w-5" />
              Maintenance Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              {maintenanceSchedule.map((schedule, index) => (
                <div key={index} className="text-center p-4 border rounded-lg">
                  <h3 className="font-semibold mb-3">{schedule.frequency}</h3>
                  <ul className="space-y-1">
                    {schedule.tasks.map((task, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Professional Services */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Professional Care Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <Wrench className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                <h3 className="font-semibold mb-2">Repair Services</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Professional repair for electronics and appliances
                </p>
                <Button size="sm" variant="outline">Find Service Center</Button>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Droplets className="h-8 w-8 mx-auto mb-3 text-green-600" />
                <h3 className="font-semibold mb-2">Cleaning Services</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Professional cleaning for delicate items
                </p>
                <Button size="sm" variant="outline">Book Cleaning</Button>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Shield className="h-8 w-8 mx-auto mb-3 text-purple-600" />
                <h3 className="font-semibold mb-2">Extended Warranty</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Protect your investment with extended coverage
                </p>
                <Button size="sm" variant="outline">Learn More</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}