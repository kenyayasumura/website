import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server, Laptop, Languages } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "App Development",
      description: "Custom application development for web, mobile, and desktop platforms.",
      icon: <Code className="h-12 w-12" />,
      details: [
        "Web applications using React, Next.js, and other modern frameworks",
        "Mobile apps for iOS and Android using React Native",
        "Desktop applications using Electron",
        "Full-stack development with various backend technologies",
      ],
    },
    {
      title: "IT Consulting",
      description: "Expert advice on IT systems, architecture, and technology solutions.",
      icon: <Server className="h-12 w-12" />,
      details: [
        "System architecture design and optimization",
        "Technology stack recommendations",
        "Legacy system modernization",
        "Cloud migration strategies",
        "Security assessments and improvements",
      ],
    },
    {
      title: "Programming Teaching",
      description: "Personalized programming lessons for beginners and advanced learners.",
      icon: <Laptop className="h-12 w-12" />,
      details: [
        "JavaScript, TypeScript, and React fundamentals",
        "Python programming for beginners and advanced users",
        "Backend development with Node.js, Express, and databases",
        "Data structures and algorithms",
        "Project-based learning with real-world applications",
      ],
    },
    {
      title: "Language Teaching",
      description: "English and Japanese language instruction for all proficiency levels.",
      icon: <Languages className="h-12 w-12" />,
      details: [
        "English conversation and writing for all levels",
        "Japanese language from beginner to advanced",
        "Business English and Japanese for professionals",
        "Technical language for IT professionals",
        "Customized curriculum based on your goals",
      ],
    },
  ];

  return (
    <main className="container py-12 md:py-24">
      <h1 className="text-4xl font-bold mb-8">My Services</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        I offer a range of services to help you achieve your goals, from custom application development to personalized teaching.
      </p>

      <div className="space-y-16">
        {services.map((service) => (
          <section key={service.title} id={service.title.toLowerCase().replace(/\s+/g, "-")} className="scroll-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-primary">{service.icon}</div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                <Button asChild>
                  <Link href="/contact">Request {service.title}</Link>
                </Button>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>What I Offer</CardTitle>
                  <CardDescription>Comprehensive {service.title.toLowerCase()} services tailored to your needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1 mt-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        </div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    Custom solutions available based on your specific requirements.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Contact me today to discuss your project or learning goals. I&apos;m here to help you succeed.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Me</Link>
        </Button>
      </div>
    </main>
  );
}
