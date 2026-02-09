import { motion } from "framer-motion";
import { Award, Briefcase, Users, Globe } from "lucide-react";

const signals = [
  { icon: Award, label: "15+ Years", sub: "Of Experience" },
  { icon: Briefcase, label: "500+", sub: "Matters Handled" },
  { icon: Users, label: "Client-First", sub: "Approach" },
  { icon: Globe, label: "Multi-Jurisdiction", sub: "Support" },
];

const TrustSignals = () => {
  return (
    <section className="py-12 md:py-16 border-b border-border">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {signals.map((signal, i) => (
            <motion.div
              key={signal.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <signal.icon className="w-6 h-6 text-accent mb-1" />
              <span className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
                {signal.label}
              </span>
              <span className="text-sm text-muted-foreground font-body">
                {signal.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
