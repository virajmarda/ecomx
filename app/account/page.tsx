"use client";

import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { User, Package, Heart, Settings, CreditCard, MapPin, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function AccountPage() {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/");
    return null;
  }

  const accountSections = [
    {
      title: "My Orders",
      description: "Track, return, or buy things again",
      icon: Package,
      link: "/orders",
      color: "text-blue-600"
    },
    {
      title: "Account Settings",
      description: "Edit login, name, and mobile number",
      icon: Settings,
      link: "/settings",
      color: "text-green-600"
    },
    {
      title: "Addresses",
      description: "Edit addresses for orders and gifts",
      icon: MapPin,
      link: "/account/addresses",
      color: "text-purple-600"
    },
    {
      title: "Payment Options",
      description: "Edit or add payment methods",
      icon: CreditCard,
      link: "/account/payment",
      color: "text-orange-600"
    },
    {
      title: "Wishlist",
      description: "View and manage your saved items",
      icon: Heart,
      link: "/account/wishlist",
      color: "text-red-600"
    },
    {
      title: "Notifications",
      description: "Manage your notification preferences",
      icon: Bell,
      link: "/account/notifications",
      color: "text-indigo-600"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">My Account</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        {/* User Info Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-muted-foreground font-normal">{user.email}</p>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>

        {/* Account Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accountSections.map((section, index) => (
            <Link key={index} href={section.link}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gray-50 ${section.color}`}>
                      <section.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{section.title}</h3>
                      <p className="text-sm text-muted-foreground">{section.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 p-6 bg-muted/50 rounded-lg">
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link href="/orders">View Recent Orders</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/account/addresses">Manage Addresses</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/help">Get Help</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}