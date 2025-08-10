import Link from "next/link";
import { ArrowLeft, Eye, Ear, Hand, Brain, Monitor, Keyboard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AccessibilityPage() {
  const accessibilityFeatures = [
    {
      category: "Visual Accessibility",
      icon: <Eye className="h-5 w-5" />,
      features: [
        "High contrast mode support",
        "Screen reader compatibility",
        "Keyboard navigation support",
        "Alt text for all images",
        "Scalable fonts and UI elements",
        "Color-blind friendly design"
      ]
    },
    {
      category: "Motor Accessibility",
      icon: <Hand className="h-5 w-5" />,
      features: [
        "Large click targets",
        "Keyboard-only navigation",
        "Voice control compatibility",
        "Reduced motion options",
        "Sticky hover states",
        "Accessible form controls"
      ]
    },
    {
      category: "Cognitive Accessibility",
      icon: <Brain className="h-5 w-5" />,
      features: [
        "Clear, simple language",
        "Consistent navigation",
        "Error prevention and recovery",
        "Progress indicators",
        "Timeout warnings",
        "Help text and instructions"
      ]
    },
    {
      category: "Hearing Accessibility",
      icon: <Ear className="h-5 w-5" />,
      features: [
        "Captions for video content",
        "Visual alerts and notifications",
        "Text alternatives for audio",
        "Sign language interpretation",
        "Vibration feedback support",
        "Visual sound indicators"
      ]
    }
  ];

  const wcagCompliance = [
    {
      level: "WCAG 2.1 AA",
      status: "Compliant",
      description: "Meets international accessibility standards",
      color: "bg-green-100 text-green-800"
    },
    {
      level: "Section 508",
      status: "Compliant", 
      description: "US federal accessibility requirements",
      color: "bg-blue-100 text-blue-800"
    },
    {
      level: "ADA",
      status: "Compliant",
      description: "Americans with Disabilities Act compliance",
      color: "bg-purple-100 text-purple-800"
    }
  ];

  const assistiveTech = [
    {
      technology: "Screen Readers",
      compatibility: "Full Support",
      tools: ["NVDA", "JAWS", "VoiceOver", "TalkBack"],
      icon: <Monitor className="h-5 w-5" />
    },
    {
      technology: "Keyboard Navigation",
      compatibility: "Full Support", 
      tools: ["Tab navigation", "Arrow keys", "Enter/Space", "Escape key"],
      icon: <Keyboard className="h-5 w-5" />
    },
    {
      technology: "Voice Control",
      compatibility: "Supported",
      tools: ["Dragon NaturallySpeaking", "Windows Speech Recognition", "Voice Control"],
      icon: <Ear className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/legal-compliance" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Legal Compliance
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Eye className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Accessibility Statement</h1>
              <p className="text-muted-foreground">Our commitment to digital accessibility for everyone</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Commitment Statement */}
        <Card className="mb-8 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-3">Our Accessibility Commitment</h2>
            <p className="text-blue-800">
              Xcom is committed to ensuring digital accessibility for people with disabilities. 
              We continually improve the user experience for everyone and apply relevant accessibility standards 
              to ensure we provide equal access to all users.
            </p>
          </CardContent>
        </Card>

        {/* Accessibility Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Accessibility Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accessibilityFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {feature.icon}
                    </div>
                    {feature.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Compliance Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wcagCompliance.map((standard, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Badge className={`mb-4 ${standard.color}`}>
                    {standard.status}
                  </Badge>
                  <h3 className="font-semibold mb-2">{standard.level}</h3>
                  <p className="text-sm text-muted-foreground">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Assistive Technology */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Assistive Technology Support</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {assistiveTech.map((tech, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="p-2 bg-green-100 rounded-lg text-green-600">
                    {tech.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{tech.technology}</h3>
                      <Badge className="bg-green-100 text-green-800">{tech.compatibility}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tech.tools.map((tool, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Feedback and Contact */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Accessibility Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  We welcome feedback on the accessibility of our website. Please let us know 
                  if you encounter any barriers or have suggestions for improvement.
                </p>
                <div className="space-y-2">
                  <p className="text-sm"><strong>Email:</strong> accessibility@xcom.com</p>
                  <p className="text-sm"><strong>Phone:</strong> +91 123 456 7890</p>
                  <p className="text-sm"><strong>Response Time:</strong> Within 5 business days</p>
                </div>
                <Button className="w-full">Send Accessibility Feedback</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accessibility Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Helpful Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <Link href="/keyboard-shortcuts" className="text-blue-600 hover:underline">Keyboard shortcuts guide</Link></li>
                    <li>• <Link href="/screen-reader-guide" className="text-blue-600 hover:underline">Screen reader navigation</Link></li>
                    <li>• <Link href="/accessibility-settings" className="text-blue-600 hover:underline">Accessibility settings</Link></li>
                    <li>• <Link href="/contact" className="text-blue-600 hover:underline">Contact accessibility team</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">External Resources</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <a href="https://www.w3.org/WAI/" className="text-blue-600 hover:underline" target="_blank">Web Accessibility Initiative</a></li>
                    <li>• <a href="https://webaim.org/" className="text-blue-600 hover:underline" target="_blank">WebAIM Resources</a></li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}