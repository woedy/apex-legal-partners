import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/siteData";

const Testimonials = () => {
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
            Client Feedback
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative bg-card border border-border rounded-lg p-6 pt-10"
            >
              <div className="absolute -top-4 left-6 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-accent-foreground" />
              </div>
              <p className="text-sm text-foreground font-body leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-body font-medium text-foreground">
                  {testimonial.nameOrRole}
                </p>
                <p className="text-xs text-muted-foreground font-body">
                  {testimonial.industry}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
