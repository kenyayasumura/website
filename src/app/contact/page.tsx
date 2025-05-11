import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MessageSquare, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="container py-12 md:py-24">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        I&apos;d love to hear from you! Whether you have a project in mind, need consulting services, or are interested in learning programming or languages, feel free to reach out.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card>
          <CardHeader>
            <Mail className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Email</CardTitle>
            <CardDescription>Send me an email anytime</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">kenyayasumura2020@gmail.com</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <a href="mailto:kenyayasumura2020@gmail.com">Send Email</a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Phone className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Phone</CardTitle>
            <CardDescription>Call for immediate assistance</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Fill out the contact form to request a call</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full" disabled>
              <span>Request Call</span>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <MessageSquare className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Social Media</CardTitle>
            <CardDescription>Connect with me online</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/kenyayasumura" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              Follow me for updates on my latest projects and services.
            </p>
          </CardFooter>
        </Card>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Send Me a Message</CardTitle>
            <CardDescription>
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 border rounded-md"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="Subject of your message"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-2 border rounded-md"
                  placeholder="Your message"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium">
                  Service Interested In
                </label>
                <select id="service" className="w-full p-2 border rounded-md">
                  <option value="">Select a service</option>
                  <option value="app-development">App Development</option>
                  <option value="it-consulting">IT Consulting</option>
                  <option value="programming-teaching">Programming Teaching</option>
                  <option value="language-teaching">Language Teaching</option>
                </select>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Send Message</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
