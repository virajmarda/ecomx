import Link from "next/link";
import { ArrowLeft, Activity, CheckCircle, AlertTriangle, XCircle, Clock, Server, Globe, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ServiceStatusPage() {
  const overallStatus = {
    status: "operational",
    message: "All systems are running normally",
    uptime: "99.9%",
    lastUpdated: "2 minutes ago"
  };

  const services = [
    {
      name: "Website & Shopping",
      status: "operational",
      description: "Main website, product pages, and shopping cart",
      uptime: "99.9%",
      responseTime: "245ms",
      lastIncident: "None in 30 days"
    },
    {
      name: "Mobile Applications",
      status: "operational", 
      description: "iOS and Android mobile apps",
      uptime: "99.8%",
      responseTime: "312ms",
      lastIncident: "None in 30 days"
    },
    {
      name: "Payment Processing",
      status: "operational",
      description: "Credit card, UPI, and wallet payments",
      uptime: "99.9%",
      responseTime: "156ms",
      lastIncident: "None in 30 days"
    },
    {
      name: "Order Management",
      status: "operational",
      description: "Order processing and fulfillment",
      uptime: "99.7%",
      responseTime: "423ms",
      lastIncident: "Minor delay on Dec 1"
    },
    {
      name: "Customer Support",
      status: "operational",
      description: "Live chat, email, and phone support",
      uptime: "99.5%",
      responseTime: "1.2s",
      lastIncident: "None in 30 days"
    },
    {
      name: "Email Notifications",
      status: "degraded",
      description: "Order confirmations and promotional emails",
      uptime: "98.2%",
      responseTime: "2.1s",
      lastIncident: "Delays on Dec 5"
    },
    {
      name: "Search & Recommendations",
      status: "operational",
      description: "Product search and AI recommendations",
      uptime: "99.6%",
      responseTime: "189ms",
      lastIncident: "None in 30 days"
    },
    {
      name: "User Accounts",
      status: "operational",
      description: "Login, registration, and profile management",
      uptime: "99.8%",
      responseTime: "267ms",
      lastIncident: "None in 30 days"
    }
  ];

  const recentIncidents = [
    {
      date: "Dec 5, 2024",
      time: "2:30 PM - 4:45 PM IST",
      title: "Email Delivery Delays",
      status: "resolved",
      severity: "low",
      description: "Some customers experienced delays in receiving order confirmation emails due to high volume.",
      impact: "Email notifications delayed by 15-30 minutes",
      resolution: "Increased email server capacity and optimized delivery queue"
    },
    {
      date: "Dec 1, 2024", 
      time: "10:15 AM - 11:00 AM IST",
      title: "Order Processing Slowdown",
      status: "resolved",
      severity: "medium",
      description: "Orders took longer than usual to process during peak Black Friday traffic.",
      impact: "Order processing delayed by 10-15 minutes",
      resolution: "Scaled up processing servers and optimized order queue"
    },
    {
      date: "Nov 28, 2024",
      time: "2:00 AM - 5:00 AM IST", 
      title: "Scheduled Database Maintenance",
      status: "completed",
      severity: "low",
      description: "Planned maintenance to improve database performance and reliability.",
      impact: "Brief intermittent slowdowns during maintenance window",
      resolution: "Maintenance completed successfully with improved performance"
    }
  ];

  const upcomingMaintenance = [
    {
      date: "Dec 15, 2024",
      time: "2:00 AM - 4:00 AM IST",
      title: "Payment System Upgrade",
      description: "Upgrading payment processing infrastructure for better performance",
      impact: "Brief payment processing interruptions possible",
      duration: "2 hours"
    },
    {
      date: "Dec 22, 2024",
      time: "1:00 AM - 3:00 AM IST", 
      title: "Search Engine Optimization",
      description: "Improving search functionality and recommendation algorithms",
      impact: "Search may be temporarily slower",
      duration: "2 hours"
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

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'low':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Low</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium</Badge>;
      case 'high':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High</Badge>;
      default:
        return <Badge variant="outline">{severity}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
              <Activity className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Service Status</h1>
              <p className="text-muted-foreground">Real-time status of all Xcom services and systems</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Overall Status */}
        <Card className="mb-8 border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <div>
                  <h2 className="text-xl font-semibold text-green-800">All Systems Operational</h2>
                  <p className="text-green-700">{overallStatus.message}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">{overallStatus.uptime}</div>
                <div className="text-sm text-green-700">Overall Uptime</div>
                <div className="text-xs text-green-600">Updated {overallStatus.lastUpdated}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service Status Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Individual Service Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(service.status)}
                      <div>
                        <h3 className="font-semibold">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                    {getStatusBadge(service.status)}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-blue-600">{service.uptime}</div>
                      <div className="text-xs text-muted-foreground">Uptime</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-600">{service.responseTime}</div>
                      <div className="text-xs text-muted-foreground">Response</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Last Issue</div>
                      <div className="text-sm font-medium">{service.lastIncident}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Incidents */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Recent Incidents & Maintenance</h2>
          <div className="space-y-4">
            {recentIncidents.map((incident, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">{incident.title}</h3>
                        <Badge className={
                          incident.status === 'resolved' ? 'bg-green-100 text-green-800' :
                          incident.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }>
                          {incident.status}
                        </Badge>
                        {getSeverityBadge(incident.severity)}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {incident.date} • {incident.time}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm mb-1">Description:</h4>
                      <p className="text-sm text-muted-foreground">{incident.description}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Impact:</h4>
                      <p className="text-sm text-muted-foreground">{incident.impact}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Resolution:</h4>
                      <p className="text-sm text-muted-foreground">{incident.resolution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Maintenance */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Scheduled Maintenance</h2>
          <div className="space-y-4">
            {upcomingMaintenance.map((maintenance, index) => (
              <Card key={index} className="border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">{maintenance.title}</h3>
                        <Badge className="bg-blue-100 text-blue-800">Scheduled</Badge>
                      </div>
                      <p className="text-sm text-blue-700 mb-2">
                        {maintenance.date} • {maintenance.time}
                      </p>
                    </div>
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm">{maintenance.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span><strong>Expected Impact:</strong> {maintenance.impact}</span>
                      <span><strong>Duration:</strong> {maintenance.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* System Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                Server Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">CPU Usage</span>
                  <span className="font-semibold text-green-600">23%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Memory Usage</span>
                  <span className="font-semibold text-blue-600">67%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Disk Usage</span>
                  <span className="font-semibold text-orange-600">45%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Network I/O</span>
                  <span className="font-semibold text-purple-600">12 MB/s</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Global Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">India</span>
                  <span className="font-semibold text-green-600">245ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">USA</span>
                  <span className="font-semibold text-green-600">312ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Europe</span>
                  <span className="font-semibold text-yellow-600">456ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Asia Pacific</span>
                  <span className="font-semibold text-green-600">189ms</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">SSL Certificate</span>
                  <span className="font-semibold text-green-600">Valid</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Firewall</span>
                  <span className="font-semibold text-green-600">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">DDoS Protection</span>
                  <span className="font-semibold text-green-600">Enabled</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Threat Level</span>
                  <span className="font-semibold text-green-600">Low</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Status Notifications */}
        <Card>
          <CardHeader>
            <CardTitle>Stay Updated on Service Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4">Get Status Notifications</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Subscribe to receive real-time notifications about service status changes and maintenance windows.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-3 py-2 border rounded-md text-sm"
                  />
                  <Button>Subscribe</Button>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Follow Status Updates</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Follow our social media accounts and status page for real-time updates during incidents.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Status Page
                  </Button>
                  <Button variant="outline" size="sm">
                    Twitter Updates
                  </Button>
                  <Button variant="outline" size="sm">
                    RSS Feed
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}