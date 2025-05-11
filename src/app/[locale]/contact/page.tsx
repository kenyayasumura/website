import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MessageSquare, Github, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");
  const tServices = useTranslations("services");
  
  return (
    <main className="container py-12 md:py-24">
      <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        {t("description")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card>
          <CardHeader>
            <Mail className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>{t("email.title")}</CardTitle>
            <CardDescription>{t("email.description")}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">kenyayasumura2020@gmail.com</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <a href="mailto:kenyayasumura2020@gmail.com">{t("email.action")}</a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Phone className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>{t("phone.title")}</CardTitle>
            <CardDescription>{t("phone.description")}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{t("phone.note")}</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full" disabled>
              <span>{t("phone.action")}</span>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <MessageSquare className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>{t("social.title")}</CardTitle>
            <CardDescription>{t("social.description")}</CardDescription>
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
              {t("social.note")}
            </p>
          </CardFooter>
        </Card>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>{t("form.title")}</CardTitle>
            <CardDescription>
              {t("form.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t("form.name")}
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder={t("form.name")}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t("form.email")}
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 border rounded-md"
                    placeholder={t("form.email")}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  {t("form.subject")}
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder={t("form.subject")}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {t("form.message")}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-2 border rounded-md"
                  placeholder={t("form.message")}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium">
                  {t("form.service")}
                </label>
                <select id="service" className="w-full p-2 border rounded-md">
                  <option value="">{t("form.selectService")}</option>
                  <option value="app-development">{tServices("appDevelopment.title")}</option>
                  <option value="it-consulting">{tServices("itConsulting.title")}</option>
                  <option value="programming-teaching">{tServices("programmingTeaching.title")}</option>
                  <option value="language-teaching">{tServices("languageTeaching.title")}</option>
                </select>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full">{t("form.submit")}</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
