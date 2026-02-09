import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { attorneys, practiceAreas } from "@/data/siteData";

const practiceAreaTitles = practiceAreas.map((a) => a.title);

const Attorneys = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!activeFilter) return attorneys;
    return attorneys.filter((a) => a.practiceAreas.includes(activeFilter));
  }, [activeFilter]);

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
              Our Team
            </p>
            <h1 className="text-4xl md:text-5xl font-heading mb-4">
              Our Attorneys
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg max-w-2xl">
              Experienced attorneys with the skill, judgment, and dedication to
              handle your most important legal matters.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Filters */}
          <div className="mb-10 flex flex-wrap gap-2">
            <Badge
              variant={activeFilter === null ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setActiveFilter(null)}
            >
              All
            </Badge>
            {practiceAreaTitles.map((title) => (
              <Badge
                key={title}
                variant={activeFilter === title ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() =>
                  setActiveFilter(title === activeFilter ? null : title)
                }
              >
                {title}
              </Badge>
            ))}
          </div>

          {/* Attorney Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((attorney, i) => (
              <motion.div
                key={attorney.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Link
                  to={`/attorneys/${attorney.slug}`}
                  className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-all duration-200"
                >
                  <div className="aspect-[3/4] bg-muted flex items-center justify-center">
                    <span className="text-4xl font-heading text-muted-foreground/50">
                      {attorney.initials}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-heading text-foreground group-hover:text-accent transition-colors">
                      {attorney.name}
                    </h3>
                    <p className="text-sm text-accent font-body mb-2">
                      {attorney.title}
                    </p>
                    <p className="text-sm text-muted-foreground font-body line-clamp-2">
                      {attorney.bioShort}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground font-body text-lg">
                No attorneys match the selected filter.
              </p>
              <button
                onClick={() => setActiveFilter(null)}
                className="text-accent font-body mt-2 hover:underline"
              >
                Clear filter
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Attorneys;
