import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { caseResults } from "@/data/siteData";
import { Badge } from "@/components/ui/badge";

const RepresentativeMatters = () => {
  const featured = caseResults.slice(0, 3);

  return (
    <section className="section-padding bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm font-body tracking-[0.2em] uppercase mb-3">
            Track Record
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">
            Representative Matters
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {featured.map((result, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <Badge
                variant="secondary"
                className="mb-3 font-body text-xs"
              >
                {result.practiceArea}
              </Badge>
              <h3 className="text-base font-heading font-semibold text-foreground mb-2 leading-snug">
                {result.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-3">
                {result.summary}
              </p>
              <p className="text-xs text-muted-foreground/60 font-body italic">
                {result.disclaimer}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            to="/results"
            className="inline-flex items-center gap-2 text-accent font-body font-medium hover:gap-3 transition-all"
          >
            View all results <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RepresentativeMatters;
