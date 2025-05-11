import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Kenya Yasumura
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              Full-Stack Developer & IT Consultant
            </p>
          </div>
          <div className="max-w-[700px] text-muted-foreground md:text-xl">
            <p>
              Building innovative applications, providing IT consulting services, and teaching programming and languages.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/services">My Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
