import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server, Laptop, Languages } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("services");
  
  const services = [
    {
      id: "app-development",
      title: t("appDevelopment.title"),
      description: t("appDevelopment.description"),
      icon: <Code className="h-12 w-12 text-primary" />,
      details: t.raw("appDevelopment.details")
    },
    {
      id: "it-consulting",
      title: t("itConsulting.title"),
      description: t("itConsulting.description"),
      icon: <Server className="h-12 w-12 text-primary" />,
      details: t.raw("itConsulting.details")
    },
    {
      id: "programming-teaching",
      title: t("programmingTeaching.title"),
      description: t("programmingTeaching.description"),
      icon: <Laptop className="h-12 w-12 text-primary" />,
      details: t.raw("programmingTeaching.details")
    },
    {
      id: "language-teaching",
      title: t("languageTeaching.title"),
      description: t("languageTeaching.description"),
      icon: <Languages className="h-12 w-12 text-primary" />,
      details: t.raw("languageTeaching.details")
    }
  ];

  return (
    <main className="container py-12 md:py-24">
      <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        {t("description")}
      </p>

      <div className="space-y-16">
        {services.map((service) => (
          <section key={service.id} id={service.id} className="scroll-mt-20">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                {service.icon}
                <div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg">{service.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-medium mb-4">{t("whatIOffer")}</h3>
                <p className="mb-6">
                  {t("comprehensive", { service: service.title.toLowerCase() })}
                </p>
                <ul className="list-disc list-inside space-y-2 mb-8">
                  {service.details.map((detail: string, index: number) => (
                    <li key={index} className="text-muted-foreground">{detail}</li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mb-6">
                  {t("customSolutions")}
                </p>
                <Button asChild>
                  <Link href="/contact">
                    {t("request", { service: service.title })}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </section>
        ))}
      </div>

      <div className="mt-16 bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">{t("getStarted.title")}</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          {t("getStarted.description")}
        </p>
        <Button asChild size="lg">
          <Link href="/contact">{t("getStarted.cta")}</Link>
        </Button>
      </div>
    </main>
  );
}
