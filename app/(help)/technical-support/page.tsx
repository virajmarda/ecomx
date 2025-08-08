import Link from "next/link";
import { ArrowLeft, Monitor, Smartphone, Wifi, Bug, Settings, HelpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TechnicalSupportPage() {
  const techTopics = [
    {
      title: "Website Issues",
      description: "Problems loading pages, checkout errors, or site functionality",
      icon: <Monitor className="h-5 w-5" />,
      link: "/website-issues"
    },
    {
      title: "Mobile App Help",
      description: "App crashes, login issues, or feature problems",
      icon: <Smartphone className="h-5 w-5" />,
      link: "/app-help"
    },
    {
      title: "Browser Compatibility",
      description: "Supported browsers and troubleshooting tips",
      icon: <Wifi className="h-5 w-5" />,
      link: "/browser-help"
    },
    {
      title: "Login Problems",
      description: "Can't sign in, password reset, or account access issues",
      icon: <Settings className="h-5 w-5" />,
      link: "/login-help"
    },
    {
      title: "Report a Bug",
      description: "Found a technical issue? Let us know",
      icon: <Bug className="h-5 w-5" />,
      link: "/report-bug"
    },
    {
      title: "System Status",
      description: "Check if our services are running normally",
      icon: <HelpCircle className="h-5 w-5" />,
      link: "/system-status"
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
            <div className="p-3 bg-orange-100 rounded-lg">
              <Monitor className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Technical Support</h1>
              <p className="text-muted-foreground">Get help with technical issues and troubleshooting</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techTopics.map((topic, index) => (
            <Link key={index} href={topic.link}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
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