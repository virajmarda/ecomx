"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Users, 
  Globe, 
  Award, 
  TrendingUp, 
  Heart, 
  Shield, 
  Zap, 
  Target,
  MapPin,
  Calendar,
  Star,
  ArrowRight,
  Play,
  CheckCircle,
  Building,
  Truck,
  Headphones
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutPage() {
  const [activeYear, setActiveYear] = useState(2024);
  const [visibleStats, setVisibleStats] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisibleStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const companyStats = [
    { label: "Happy Customers", value: "10M+", icon: <Users className="h-6 w-6" />, color: "text-blue-600" },
    { label: "Products Sold", value: "50M+", icon: <TrendingUp className="h-6 w-6" />, color: "text-green-600" },
    { label: "Countries Served", value: "25+", icon: <Globe className="h-6 w-6" />, color: "text-purple-600" },
    { label: "Team Members", value: "500+", icon: <Building className="h-6 w-6" />, color: "text-orange-600" }
  ];

  const timeline = [
    {
      year: 2020,
      title: "The Beginning",
      description: "Founded with a vision to revolutionize online shopping",
      achievements: ["First 1,000 customers", "Initial product catalog", "Mumbai office established"],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      year: 2021,
      title: "Rapid Growth",
      description: "Expanded product range and customer base significantly",
      achievements: ["100K+ customers", "5 new categories", "Mobile app launch"],
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      year: 2022,
      title: "Market Expansion",
      description: "Extended operations to multiple cities and regions",
      achievements: ["1M+ customers", "Pan-India delivery", "AI recommendations"],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      year: 2023,
      title: "Innovation Focus",
      description: "Introduced cutting-edge technology and sustainability initiatives",
      achievements: ["5M+ customers", "Green packaging", "Same-day delivery"],
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      year: 2024,
      title: "Global Vision",
      description: "Expanding internationally with enhanced customer experience",
      achievements: ["10M+ customers", "International shipping", "24/7 AI support"],
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const coreValues = [
    {
      title: "Customer First",
      description: "Every decision we make puts our customers at the center",
      icon: <Heart className="h-8 w-8" />,
      color: "from-red-500 to-pink-500",
      stats: "99.5% satisfaction rate"
    },
    {
      title: "Innovation",
      description: "We continuously push boundaries to improve shopping experiences",
      icon: <Zap className="h-8 w-8" />,
      color: "from-yellow-500 to-orange-500",
      stats: "50+ new features annually"
    },
    {
      title: "Trust & Security",
      description: "Your data and transactions are protected with enterprise-grade security",
      icon: <Shield className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500",
      stats: "Zero security breaches"
    },
    {
      title: "Excellence",
      description: "We strive for perfection in every product and service we offer",
      icon: <Award className="h-8 w-8" />,
      color: "from-blue-500 to-indigo-500",
      stats: "Industry-leading quality"
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 15+ years in e-commerce and technology",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer", 
      bio: "Tech innovator passionate about scalable solutions and AI",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#"
    },
    {
      name: "Emily Rodriguez",
      role: "Chief Marketing Officer",
      bio: "Brand strategist focused on customer experience and growth",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#"
    },
    {
      name: "David Kumar",
      role: "Chief Operations Officer",
      bio: "Operations expert ensuring seamless logistics and fulfillment",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#"
    }
  ];

  const testimonials = [
    {
      quote: "Xcom has transformed how I shop online. The quality and service are unmatched.",
      author: "Priya Sharma",
      role: "Verified Customer",
      rating: 5,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      quote: "Fast delivery, great prices, and excellent customer support. Highly recommended!",
      author: "Rajesh Patel",
      role: "Premium Member",
      rating: 5,
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      quote: "The product quality exceeded my expectations. Will definitely shop again!",
      author: "Anita Desai",
      role: "Loyal Customer",
      rating: 5,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const offices = [
    {
      city: "Mumbai",
      country: "India",
      type: "Headquarters",
      address: "123 Commerce Street, Business District",
      employees: "200+",
      established: "2020",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      city: "Bangalore",
      country: "India", 
      type: "Tech Hub",
      address: "456 Innovation Park, Electronic City",
      employees: "150+",
      established: "2021",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      city: "Delhi",
      country: "India",
      type: "Operations Center",
      address: "789 Business Plaza, Connaught Place",
      employees: "100+",
      established: "2022",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      city: "Singapore",
      country: "Singapore",
      type: "APAC Office",
      address: "321 Marina Bay, Financial District",
      employees: "50+",
      established: "2024",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "Best E-commerce Platform",
      organization: "Digital Commerce Awards",
      icon: <Award className="h-6 w-6" />
    },
    {
      year: "2023",
      title: "Customer Choice Award",
      organization: "Consumer Excellence Forum",
      icon: <Star className="h-6 w-6" />
    },
    {
      year: "2023",
      title: "Sustainability Leader",
      organization: "Green Business Council",
      icon: <Globe className="h-6 w-6" />
    },
    {
      year: "2022",
      title: "Innovation in Technology",
      organization: "Tech Excellence Awards",
      icon: <Zap className="h-6 w-6" />
    }
  ];

  const milestones = [
    { metric: "Customer Satisfaction", value: "99.5%", trend: "+2.1%" },
    { metric: "Order Fulfillment", value: "99.8%", trend: "+1.5%" },
    { metric: "Delivery Time", value: "2.3 days", trend: "-0.7 days" },
    { metric: "Return Rate", value: "2.1%", trend: "-0.5%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/20">
              Established 2020 • Trusted by Millions
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              About Xcom
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Revolutionizing e-commerce with innovation, trust, and an unwavering commitment to customer excellence
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Join Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {companyStats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center transition-all duration-700 delay-${index * 100} ${
                  visibleStats ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="flex justify-center mb-2">
                  <div className={`p-2 rounded-lg bg-white/20 ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Our Mission & Vision
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Empowering people through technology and creating meaningful connections between customers and quality products
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="group">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                      <Target className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To democratize access to quality products by creating the most trusted, innovative, and customer-centric 
                    e-commerce platform that connects people with what they need, when they need it.
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-purple-100 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                      <Globe className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the world's most beloved marketplace where every interaction creates value, 
                    every product tells a story, and every customer feels truly cared for.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Our mission in action"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-medium">
                      "Building the future of commerce, one customer at a time"
                    </p>
                  </div>
                </div>
                
                {/* Floating achievement badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <Award className="h-8 w-8 text-yellow-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                  <Heart className="h-8 w-8 text-red-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h2>
              <p className="text-xl text-muted-foreground">
                From a startup dream to a global marketplace - here's how we grew
              </p>
            </div>

            {/* Timeline Navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex bg-white rounded-full p-2 shadow-lg border">
                {timeline.map((item) => (
                  <button
                    key={item.year}
                    onClick={() => setActiveYear(item.year)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all ${
                      activeYear === item.year
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {item.year}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline Content */}
            <div className="relative">
              {timeline.map((item) => (
                <div
                  key={item.year}
                  className={`transition-all duration-500 ${
                    activeYear === item.year ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0'
                  }`}
                >
                  <Card className="overflow-hidden shadow-xl border-0">
                    <div className="grid md:grid-cols-2">
                      <div className="relative aspect-video md:aspect-auto">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="text-6xl font-bold mb-2">{item.year}</div>
                            <div className="text-xl font-semibold">{item.title}</div>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 md:p-12">
                        <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                        <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                          {item.description}
                        </p>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-lg">Key Achievements:</h4>
                          {item.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600" />
                              <span className="text-muted-foreground">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  <CardContent className="p-8 text-center relative">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${value.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {value.description}
                    </p>
                    <Badge variant="outline" className="group-hover:border-blue-500 group-hover:text-blue-600">
                      {value.stats}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Leadership Team</h2>
              <p className="text-xl text-muted-foreground">
                Meet the visionaries driving our mission forward
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-gray-900">
                        View Profile
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Customers Say</h2>
              <p className="text-xl text-muted-foreground">
                Real stories from real customers who love shopping with us
              </p>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-2xl overflow-hidden">
                <CardContent className="p-12">
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <blockquote className="text-2xl md:text-3xl font-medium mb-8 text-gray-800 leading-relaxed">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={testimonials[currentTestimonial].image}
                          alt={testimonials[currentTestimonial].author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-lg">{testimonials[currentTestimonial].author}</div>
                        <div className="text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial indicators */}
              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Global Presence</h2>
              <p className="text-xl text-muted-foreground">
                Our offices around the world, serving customers everywhere
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {offices.map((office, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={office.image}
                      alt={`${office.city} office`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-900">
                        {office.type}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{office.city}</h3>
                      <p className="text-sm opacity-90">{office.country}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{office.address}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Team Size:</span>
                        <span className="font-semibold">{office.employees}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Established:</span>
                        <span className="font-semibold">{office.established}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Performance Excellence</h2>
              <p className="text-xl text-muted-foreground">
                Metrics that matter - our commitment to continuous improvement
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {milestone.value}
                    </div>
                    <div className="font-semibold mb-2">{milestone.metric}</div>
                    <Badge 
                      className={`${
                        milestone.trend.startsWith('+') || milestone.trend.startsWith('-0') 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {milestone.trend}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Awards & Recognition</h2>
              <p className="text-xl text-muted-foreground">
                Industry recognition for our commitment to excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="group text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-8">
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white mb-6 group-hover:scale-110 transition-transform">
                      {achievement.icon}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">{achievement.year}</div>
                    <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.organization}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Impact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Sustainable Future
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  We're committed to building a sustainable future through responsible business practices, 
                  eco-friendly packaging, and carbon-neutral operations.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-sm text-green-800">Recyclable Packaging</div>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                    <div className="text-sm text-blue-800">Carbon Reduction</div>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
                    <div className="text-sm text-purple-800">Trees Planted</div>
                  </div>
                  <div className="text-center p-6 bg-orange-50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600 mb-2">Zero</div>
                    <div className="text-sm text-orange-800">Waste to Landfill</div>
                  </div>
                </div>

                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Learn About Our Impact
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Sustainability initiatives"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/50 to-transparent" />
                </div>
                
                {/* Floating sustainability badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <Globe className="h-8 w-8 text-green-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                  <Heart className="h-8 w-8 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & Technology */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Innovation at Our Core</h2>
              <p className="text-xl opacity-90">
                Cutting-edge technology powering exceptional shopping experiences
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 rounded-full bg-white/20 mb-6">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">AI-Powered Recommendations</h3>
                  <p className="opacity-90 leading-relaxed">
                    Advanced machine learning algorithms that understand your preferences and suggest perfect products
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 rounded-full bg-white/20 mb-6">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                  <p className="opacity-90 leading-relaxed">
                    Bank-level encryption and security measures protecting every transaction and personal data
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 rounded-full bg-white/20 mb-6">
                    <Truck className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Smart Logistics</h3>
                  <p className="opacity-90 leading-relaxed">
                    Intelligent supply chain management ensuring fastest delivery with real-time tracking
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Culture</h2>
              <p className="text-xl text-muted-foreground">
                Building a workplace where innovation thrives and people grow
              </p>
            </div>

            <Tabs defaultValue="values" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
                <TabsTrigger value="values">Values</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="diversity">Diversity</TabsTrigger>
                <TabsTrigger value="growth">Growth</TabsTrigger>
              </TabsList>

              <TabsContent value="values" className="space-y-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="text-center border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="inline-flex p-4 rounded-full bg-blue-100 text-blue-600 mb-6">
                        <Users className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Collaboration</h3>
                      <p className="text-muted-foreground">
                        We believe great things happen when diverse minds work together towards common goals
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="text-center border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="inline-flex p-4 rounded-full bg-green-100 text-green-600 mb-6">
                        <TrendingUp className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Growth Mindset</h3>
                      <p className="text-muted-foreground">
                        Continuous learning and improvement drive our personal and professional development
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="text-center border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="inline-flex p-4 rounded-full bg-purple-100 text-purple-600 mb-6">
                        <Heart className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Empathy</h3>
                      <p className="text-muted-foreground">
                        Understanding and caring for our customers and colleagues is at the heart of everything we do
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="benefits" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Employee Benefits</h3>
                    <div className="space-y-4">
                      {[
                        "Comprehensive health insurance",
                        "Flexible work arrangements",
                        "Professional development budget",
                        "Stock options program",
                        "Wellness programs",
                        "Parental leave policies"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Team collaboration"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="diversity" className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-8">Diversity & Inclusion</h3>
                  <div className="grid md:grid-cols-4 gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">45%</div>
                      <div className="text-sm text-muted-foreground">Women in Leadership</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                      <div className="text-sm text-muted-foreground">Nationalities</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                      <div className="text-sm text-muted-foreground">Languages Spoken</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                      <div className="text-sm text-muted-foreground">Inclusive Culture</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="growth" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Career Growth</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Learning & Development</h4>
                        <p className="text-sm text-muted-foreground">
                          $2000 annual learning budget for courses, conferences, and certifications
                        </p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Internal Mobility</h4>
                        <p className="text-sm text-muted-foreground">
                          70% of leadership positions filled internally through career progression
                        </p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Mentorship Program</h4>
                        <p className="text-sm text-muted-foreground">
                          Structured mentorship connecting junior and senior team members
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Professional growth"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join Our Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you're looking to shop with us or join our team, we'd love to have you be part of our story
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Users className="mr-2 h-5 w-5" />
                Join Our Team
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Headphones className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Globe className="mr-2 h-5 w-5" />
                Explore Products
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}