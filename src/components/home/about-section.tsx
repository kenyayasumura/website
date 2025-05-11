import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About Me</h2>
            <p className="text-muted-foreground">
              I&apos;m Kenya Yasumura, a passionate full-stack developer with extensive experience in building applications and providing IT consulting services.
            </p>
            <p className="text-muted-foreground">
              With a strong background in both frontend and backend development, I create seamless, user-friendly applications that solve real-world problems.
            </p>
            <p className="text-muted-foreground">
              I&apos;m also dedicated to sharing my knowledge through programming and language teaching, helping others develop valuable skills in today&apos;s digital world.
            </p>
            <div className="pt-4">
              <Button asChild>
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
          <div className="bg-muted rounded-lg p-8 flex items-center justify-center">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">5+</p>
              <p className="text-muted-foreground">Years of Experience</p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <p className="text-2xl font-bold mb-1">50+</p>
                  <p className="text-muted-foreground text-sm">Projects Completed</p>
                </div>
                <div>
                  <p className="text-2xl font-bold mb-1">30+</p>
                  <p className="text-muted-foreground text-sm">Happy Clients</p>
                </div>
                <div>
                  <p className="text-2xl font-bold mb-1">10+</p>
                  <p className="text-muted-foreground text-sm">Technologies</p>
                </div>
                <div>
                  <p className="text-2xl font-bold mb-1">2</p>
                  <p className="text-muted-foreground text-sm">Languages Taught</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
