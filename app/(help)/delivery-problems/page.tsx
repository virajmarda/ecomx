"use client";

import Link from "next/link";
import { ArrowLeft, AlertTriangle, Package, MapPin, Clock, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function DeliveryProblemsPage() {
  const [trackingNumber, setTrackingNumber] = useState("");

  const commonProblems = [
    {
      title: "Package Not Delivered",
      description: "Your order shows as delivered but you haven't received it",
      icon: <Package className="h-5 w-5" />,
      solution: "We'll investigate with the carrier and provide a resolution within 24 hours"
    },
    {
      title: "Wrong Address",
      description: "Package was delivered to the wrong location",
      icon: <MapPin className="h-5 w-5" />,
      solution: "We'll track down your package and arrange proper delivery"
    },
    {
      title: "Delayed Delivery",
      description: "Your package is taking longer than expected",
      icon: <Clock className="h-5 w-5" />,
      solution: "We'll provide updated tracking and expedite if possible"
    },
    {
      title: "Damaged Package",
      description: "Your package arrived damaged or opened",
      icon: <AlertTriangle className="h-5 w-5" />,
      solution: "We'll provide immediate replacement or full refund"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/orders-shipping" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Orders & Shipping
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-red-100 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Delivery Problems</h1>
              <p className="text-muted-foreground">Get help with delivery and package issues</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Track */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Track Your Package</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Input
                placeholder="Enter tracking number"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1"
              />
              <Button>Track Package</Button>
            </div>
          </CardContent>
        </Card>

        {/* Common Problems */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {commonProblems.map((problem, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 rounded-lg text-red-600">
                    {problem.icon}
                  </div>
                  <h3 className="text-lg">{problem.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{problem.description}</p>
                <div className="bg-green-50 border border-green-200 p-3 rounded-lg mb-4">
                  <p className="text-sm text-green-800">{problem.solution}</p>
                </div>
                <Button className="w-full" variant="outline">
                  Report This Issue
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Support */}
        <Card>
          <CardHeader>
            <CardTitle>Need Immediate Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  <h3 className="font-medium">Call Support</h3>
                  <p className="text-sm text-muted-foreground">+91 123 456 7890</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <Mail className="h-5 w-5 text-green-600" />
                <div>
                  <h3 className="font-medium">Email Support</h3>
                  <p className="text-sm text-muted-foreground">delivery@xcom.com</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}