import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MessageSquare } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Ready to start a project or have questions? Contact me today.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader>
              <Mail className="h-6 w-6 mb-2 text-primary" />
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
              <Phone className="h-6 w-6 mb-2 text-primary" />
              <CardTitle>Phone</CardTitle>
              <CardDescription>Call for immediate assistance</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Contact form for phone details</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Request Call</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <MessageSquare className="h-6 w-6 mb-2 text-primary" />
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>Fill out the form with your inquiry</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Get a response within 24 hours</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/contact">Contact Form</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
