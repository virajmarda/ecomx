"use client";

import { useState } from "react";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { Bell, Mail, Smartphone, Package, Tag, Star, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  email: boolean;
  push: boolean;
  sms: boolean;
}

export default function NotificationsPage() {
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  
  const [settings, setSettings] = useState<NotificationSetting[]>([
    {
      id: "orders",
      title: "Order Updates",
      description: "Get notified about order confirmations, shipping, and delivery",
      icon: <Package className="h-5 w-5" />,
      email: true,
      push: true,
      sms: true
    },
    {
      id: "deals",
      title: "Deals & Offers",
      description: "Receive notifications about sales, discounts, and special offers",
      icon: <Tag className="h-5 w-5" />,
      email: true,
      push: false,
      sms: false
    },
    {
      id: "reviews",
      title: "Review Reminders",
      description: "Reminders to review products you've purchased",
      icon: <Star className="h-5 w-5" />,
      email: true,
      push: false,
      sms: false
    },
    {
      id: "account",
      title: "Account Security",
      description: "Important security alerts and account changes",
      icon: <Settings className="h-5 w-5" />,
      email: true,
      push: true,
      sms: true
    },
    {
      id: "marketing",
      title: "Marketing Communications",
      description: "Product recommendations and promotional content",
      icon: <Mail className="h-5 w-5" />,
      email: false,
      push: false,
      sms: false
    }
  ]);

  if (!user) {
    router.push("/");
    return null;
  }

  const handleToggle = (settingId: string, type: 'email' | 'push' | 'sms', value: boolean) => {
    setSettings(prev => prev.map(setting => 
      setting.id === settingId 
        ? { ...setting, [type]: value }
        : setting
    ));
    
    toast({
      title: "Notification settings updated",
      description: "Your preferences have been saved.",
    });
  };

  const handleSaveAll = () => {
    toast({
      title: "All settings saved",
      description: "Your notification preferences have been updated successfully.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Notification Settings</h1>
          <p className="text-muted-foreground">
            Manage how you want to receive notifications from us
          </p>
        </div>

        {/* Notification Channels Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notification Channels
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Smartphone className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">Push Notifications</h3>
                  <p className="text-sm text-muted-foreground">Browser & Mobile App</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Smartphone className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-medium">SMS</h3>
                  <p className="text-sm text-muted-foreground">+91 ••••• ••890</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 pb-4 border-b text-sm font-medium text-muted-foreground">
                <div className="col-span-6">Notification Type</div>
                <div className="col-span-2 text-center">Email</div>
                <div className="col-span-2 text-center">Push</div>
                <div className="col-span-2 text-center">SMS</div>
              </div>

              {/* Settings Rows */}
              {settings.map((setting) => (
                <div key={setting.id} className="grid grid-cols-12 gap-4 items-center py-4 border-b last:border-b-0">
                  <div className="col-span-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-muted rounded-lg mt-1">
                        {setting.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{setting.title}</h3>
                        <p className="text-sm text-muted-foreground">{setting.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-span-2 flex justify-center">
                    <Switch
                      checked={setting.email}
                      onCheckedChange={(checked) => handleToggle(setting.id, 'email', checked)}
                    />
                  </div>
                  
                  <div className="col-span-2 flex justify-center">
                    <Switch
                      checked={setting.push}
                      onCheckedChange={(checked) => handleToggle(setting.id, 'push', checked)}
                    />
                  </div>
                  
                  <div className="col-span-2 flex justify-center">
                    <Switch
                      checked={setting.sms}
                      onCheckedChange={(checked) => handleToggle(setting.id, 'sms', checked)}
                      disabled={setting.id === 'marketing'} // SMS marketing usually disabled
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4">
          <Button onClick={handleSaveAll}>
            Save All Settings
          </Button>
          <Button 
            variant="outline"
            onClick={() => {
              setSettings(prev => prev.map(setting => ({
                ...setting,
                email: setting.id === 'orders' || setting.id === 'account',
                push: setting.id === 'orders' || setting.id === 'account',
                sms: setting.id === 'orders' || setting.id === 'account'
              })));
              toast({
                title: "Settings reset",
                description: "Only essential notifications are now enabled.",
              });
            }}
          >
            Essential Only
          </Button>
          <Button 
            variant="outline"
            onClick={() => {
              setSettings(prev => prev.map(setting => ({
                ...setting,
                email: true,
                push: true,
                sms: setting.id !== 'marketing'
              })));
              toast({
                title: "All notifications enabled",
                description: "You'll receive all available notifications.",
              });
            }}
          >
            Enable All
          </Button>
        </div>

        {/* Info Box */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-start gap-3">
            <Bell className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-800 mb-1">About Notifications</h3>
              <p className="text-sm text-blue-700">
                We respect your privacy and will only send you notifications you've opted into. 
                You can change these settings at any time. Some security-related notifications 
                cannot be disabled for your account safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}