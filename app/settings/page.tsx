"use client";

import { useTheme } from "next-themes";
import { useAuth } from "@/context/auth-context";
import { Moon, Sun, Laptop, Bell, Mail, Globe, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const { user, updatePreferences, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push('/');
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Account Settings</h1>
          <p className="text-muted-foreground">Hello, {user.name}</p>
        </div>
        <Button variant="destructive" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
      
      <div className="max-w-2xl">
        <div className="space-y-6">
          {/* Profile Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="text-muted-foreground">Name:</span> {user.name}
              </p>
              <p className="text-sm">
                <span className="text-muted-foreground">Email:</span> {user.email}
              </p>
            </div>
          </div>

          <Separator />

          {/* Theme Settings */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Theme Preferences</h2>
            <div className="grid grid-cols-3 gap-4">
              <Button
                variant={theme === "light" ? "default" : "outline"}
                className="flex flex-col items-center gap-2 h-auto p-4"
                onClick={() => {
                  setTheme("light");
                  updatePreferences({ theme: 'light' });
                }}
              >
                <Sun className="h-6 w-6" />
                <span>Light</span>
              </Button>
              
              <Button
                variant={theme === "dark" ? "default" : "outline"}
                className="flex flex-col items-center gap-2 h-auto p-4"
                onClick={() => {
                  setTheme("dark");
                  updatePreferences({ theme: 'dark' });
                }}
              >
                <Moon className="h-6 w-6" />
                <span>Dark</span>
              </Button>
              
              <Button
                variant={theme === "system" ? "default" : "outline"}
                className="flex flex-col items-center gap-2 h-auto p-4"
                onClick={() => {
                  setTheme("system");
                  updatePreferences({ theme: 'system' });
                }}
              >
                <Laptop className="h-6 w-6" />
                <span>System</span>
              </Button>
            </div>
          </div>

          <Separator />

          {/* Notification Settings */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Notification Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center">
                    <Bell className="h-4 w-4 mr-2" />
                    <span className="font-medium">Push Notifications</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications about orders and updates
                  </p>
                </div>
                <Switch
                  checked={user.preferences.notifications}
                  onCheckedChange={(checked) => updatePreferences({ notifications: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="font-medium">Marketing Emails</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Receive emails about new products and offers
                  </p>
                </div>
                <Switch
                  checked={user.preferences.marketing}
                  onCheckedChange={(checked) => updatePreferences({ marketing: checked })}
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Language Settings */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Language & Region</h2>
            <div className="flex items-center space-x-4">
              <Globe className="h-4 w-4" />
              <Select
                value={user.preferences.language}
                onValueChange={(value) => updatePreferences({ language: value })}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                  <SelectItem value="hi">Hindi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}