'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Users, Globe, Award, Leaf, Play, Briefcase, MapPin, Calendar, TrendingUp, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState('values');

  const timelineData = {
    2024: {
      title: "Global Expansion",
      description: "Reached 50 million customers worldwide with AI-powered shopping experiences",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: ["50M+ customers", "AI integration", "Global presence"]
    },
    2023: {
      title: "Innovation Leadership",
      description: "Launched revolutionary mobile app with AR try-on technology",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: ["AR technology", "Mobile-first", "User experience"]
    },
    2022: {
      title: "Sustainability Focus",
      description: "Achieved carbon neutrality and launched eco-friendly packaging initiative",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: ["Carbon neutral", "Eco packaging", "Green logistics"]
    },
    2021: {
      title: "Digital Transformation",
      description: "Revolutionized online shopping with personalized recommendations",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: ["AI recommendations", "Digital first", "Customer focus"]
    },
    2020: {
      title: "Pandemic Resilience",
      description: "Adapted quickly to serve customers during global challenges",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: ["Contactless delivery", "Safety protocols", "Community support"]
    },
    2015: {
      title: "Company Founded",
      description: "Started with a vision to make shopping accessible to everyone",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: ["Founded", "First store", "Vision established"]
    }
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Verified Customer",
      content: "The shopping experience is absolutely incredible. Fast delivery, quality products, and amazing customer service!",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Michael Chen",
      role: "Premium Member",
      content: "I've been shopping here for 3 years. The product quality and customer support are unmatched in the industry.",
      rating: 5,
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Emily Rodriguez",
      role: "Business Customer",
      content: "Perfect for both personal and business needs. The bulk ordering system and corporate discounts are fantastic.",
      rating: 5,
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 15+ years in e-commerce and retail innovation.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Maria Garcia",
      role: "Chief Technology Officer",
      bio: "Technology expert driving our digital transformation and AI initiatives.",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "David Kim",
      role: "Chief Operations Officer",
      bio: "Operations specialist ensuring seamless customer experiences worldwide.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Lisa Wang",
      role: "Chief Marketing Officer",
      bio: "Creative strategist building meaningful connections with our customers.",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            About ShopMaster
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-blue-100">
            Transforming the way the world shops through innovation, sustainability, and exceptional customer experiences since 2015.
          </p>
          
          {/* Floating Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold mb-2">50M+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-100">Countries Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              Watch Our Story
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
              <Briefcase className="w-5 h-5 mr-2" />
              Join Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a global leader, discover the milestones that shaped our company.
            </p>
          </div>

          {/* Timeline Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(timelineData).map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(parseInt(year))}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedYear === parseInt(year)
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Timeline Content */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-blue-600 font-semibold mb-2">{selectedYear}</div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {timelineData[selectedYear].title}
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  {timelineData[selectedYear].description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {timelineData[selectedYear].achievements.map((achievement, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src={timelineData[selectedYear].image}
                  alt={timelineData[selectedYear].title}
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-3xl transform hover:scale-105 transition-all duration-300 shadow-xl">
              <Users className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Customer First</h3>
              <p className="text-blue-100 mb-6">Every decision we make starts with our customers' needs and experiences.</p>
              <div className="text-3xl font-bold">98.5%</div>
              <div className="text-blue-100 text-sm">Satisfaction Rate</div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-3xl transform hover:scale-105 transition-all duration-300 shadow-xl">
              <Leaf className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
              <p className="text-green-100 mb-6">Committed to protecting our planet for future generations.</p>
              <div className="text-3xl font-bold">Carbon</div>
              <div className="text-green-100 text-sm">Neutral Since 2022</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-3xl transform hover:scale-105 transition-all duration-300 shadow-xl">
              <Award className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-purple-100 mb-6">Continuously pushing boundaries to create better shopping experiences.</p>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-purple-100 text-sm">Patents Filed</div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-3xl transform hover:scale-105 transition-all duration-300 shadow-xl">
              <Globe className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Global Impact</h3>
              <p className="text-orange-100 mb-6">Making a positive difference in communities worldwide.</p>
              <div className="text-3xl font-bold">150+</div>
              <div className="text-orange-100 text-sm">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders driving our mission and shaping the future of commerce.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-sm">Connect on LinkedIn</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-semibold mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Customers Say</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real feedback from real customers who trust us with their shopping needs.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
              <div className="text-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                />
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className="text-lg font-semibold">{testimonials[currentTestimonial].name}</div>
                <div className="text-blue-200">{testimonials[currentTestimonial].role}</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our offices around the world, bringing us closer to the communities we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="New York Office"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">New York, USA</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                Headquarters
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                Est. 2015
              </div>
              <div className="text-2xl font-bold text-blue-600">2,500+</div>
              <div className="text-gray-600 text-sm">Employees</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="London Office"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">London, UK</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                European Hub
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                Est. 2018
              </div>
              <div className="text-2xl font-bold text-blue-600">800+</div>
              <div className="text-gray-600 text-sm">Employees</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Singapore Office"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Singapore</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                Asia Pacific Hub
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                Est. 2020
              </div>
              <div className="text-2xl font-bold text-blue-600">600+</div>
              <div className="text-gray-600 text-sm">Employees</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Paris Office"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Paris, France</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                Innovation Center
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                Est. 2022
              </div>
              <div className="text-2xl font-bold text-blue-600">400+</div>
              <div className="text-gray-600 text-sm">Employees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Performance Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key metrics that demonstrate our commitment to operational excellence and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors duration-300">
              <div className="text-4xl font-bold text-green-600 mb-2 flex items-center justify-center">
                99.9%
                <TrendingUp className="w-6 h-6 ml-2" />
              </div>
              <div className="text-gray-900 font-semibold mb-1">Uptime</div>
              <div className="text-gray-600 text-sm">+0.1% from last year</div>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2 flex items-center justify-center">
                2.3s
                <TrendingUp className="w-6 h-6 ml-2 text-green-500" />
              </div>
              <div className="text-gray-900 font-semibold mb-1">Page Load Time</div>
              <div className="text-gray-600 text-sm">-0.5s improvement</div>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-colors duration-300">
              <div className="text-4xl font-bold text-purple-600 mb-2 flex items-center justify-center">
                4.8
                <Star className="w-6 h-6 ml-2 text-yellow-500 fill-current" />
              </div>
              <div className="text-gray-900 font-semibold mb-1">Customer Rating</div>
              <div className="text-gray-600 text-sm">Based on 2M+ reviews</div>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-2xl hover:bg-orange-100 transition-colors duration-300">
              <div className="text-4xl font-bold text-orange-600 mb-2 flex items-center justify-center">
                24h
                <TrendingUp className="w-6 h-6 ml-2 text-green-500" />
              </div>
              <div className="text-gray-900 font-semibold mb-1">Avg. Response Time</div>
              <div className="text-gray-600 text-sm">Customer support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Awards & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry recognition for our commitment to excellence, innovation, and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-white p-8 rounded-3xl transform hover:scale-105 transition-all duration-300 shadow-xl">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">E-commerce Excellence Award</h3>
              <div className="text-yellow-100 mb-4">2024 • Industry Leadership</div>
              <p className="text-yellow-100 text-sm">Recognized for outstanding innovation in online retail experiences.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-3xl transform hover:scale-105 transition-all duration-300 shadow-xl">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Customer Service Champion</h3>
              <div className="text-blue-100 mb-4">2023 • Service Excellence</div>
              <p className="text-blue-100 text-sm">Awarded for exceptional customer support and satisfaction rates.</p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-3xl transform hover:scale-105 transition-all duration-300 shadow-xl">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Sustainability Leader</h3>
              <div className="text-green-100 mb-4">2022 • Environmental Impact</div>
              <p className="text-green-100 text-sm">Honored for carbon-neutral operations and eco-friendly initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Impact */}
      <section className="py-20 bg-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Sustainability Impact</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Our commitment to environmental responsibility and creating a sustainable future for all.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold mb-2">Carbon</div>
              <div className="text-green-100 mb-4">Neutral Since 2022</div>
              <div className="w-16 h-16 bg-green-400 rounded-full mx-auto flex items-center justify-center mb-4">
                <Leaf className="w-8 h-8 text-green-800" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-green-100 mb-4">Renewable Energy</div>
              <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-yellow-600 rounded-full"></div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold mb-2">90%</div>
              <div className="text-green-100 mb-4">Recyclable Packaging</div>
              <div className="w-16 h-16 bg-blue-400 rounded-full mx-auto flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors">
              Learn About Our Sustainability Initiatives
            </button>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Company Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes our workplace special and why talented people choose to build their careers with us.
            </p>
          </div>

          {/* Culture Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['values', 'benefits', 'diversity', 'growth'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            {activeTab === 'values' && (
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Values in Action</h3>
                <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                  We live by our values every day, creating an environment where innovation thrives and people feel empowered to do their best work.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                    <div className="text-gray-600">Employee Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">4.8</div>
                    <div className="text-gray-600">Glassdoor Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">92%</div>
                    <div className="text-gray-600">Would Recommend</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Benefits</h3>
                <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                  We offer industry-leading benefits that support your health, wealth, and overall well-being.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <div className="text-2xl font-bold text-blue-600 mb-2">Health</div>
                    <div className="text-gray-600 text-sm">Premium medical, dental, vision coverage</div>
                  </div>
                  <div className="bg-green-50 p-6 rounded-2xl">
                    <div className="text-2xl font-bold text-green-600 mb-2">Wealth</div>
                    <div className="text-gray-600 text-sm">401k matching, stock options, bonuses</div>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-2xl">
                    <div className="text-2xl font-bold text-purple-600 mb-2">Time Off</div>
                    <div className="text-gray-600 text-sm">Unlimited PTO, sabbaticals, holidays</div>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-2xl">
                    <div className="text-2xl font-bold text-orange-600 mb-2">Growth</div>
                    <div className="text-gray-600 text-sm">Learning budget, conferences, mentorship</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'diversity' && (
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Diversity & Inclusion</h3>
                <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                  We're building a diverse, inclusive workplace where everyone can thrive and bring their authentic selves to work.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-pink-600 mb-2">48%</div>
                    <div className="text-gray-600">Women in Leadership</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-indigo-600 mb-2">65%</div>
                    <div className="text-gray-600">Underrepresented Groups</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-600 mb-2">12</div>
                    <div className="text-gray-600">Employee Resource Groups</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'growth' && (
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Career Growth</h3>
                <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                  We invest in your professional development with clear career paths, mentorship, and continuous learning opportunities.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">$5K</div>
                    <div className="text-gray-600">Annual Learning Budget</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                    <div className="text-gray-600">Internal Promotions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
                    <div className="text-gray-600">Learning Courses</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Innovation & Technology */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Innovation & Technology</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Cutting-edge technology and innovative solutions that power the future of commerce.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">AI-Powered Recommendations</h3>
              <p className="text-purple-100 mb-4">
                Machine learning algorithms that understand customer preferences and deliver personalized shopping experiences.
              </p>
              <div className="text-3xl font-bold">98.5%</div>
              <div className="text-purple-200 text-sm">Accuracy Rate</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">AR Try-On Technology</h3>
              <p className="text-purple-100 mb-4">
                Augmented reality features that let customers visualize products before purchase, reducing returns by 40%.
              </p>
              <div className="text-3xl font-bold">2M+</div>
              <div className="text-purple-200 text-sm">AR Sessions Monthly</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Blockchain Security</h3>
              <p className="text-purple-100 mb-4">
                Advanced blockchain technology ensuring secure transactions and protecting customer data with military-grade encryption.
              </p>
              <div className="text-3xl font-bold">99.99%</div>
              <div className="text-purple-200 text-sm">Security Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Journey?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Whether you're looking to shop with us, work with us, or partner with us, we'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/careers"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Explore Careers
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
            >
              Get in Touch
            </Link>
            <Link
              href="/"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors inline-flex items-center justify-center"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}