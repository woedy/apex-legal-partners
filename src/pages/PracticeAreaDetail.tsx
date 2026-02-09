import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { practiceAreas } from "@/data/siteData";

const PracticeAreaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = practiceAreas.find((a) => a.slug === slug);

  if (!area) return <Navigate to="/practice-areas" replace />;

  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <Link
            to="/practice-areas"
            className="inline-flex items-center gap-1 text-primary-foreground/60 hover:text-primary-foreground text-sm font-body mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All Practice Areas
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading mb-4">
              {area.title}
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg max-w-2xl">
              {area.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-heading text-foreground mb-4">
                  Overview
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {area.fullDescription}
                </p>
              </div>

              {/* FAQs */}
              {area.faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-heading text-foreground mb-4">
                    Frequently Asked Questions
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {area.faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`faq-${i}`}>
                        <AccordionTrigger className="text-left font-body text-foreground">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-heading text-foreground mb-4">
                  Our Services
                </h3>
                <ul className="space-y-3">
                  {area.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-2 text-sm font-body text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary rounded-lg p-6 text-primary-foreground">
                <h3 className="text-lg font-heading mb-2">
                  Need Legal Guidance?
                </h3>
                <p className="text-primary-foreground/70 text-sm font-body mb-4">
                  Schedule a consultation to discuss your {area.title.toLowerCase()} matter with an experienced attorney.
                </p>
                <Button asChild variant="accent" className="w-full">
                  <Link to="/consultation">Book a Consultation</Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PracticeAreaDetail;
