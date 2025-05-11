import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main className="container py-12 md:py-24">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Background</h2>
            <p className="text-muted-foreground">
              I&apos;m Kenya Yasumura, a passionate full-stack developer with extensive experience in building applications and providing IT consulting services.
            </p>
            <p className="text-muted-foreground">
              With a strong background in both frontend and backend development, I create seamless, user-friendly applications that solve real-world problems.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium">Frontend</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>HTML / CSS</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Backend</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>SQL / NoSQL</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Languages</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium">English</h3>
                <p className="text-muted-foreground">Fluent</p>
              </div>
              <div>
                <h3 className="font-medium">Japanese</h3>
                <p className="text-muted-foreground">Native</p>
              </div>
            </div>
          </section>
        </div>
        
        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium">Full-Stack Developer</h3>
                <p className="text-sm text-muted-foreground">2020 - Present</p>
                <p className="text-muted-foreground mt-2">
                  Developing web and mobile applications for clients across various industries. Specializing in creating responsive, user-friendly interfaces and robust backend systems.
                </p>
              </div>
              <div>
                <h3 className="font-medium">IT Consultant</h3>
                <p className="text-sm text-muted-foreground">2018 - Present</p>
                <p className="text-muted-foreground mt-2">
                  Providing technical consulting services to businesses looking to optimize their IT infrastructure and implement new technologies.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Programming &amp; Language Instructor</h3>
                <p className="text-sm text-muted-foreground">2019 - Present</p>
                <p className="text-muted-foreground mt-2">
                  Teaching programming concepts and languages (English/Japanese) to students of all levels, from beginners to advanced learners.
                </p>
              </div>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Education</h2>
            <div>
              <h3 className="font-medium">Bachelor of Computer Science</h3>
              <p className="text-sm text-muted-foreground">University of Technology, 2018</p>
            </div>
          </section>
        </div>
      </div>
      
      <div className="mt-12 flex justify-center">
        <Button asChild size="lg">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </main>
  );
}
