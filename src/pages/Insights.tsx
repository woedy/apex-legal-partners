import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ArrowRight, Calendar, User } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { insights } from "@/data/siteData";

const allTags = Array.from(new Set(insights.flatMap((a) => a.tags)));

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Insights = () => {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return insights.filter((article) => {
      const matchesSearch =
        !search ||
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesTag = !activeTag || article.tags.includes(activeTag);
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
              Knowledge & Analysis
            </p>
            <h1 className="text-4xl md:text-5xl font-heading mb-4">
              Insights
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg max-w-2xl">
              Legal analysis, practical guidance, and commentary on developments
              that matter to our clients.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-4xl">
          {/* Search & Tags */}
          <div className="mb-10 space-y-4">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
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
                  className="cursor-pointer"
                  onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Articles */}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground font-body text-lg">
                No articles match your search.
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
            <div className="space-y-6">
              {filtered.map((article, i) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <Link
                    to={`/insights/${article.slug}`}
                    className="group block bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-muted-foreground font-body">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(article.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        {article.author}
                      </span>
                    </div>
                    <h2 className="text-xl font-heading text-foreground mb-2 group-hover:text-accent transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-accent text-sm font-body font-medium">
                        Read{" "}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
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

export default Insights;
