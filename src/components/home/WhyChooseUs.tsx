import { motion } from "framer-motion";
import { Target, MessageSquare, Clock, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Strategic Thinking",
    description:
      "We look beyond the immediate issue to understand your broader objectives, crafting solutions that serve both today's needs and tomorrow's goals.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "No legal jargon, no ambiguity—just clear, actionable guidance you can understand and act on with confidence.",
  },
  {
    icon: Clock,
    title: "Responsive Service",
    description:
      "We respect your time with prompt responses, regular updates, and proactive communication throughout every engagement.",
  },
  {
    icon: TrendingUp,
    title: "Results-Focused",
    description:
      "Every strategy is designed to achieve practical, measurable outcomes. We measure our success by yours.",
  },
];

const WhyChooseUs = () => {
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
            Our Approach
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
            Why Choose Apex
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            We combine deep legal expertise with a genuine commitment to client
            service. Here's what sets us apart.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                <value.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
