import Link from "next/link";
import { ArrowLeft, Shield, FileText, Scale, Lock, Eye, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PoliciesLegalPage() {
  const legalTopics = [
    {
      title: "Privacy Policy",
      description: "How we collect, use, and protect your personal information",
      icon: <Eye className="h-5 w-5" />,
      link: "/privacy"
    },
    {
      title: "Terms & Conditions",
      description: "Terms of service and user agreement",
      icon: <FileText className="h-5 w-5" />,
      link: "/terms"
    },
    {
      title: "Return Policy",
      description: "Our return and refund policies",
      icon: <Shield className="h-5 w-5" />,
      link: "/returns"
    },
    {
      title: "Warranty Information",
      description: "Product warranties and coverage details",
      icon: <AlertTriangle className="h-5 w-5" />,
      link: "/warranty"
    },
    {
      title: "Security Policy",
      description: "How we protect your data and transactions",
      icon: <Lock className="h-5 w-5" />,
      link: "/security-policy"
    },
    {
      title: "Legal Compliance",
      description: "Regulatory compliance and legal information",
      icon: <Scale className="h-5 w-5" />,
      link: "/legal-compliance"
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
            <div className="p-3 bg-red-100 rounded-lg">
              <Scale className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Policies & Legal</h1>
              <p className="text-muted-foreground">Legal information, policies, and compliance</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {legalTopics.map((topic, index) => (
            <Link key={index} href={topic.link}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 rounded-lg text-red-600">
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