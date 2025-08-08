import Link from "next/link";
import { ArrowLeft, User, CreditCard, Shield, Settings, Lock, Receipt } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AccountPaymentPage() {
  const accountTopics = [
    {
      title: "Account Settings",
      description: "Manage your profile, preferences, and personal information",
      icon: <User className="h-5 w-5" />,
      link: "/account"
    },
    {
      title: "Payment Methods",
      description: "Add, edit, or remove payment options",
      icon: <CreditCard className="h-5 w-5" />,
      link: "/account/payment"
    },
    {
      title: "Billing Issues",
      description: "Problems with charges or payment processing",
      icon: <Receipt className="h-5 w-5" />,
      link: "/billing-issues"
    },
    {
      title: "Account Security",
      description: "Password, two-factor authentication, and security settings",
      icon: <Shield className="h-5 w-5" />,
      link: "/account-security"
    },
    {
      title: "Login Problems",
      description: "Can't access your account or forgot password",
      icon: <Lock className="h-5 w-5" />,
      link: "/login-help"
    },
    {
      title: "Privacy Settings",
      description: "Control your data and privacy preferences",
      icon: <Settings className="h-5 w-5" />,
      link: "/privacy-settings"
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
            <div className="p-3 bg-green-100 rounded-lg">
              <User className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Account & Payment</h1>
              <p className="text-muted-foreground">Manage your account and payment information</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accountTopics.map((topic, index) => (
            <Link key={index} href={topic.link}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600">
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