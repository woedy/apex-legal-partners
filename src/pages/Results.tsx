import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import LegalDisclaimer from "@/components/shared/LegalDisclaimer";
import { caseResults } from "@/data/siteData";

const Results = () => {
  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
              Track Record
            </p>
            <h1 className="text-4xl md:text-5xl font-heading mb-4">
              Representative Matters
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg max-w-2xl">
              A selection of matters that illustrate the breadth and depth of our
              practice. Every case reflects our commitment to achieving the best
              possible outcome.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-4xl">
          <LegalDisclaimer variant="results" />

          <div className="mt-8 space-y-6">
            {caseResults.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="secondary">{result.practiceArea}</Badge>
                  <span className="text-xs text-muted-foreground font-body">
                    {result.year}
                  </span>
                </div>
                <h3 className="text-xl font-heading text-foreground mb-3">
                  {result.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-3">
                  {result.summary}
                </p>
                <p className="text-xs text-muted-foreground/60 font-body italic">
                  {result.disclaimer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Results;
