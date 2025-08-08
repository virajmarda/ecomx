import Link from "next/link";
import { ArrowLeft, Activity, CheckCircle, AlertTriangle, XCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SystemStatusPage() {
  const systemServices = [
    {
      name: "Website",
      status: "operational",
      description: "Main website and shopping experience",
      uptime: "99.9%",
      lastIncident: "None in the last 30 days"
    },
    {
      name: "Mobile App",
      status: "operational",
      description: "iOS and Android mobile applications",
      uptime: "99.8%",
      lastIncident: "None in the last 30 days"
    },
    {
      name: "Payment Processing",
      status: "operational",
      description: "Credit card and payment gateway services",
      uptime: "99.9%",
      lastIncident: "None in the last 30 days"
    },
    {
      name: "Order Management",
      status: "operational",
      description: "Order processing and fulfillment systems",
      uptime: "99.7%",
      lastIncident: "Minor delay on Dec 1, 2024"
    },
    {
      name: "Customer Support",
      status: "operational",
      description: "Live chat and support ticket systems",
      uptime: "99.5%",
      lastIncident: "None in the last 30 days"
    },
    {
      name: "Email Notifications",
      status: "degraded",
      description: "Order confirmations and promotional emails",
      uptime: "98.2%",
      lastIncident: "Delayed emails on Dec 5, 2024"
    }
  ];

  const recentIncidents = [
    {
      date: "Dec 5, 2024",
      title: "Email Delivery Delays",
      status: "resolved",
      description: "Some customers experienced delays in receiving order confirmation emails.",
      duration: "2 hours 15 minutes",
      impact: "Low"
    },
    {
      date: "Dec 1, 2024",
      title: "Order Processing Slowdown",
      status: "resolved",
      description: "Orders took longer than usual to process during peak hours.",
      duration: "45 minutes",
      impact: "Medium"
    },
    {
      date: "Nov 28, 2024",
      title: "Scheduled Maintenance",
      status: "completed",
      description: "Planned maintenance to improve system performance.",
      duration: "3 hours",
      impact: "Low"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'degraded':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'outage':
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'operational':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Operational</Badge>;
      case 'degraded':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Degraded</Badge>;
      case 'outage':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Outage</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getIncidentBadge = (status: string) => {
    switch (status) {
      case 'resolved':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Resolved</Badge>;
      case 'investigating':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Investigating</Badge>;
      case 'completed':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Completed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

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
            <div className="p-3 bg-green-100 rounded-lg">
              <Activity className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">System Status</h1>
              <p className="text-muted-foreground">Current status of all our services and systems</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Overall Status */}
        <Card className="mb-8 border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <div>
                <h2 className="text-xl font-semibold text-green-800">All Systems Operational</h2>
                <p className="text-green-700">All services are running normally with no major issues.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service Status */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Service Status</h2>
          <Card>
            <CardContent className="p-0">
              {systemServices.map((service, index) => (
                <div key={index} className="p-4 border-b last:border-b-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(service.status)}
                      <div>
                        <h3 className="font-medium">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {getStatusBadge(service.status)}
                      <p className="text-xs text-muted-foreground mt-1">{service.uptime} uptime</p>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Last incident: {service.lastIncident}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Incidents */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Recent Incidents</h2>
          <div className="space-y-4">
            {recentIncidents.map((incident, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold mb-1">{incident.title}</h3>
                      <p className="text-sm text-muted-foreground">{incident.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {getIncidentBadge(incident.status)}
                      <Badge variant="outline" className="text-xs">
                        {incident.impact} Impact
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm mb-2">{incident.description}</p>
                  <p className="text-xs text-muted-foreground">
                    Duration: {incident.duration}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Subscribe to Updates */}
        <Card>
          <CardHeader>
            <CardTitle>Stay Updated</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Get Status Updates</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Subscribe to receive notifications about system status changes and maintenance windows.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 border rounded-md text-sm"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                    Subscribe
                  </button>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Follow Us</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Follow our social media accounts for real-time updates during incidents.
                </p>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border rounded-md text-sm hover:bg-gray-50">
                    Twitter
                  </button>
                  <button className="px-4 py-2 border rounded-md text-sm hover:bg-gray-50">
                    Status Page
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}