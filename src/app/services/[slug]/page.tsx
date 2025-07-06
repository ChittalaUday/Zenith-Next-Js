"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getIcon } from "@/lib/icons";
import { getColorByString } from "@/lib/color";
import { serviceFaqs, serviceGuides } from "@/lib/faq-data";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { NavBar } from "@/components/home/nav-bar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FooterSection } from "@/components/footer-section";

export default function SubServicePage() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;
  const [parent, setParent] = useState<any>(null);
  const [sub, setSub] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => {
        let found = false;
        for (let i = 0; i < data.data.length; i++) {
          const cat = data.data[i];
          if (cat.subServices) {
            for (let j = 0; j < cat.subServices.length; j++) {
              const s = cat.subServices[j];
              const sSlug = s.title.toLowerCase().replace(/\s+/g, "-");
              if (sSlug === slug) {
                setParent({ ...cat, colorIdx: i });
                setSub({ ...s, colorIdx: j });
                found = true;
                break;
              }
            }
          }
        }
        if (!found) setNotFound(true);
      });
  }, [slug]);

  if (notFound) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="text-muted-foreground mb-6">The service you are looking for does not exist.</p>
        <Button onClick={() => router.push("/services")}>Back to Services</Button>
      </div>
    );
  }

  if (!parent || !sub) {
    return <div className="flex items-center justify-center min-h-[60vh]">Loading...</div>;
  }

  const Icon = getIcon(parent.icon);
  const subSlug = sub.title.toLowerCase().replace(/\s+/g, "-");
  const faqs = serviceFaqs[subSlug] || [];
  const guides = serviceGuides[subSlug] || [];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavBar />
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-10">
        {/* Unified Product Card */}
        <Card className="flex flex-col gap-6 p-8 shadow-lg border-border/60 bg-card/90 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-2">
            <div className={`rounded-xl p-4 ${getColorByString(parent.title)}`}>{Icon && <Icon className="w-10 h-10" />}</div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold">{sub.title}</h1>
                <Badge variant="secondary" className={`px-3 py-1 ${getColorByString(sub.title)}`}>{sub.price}</Badge>
                {sub.estimation && (
                  <Badge variant="outline" className="text-xs px-2 py-0.5 flex items-center gap-1">
                    {(() => {
                      const ClockIcon = getIcon("Clock");
                      return <ClockIcon className="w-4 h-4" />;
                    })()}
                    {sub.estimation}
                  </Badge>
                )}
              </div>
              <div className="text-muted-foreground text-base mt-1">{parent.title}</div>
              <div className="text-muted-foreground text-sm">{sub.desc}</div>
            </div>
          </div>

          {sub.details && (
            <div className="prose prose-sm max-w-none text-foreground bg-muted/30 rounded-lg p-4 mb-2">
              {sub.details}
            </div>
          )}

          <div className="flex flex-col gap-4 items-start">
            {sub.documents && sub.documents.length > 0 && (
              <div className="flex flex-col gap-1 w-full">
                <span className="font-semibold text-base flex items-center gap-1 mb-1">{(() => {
                  const FileTextIcon = getIcon("FileText");
                  return <FileTextIcon className="w-4 h-4" />;
                })()} Documents Required:</span>
                <ul className="list-disc list-inside ml-2 text-sm text-muted-foreground">
                  {sub.documents.map((doc: string) => (
                    <li key={doc}>{doc}</li>
                  ))}
                </ul>
              </div>
            )}
            {typeof sub.rating === "number" && (
              <div className="flex items-center gap-1 text-yellow-600 font-medium mt-2">
                {(() => {
                  const StarIcon = getIcon("Star");
                  return <StarIcon className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />;
                })()}
                {sub.rating.toFixed(1)}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2 mt-6">
            <Button size="lg" className="w-full" variant="default">Get Started</Button>
            <Button size="lg" className="w-full" variant="outline" onClick={() => router.push("/services")}>Back to Services</Button>
          </div>
        </Card>

        {/* FAQ Section */}
        <section>
          <div className="text-left mb-4 flex items-center gap-2">
            <Badge variant="secondary" className="text-sm">FAQ</Badge>
            <span className="text-lg font-bold">Frequently Asked Questions</span>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.length > 0 ? faqs.map((faq, idx) => (
              <AccordionItem value={`faq-${idx}`} key={idx}>
                <AccordionTrigger className="text-base font-semibold flex items-center gap-2">
                  {(() => {
                    const HelpCircleIcon = getIcon("HelpCircle");
                    return <HelpCircleIcon className="w-5 h-5 text-primary" />;
                  })()}
                  {faq.question}
                  {faq.label && <Badge variant="secondary" className="ml-2 text-xs px-2 py-0.5">{faq.label}</Badge>}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            )) : (
              <div className="text-center text-muted-foreground">No FAQs available for this service yet.</div>
            )}
          </Accordion>
        </section>

        {/* Guides Section */}
        <section className="mt-10">
          <Card className="p-6 shadow-lg border-border/60 bg-card/90">
            <div className="font-semibold text-lg mb-4 flex items-center gap-2">
              {(() => {
                const BookOpenIcon = getIcon("BookOpen");
                return <BookOpenIcon className="w-5 h-5 text-primary" />;
              })()}
              Related Guides
            </div>
            <ul className="flex flex-col gap-3">
              {guides.length > 0 ? guides.map((guide, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  {(() => {
                    const Link2Icon = getIcon("Link2");
                    return <Link2Icon className="w-4 h-4 text-muted-foreground" />;
                  })()}
                  <a href={guide.url} className="text-primary underline text-sm hover:text-primary/80 transition-colors">{guide.title}</a>
                  {guide.label && <Badge variant="outline" className="ml-2 text-xs px-2 py-0.5">{guide.label}</Badge>}
                </li>
              )) : <li className="text-muted-foreground text-sm">No guides available for this service yet.</li>}
            </ul>
          </Card>
        </section>
      </main>
      <FooterSection />
    </div>
  );
} 