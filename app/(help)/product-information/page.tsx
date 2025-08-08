import Link from "next/link";
import { ArrowLeft, Info, Ruler, Star, Package, FileText, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProductInformationPage() {
  const productTopics = [
    {
      title: "Product Specifications",
      description: "Detailed technical information and features",
      icon: <FileText className="h-5 w-5" />,
      link: "/product-specs"
    },
    {
      title: "Size Guides",
      description: "Sizing charts and measurement guides",
      icon: <Ruler className="h-5 w-5" />,
      link: "/size-guide"
    },
    {
      title: "Product Availability",
      description: "Stock status and restock notifications",
      icon: <Package className="h-5 w-5" />,
      link: "/availability"
    },
    {
      title: "Product Reviews",
      description: "Customer reviews and ratings information",
      icon: <Star className="h-5 w-5" />,
      link: "/reviews-help"
    },
    {
      title: "Product Search",
      description: "Tips for finding the right products",
      icon: <Search className="h-5 w-5" />,
      link: "/product-search-help"
    },
    {
      title: "Product Care",
      description: "Maintenance and care instructions",
      icon: <Info className="h-5 w-5" />,
      link: "/product-care"
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
            <div className="p-3 bg-purple-100 rounded-lg">
              <Info className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Product Information</h1>
              <p className="text-muted-foreground">Everything you need to know about our products</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productTopics.map((topic, index) => (
            <Link key={index} href={topic.link}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                      {topic.icon}
                    </div>
                    <h3 className="text-lg">{topic.title}</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{topic.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}