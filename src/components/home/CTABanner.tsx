import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-2xl p-10 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-foreground mb-4">
            Ready to Discuss Your Legal Needs?
          </h2>
          <p className="text-primary-foreground/70 font-body text-lg max-w-2xl mx-auto mb-8">
            Schedule a complimentary 30-minute consultation with one of our
            attorneys. No obligation, no pressure—just a clear conversation
            about how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="accent" size="lg">
              <Link to="/consultation">Book a Consultation</Link>
            </Button>
            <Button asChild variant="outlineLight" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
