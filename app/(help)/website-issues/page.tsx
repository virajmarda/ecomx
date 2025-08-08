import Link from "next/link";
import { ArrowLeft, Monitor, AlertTriangle, RefreshCw, Wifi, Chrome } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function WebsiteIssuesPage() {
  const websiteIssues = [
    {
      title: "Page Won't Load",
      description: "Website pages are not loading or showing errors",
      icon: <Monitor className="h-5 w-5" />,
      solutions: [
        "Clear your browser cache and cookies",
        "Try refreshing the page (Ctrl+F5)",
        "Check your internet connection",
        "Try a different browser"
      ]
    },
    {
      title: "Checkout Problems",
      description: "Issues completing your purchase or payment",
      icon: <AlertTriangle className="h-5 w-5" />,
      solutions: [
        "Disable browser extensions temporarily",
        "Clear shopping cart and try again",
        "Use a different payment method",
        "Try incognito/private browsing mode"
      ]
    },
    {
      title: "Slow Loading",
      description: "Website is loading very slowly",
      icon: <RefreshCw className="h-5 w-5" />,
      solutions: [
        "Check your internet speed",
        "Close other browser tabs",
        "Clear browser cache",
        "Try during off-peak hours"
      ]
    },
    {
      title: "Browser Compatibility",
      description: "Website not working properly in your browser",
      icon: <Chrome className="h-5 w-5" />,
      solutions: [
        "Update your browser to the latest version",
        "Enable JavaScript in browser settings",
        "Disable ad blockers temporarily",
        "Try Chrome, Firefox, or Safari"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/technical-support" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Technical Support
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Monitor className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Website Issues</h1>
              <p className="text-muted-foreground">Troubleshoot common website problems</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {websiteIssues.map((issue, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                    {issue.icon}
                  </div>
                  <h3 className="text-lg">{issue.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{issue.description}</p>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Try these solutions:</h4>
                  <ul className="text-sm space-y-1">
                    {issue.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full mt-4">Still Need Help?</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}