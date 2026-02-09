import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-accent font-body text-sm tracking-[0.25em] uppercase mb-6"
          >
            Apex Legal Partners
          </motion.p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground font-heading leading-[1.1] mb-6">
            Modern Counsel.
            <br />
            <span className="italic">Practical Solutions.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl font-body font-light leading-relaxed">
            Strategic legal representation for businesses and individuals. We
            bring clarity, precision, and a results-driven approach to every
            engagement.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild variant="accent" size="lg">
              <Link to="/consultation">Book a Consultation</Link>
            </Button>
            <Button asChild variant="outlineLight" size="lg">
              <Link to="/practice-areas">View Practice Areas</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
