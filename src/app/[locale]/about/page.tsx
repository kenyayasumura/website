import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");
  
  return (
    <main className="container py-12 md:py-24">
      <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{t("background.title")}</h2>
            <p className="text-muted-foreground">
              {t("background.description1")}
            </p>
            <p className="text-muted-foreground">
              {t("background.description2")}
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{t("skills.title")}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium">{t("skills.frontend")}</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>HTML / CSS</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">{t("skills.backend")}</h3>
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
            <h2 className="text-2xl font-semibold">{t("languages.title")}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium">{t("languages.english")}</h3>
                <p className="text-muted-foreground">{t("languages.fluent")}</p>
              </div>
              <div>
                <h3 className="font-medium">{t("languages.japanese")}</h3>
                <p className="text-muted-foreground">{t("languages.native")}</p>
              </div>
            </div>
          </section>
        </div>
        
        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{t("experience.title")}</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium">{t("experience.fullstack.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("experience.fullstack.period")}</p>
                <p className="text-muted-foreground mt-2">
                  {t("experience.fullstack.description")}
                </p>
              </div>
              <div>
                <h3 className="font-medium">{t("experience.consultant.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("experience.consultant.period")}</p>
                <p className="text-muted-foreground mt-2">
                  {t("experience.consultant.description")}
                </p>
              </div>
              <div>
                <h3 className="font-medium">{t("experience.instructor.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("experience.instructor.period")}</p>
                <p className="text-muted-foreground mt-2">
                  {t("experience.instructor.description")}
                </p>
              </div>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{t("education.title")}</h2>
            <div>
              <h3 className="font-medium">{t("education.degree")}</h3>
              <p className="text-sm text-muted-foreground">{t("education.university")}</p>
            </div>
          </section>
        </div>
      </div>
      
      <div className="mt-12 flex justify-center">
        <Button asChild size="lg">
          <Link href="/contact">{t("cta")}</Link>
        </Button>
      </div>
    </main>
  );
}
