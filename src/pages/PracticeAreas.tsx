import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { practiceAreas } from "@/data/siteData";

const allTags = Array.from(new Set(practiceAreas.flatMap((a) => a.tags)));

const PracticeAreas = () => {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return practiceAreas.filter((area) => {
      const matchesSearch =
        !search ||
        area.title.toLowerCase().includes(search.toLowerCase()) ||
        area.shortDescription.toLowerCase().includes(search.toLowerCase());
      const matchesTag = !activeTag || area.tags.includes(activeTag);
      return matchesSearch && matchesTag;
    });
  }, [search, activeTag]);

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
              What We Do
            </p>
            <h1 className="text-4xl md:text-5xl font-heading mb-4">
              Practice Areas
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg max-w-2xl">
              Comprehensive legal counsel across six core disciplines, each
              staffed by attorneys with deep subject-matter expertise.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Search & Filters */}
          <div className="mb-10 space-y-4">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search practice areas..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={activeTag === null ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setActiveTag(null)}
              >
                All
              </Badge>
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={activeTag === tag ? "default" : "outline"}
                  className="cursor-pointer capitalize"
                  onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground font-body text-lg">
                No practice areas match your search.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveTag(null);
                }}
                className="text-accent font-body mt-2 hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filtered.map((area, i) => (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <Link
                    to={`/practice-areas/${area.slug}`}
                    className="group block bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all duration-200 h-full"
                  >
                    <h2 className="text-xl font-heading text-foreground mb-3 group-hover:text-accent transition-colors">
                      {area.title}
                    </h2>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                      {area.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-accent text-sm font-body font-medium">
                      Learn more{" "}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default PracticeAreas;
