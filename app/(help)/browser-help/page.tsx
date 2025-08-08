import Link from "next/link";
import { ArrowLeft, Chrome, Monitor, Settings, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BrowserHelpPage() {
  const supportedBrowsers = [
    {
      name: "Google Chrome",
      version: "Version 90 or later",
      icon: <Chrome className="h-6 w-6" />,
      recommended: true
    },
    {
      name: "Mozilla Firefox",
      version: "Version 88 or later",
      icon: <Monitor className="h-6 w-6" />,
      recommended: true
    },
    {
      name: "Safari",
      version: "Version 14 or later",
      icon: <Shield className="h-6 w-6" />,
      recommended: true
    },
    {
      name: "Microsoft Edge",
      version: "Version 90 or later",
      icon: <Settings className="h-6 w-6" />,
      recommended: false
    }
  ];

  const browserSettings = [
    {
      title: "Enable JavaScript",
      description: "JavaScript must be enabled for the website to function properly",
      steps: [
        "Open browser settings",
        "Go to Privacy & Security",
        "Find Site Settings or Content Settings",
        "Enable JavaScript for all sites"
      ]
    },
    {
      title: "Clear Cache & Cookies",
      description: "Clear stored data to resolve loading issues",
      steps: [
        "Press Ctrl+Shift+Delete (Cmd+Shift+Delete on Mac)",
        "Select 'All time' as time range",
        "Check 'Cookies' and 'Cached images and files'",
        "Click 'Clear data'"
      ]
    },
    {
      title: "Disable Ad Blockers",
      description: "Ad blockers may interfere with website functionality",
      steps: [
        "Click on your ad blocker extension",
        "Select 'Disable on this site'",
        "Refresh the page",
        "Try your action again"
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
            <div className="p-3 bg-purple-100 rounded-lg">
              <Chrome className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Browser Compatibility</h1>
              <p className="text-muted-foreground">Supported browsers and settings</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Supported Browsers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Supported Browsers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportedBrowsers.map((browser, index) => (
              <Card key={index} className={`${browser.recommended ? 'border-green-200 bg-green-50' : ''}`}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {browser.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{browser.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{browser.version}</p>
                  {browser.recommended && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Recommended
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Browser Settings */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Browser Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {browserSettings.map((setting, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{setting.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{setting.description}</p>
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Steps:</h4>
                    <ol className="text-sm space-y-1">
                      {setting.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-600 mr-2 font-medium">{idx + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}