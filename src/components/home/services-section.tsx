import React from "react";
import Link from "next/link";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Server, Laptop, Languages } from "lucide-react";

const services = [
  {
    title: "App Development",
    description: "Custom application development for web, mobile, and desktop platforms.",
    icon: <Code className="h-8 w-8" />,
    href: "/services#app-development",
  },
  {
    title: "IT Consulting",
    description: "Expert advice on IT systems, architecture, and technology solutions.",
    icon: <Server className="h-8 w-8" />,
    href: "/services#it-consulting",
  },
  {
    title: "Programming Teaching",
    description: "Personalized programming lessons for beginners and advanced learners.",
    icon: <Laptop className="h-8 w-8" />,
    href: "/services#programming-teaching",
  },
  {
    title: "Language Teaching",
    description: "English and Japanese language instruction for all proficiency levels.",
    icon: <Languages className="h-8 w-8" />,
    href: "/services#language-teaching",
  },
];

export function ServicesSection() {
  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">My Services</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Comprehensive solutions tailored to your needs
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col h-full">
              <CardHeader>
                <div className="mb-2 text-primary">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto pt-4">
                <Button asChild variant="outline" className="w-full">
                  <Link href={service.href}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
