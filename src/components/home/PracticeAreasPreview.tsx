import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Users, Building2, Scale, Lightbulb, Heart } from "lucide-react";
import { practiceAreas } from "@/data/siteData";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "corporate-commercial": Briefcase,
  "employment-labor": Users,
  "real-estate-property": Building2,
  "litigation-dispute-resolution": Scale,
  "intellectual-property": Lightbulb,
  "family-estate-planning": Heart,
};

const PracticeAreasPreview = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm font-body tracking-[0.2em] uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">
            Practice Areas
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area, i) => {
            const Icon = iconMap[area.slug] || Briefcase;
            return (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  to={`/practice-areas/${area.slug}`}
                  className="group block bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                    {area.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-body font-medium group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasPreview;
