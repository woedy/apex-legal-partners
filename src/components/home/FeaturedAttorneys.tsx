import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { attorneys } from "@/data/siteData";

const avatarColors = [
  "bg-primary",
  "bg-accent",
  "bg-foreground",
];

const FeaturedAttorneys = () => {
  const featured = attorneys.slice(0, 3);

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
            Our Team
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">
            Featured Attorneys
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {featured.map((attorney, i) => (
            <motion.div
              key={attorney.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                to={`/attorneys/${attorney.slug}`}
                className="group block text-center"
              >
                <div
                  className={`w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center ${avatarColors[i % avatarColors.length]} group-hover:scale-105 transition-transform duration-300`}
                >
                  <span className="text-primary-foreground text-2xl font-heading font-semibold">
                    {attorney.initials}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                  {attorney.name}
                </h3>
                <p className="text-accent text-sm font-body font-medium mb-2">
                  {attorney.title}
                </p>
                <p className="text-muted-foreground text-sm font-body">
                  {attorney.practiceAreas.join(" · ")}
                </p>
              </Link>
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
            to="/attorneys"
            className="inline-flex items-center gap-2 text-accent font-body font-medium hover:gap-3 transition-all"
          >
            Meet the full team <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedAttorneys;
