import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, LinkIcon } from "lucide-react";
import TestimonialsCarousel from "@/components/testimonials";
import Link from "next/link";
import Head from "next/head";

const features = [
  {
    icon: Calendar,
    title: "Schedule Vendor",
    description: "Easily set up and customize your event types",
  },
  {
    icon: Clock,
    title: "Manage Availability",
    description: "Define your availability to streamline scheduling",
  },
  {
    icon: LinkIcon,
    title: "Custom Links",
    description: "Share your personalized scheduling link",
  },
];

const howItWorks = [
  { step: "Sign Up/Login", description: "Create your Vendor Scheduling account" },
  { step: "Set Availability", description: "Define when you're available for meetings" },
  { step: "Share Your Link", description: "Send your scheduling link to clients or colleagues" },
  { step: "Get Booked", description: "Receive confirmations for new appointments automatically" },
];

const Home = () => {
  return (
    <>
      <Head>
        <title>AMC/CMC Scheduling</title>
        <meta name="description" content="Easily schedule and manage AMC/CMC for hospital equipment to avoid vendor conflicts." />
      </Head>
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 mb-24 text-left">
          <div className="lg:w-1/2 w-full">
            <h1 className="text-5xl sm:text-7xl font-extrabold gradient-title pb-6">
              AMC/CMC Scheduling
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10">
              Smart AMC/CMC Scheduling & Management System helps streamline the creation and management of AMC and CMC for hospital equipment. Our system ensures seamless scheduling, preventing time clashes between two or more vendors.
            </p>
            <Link href="/dashboard">
              <Button size="lg" className="text-lg">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="lg:w-1/2 flex justify-center sm:hidden lg:flex">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/poster.png"
                alt="Scheduling illustration"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index}>
                  <CardHeader className="text-center">
                    <IconComponent className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
                    <CardTitle className="text-blue-600">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Reviews and Ratings</h2>
          <TestimonialsCarousel />
        </div>

        {/* How It Works Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.step}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Scheduling?</h2>
          <p className="text-xl mb-6">Join hundreds of hospital professionals who trust our scheduler for efficient time management.</p>
          <Link href="/dashboard" aria-label="Start Scheduling">
            <Button size="lg" variant="secondary" className="text-blue-600">
              Start Scheduling <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;