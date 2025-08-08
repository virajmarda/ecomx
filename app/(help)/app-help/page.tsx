import Link from "next/link";
import { ArrowLeft, Smartphone, Download, RefreshCw, Settings, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AppHelpPage() {
  const appIssues = [
    {
      title: "App Won't Open",
      description: "Mobile app crashes on startup or won't launch",
      icon: <Smartphone className="h-5 w-5" />,
      solutions: [
        "Force close and restart the app",
        "Restart your device",
        "Update the app to the latest version",
        "Clear app cache and data"
      ]
    },
    {
      title: "Login Issues",
      description: "Can't sign in to your account on mobile app",
      icon: <Settings className="h-5 w-5" />,
      solutions: [
        "Check your internet connection",
        "Verify your email and password",
        "Reset your password if needed",
        "Try logging in through the website"
      ]
    },
    {
      title: "App Updates",
      description: "Problems updating or downloading the app",
      icon: <Download className="h-5 w-5" />,
      solutions: [
        "Check available storage space",
        "Update your device's operating system",
        "Clear App Store/Play Store cache",
        "Try downloading on WiFi connection"
      ]
    },
    {
      title: "Notifications",
      description: "Not receiving push notifications from the app",
      icon: <Bell className="h-5 w-5" />,
      solutions: [
        "Enable notifications in app settings",
        "Check device notification settings",
        "Ensure app has permission to send notifications",
        "Update the app to latest version"
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
            <div className="p-3 bg-blue-100 rounded-lg">
              <Smartphone className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Mobile App Help</h1>
              <p className="text-muted-foreground">Troubleshoot mobile app issues</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {appIssues.map((issue, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {issue.icon}
                  </div>
                  <h3 className="text-lg">{issue.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{issue.description}</p>
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Try these solutions:</h4>
                  <ul className="text-sm space-y-1">
                    {issue.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full mt-4">Contact App Support</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}