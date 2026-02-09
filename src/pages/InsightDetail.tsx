import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { insights } from "@/data/siteData";

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const InsightDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = insights.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/insights" replace />;

  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <Link
            to="/insights"
            className="inline-flex items-center gap-1 text-primary-foreground/60 hover:text-primary-foreground text-sm font-body mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All Insights
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-primary-foreground/60 font-body">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(article.date)}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {article.author}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge
                  key={tag}
                  className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-3xl">
          <p className="text-lg text-foreground font-body leading-relaxed mb-10 border-l-4 border-accent pl-6">
            {article.excerpt}
          </p>

          <div className="space-y-8">
            {article.contentSections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-heading text-foreground mb-4">
                  {section.heading}
                </h2>
                {section.body.split("\n\n").map((paragraph, j) => (
                  <p
                    key={j}
                    className="text-muted-foreground font-body leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="bg-muted rounded-lg p-6 md:p-8 text-center">
              <h3 className="text-xl font-heading text-foreground mb-2">
                Questions About This Topic?
              </h3>
              <p className="text-muted-foreground font-body text-sm mb-4">
                Our team is available to discuss how these issues may affect your
                specific situation.
              </p>
              <Button asChild variant="accent">
                <Link to="/consultation">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InsightDetail;
