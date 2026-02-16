import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Scale, Users, Target, Handshake } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { siteInfo } from "@/data/siteData";

const values = [
  {
    icon: Scale,
    title: "Integrity First",
    description:
      "We provide candid, honest advice—even when it's not what clients want to hear. Trust is built through transparency, not just favorable outcomes.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Legal work must serve practical objectives. We focus on outcomes that matter to your business and your life, not billable complexity.",
  },
  {
    icon: Users,
    title: "Client-Centered",
    description:
      "Every client is assigned a lead attorney who knows their matter inside and out. You'll never be passed to someone unfamiliar with your case.",
  },
  {
    icon: Handshake,
    title: "Collaborative Approach",
    description:
      "We work as an extension of your team, sharing knowledge and strategy so you can make informed decisions at every stage.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const About = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
              About the Firm
            </p>
            <h1 className="text-4xl md:text-5xl font-heading mb-4">
              Built on Conviction.
              <br />
              <span className="italic">Driven by Results.</span>
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg max-w-2xl">
              {siteInfo.name} was founded on a straightforward premise: clients
              deserve legal counsel that is both sophisticated and practical.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-heading mb-6 text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  Apex Legal Partners was established in Zurich by attorneys
                  who spent years at large, prestigious firms and saw an
                  opportunity to deliver the same caliber of legal work with
                  greater responsiveness, transparency, and personal attention.
                </p>
                <p>
                  We built the firm around a simple idea: that clients should
                  have direct access to experienced attorneys who know their
                  matters thoroughly, communicate clearly, and focus on practical
                  solutions rather than unnecessary complexity.
                </p>
                <p>
                  Today, we serve a diverse client base—from startups and
                  family-owned businesses to established corporations and
                  individuals navigating important life transitions. What unites
                  our clients is an expectation of excellent legal work delivered
                  efficiently and with genuine care for their objectives.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8 md:p-10">
              <h3 className="text-xl font-heading mb-6 text-foreground">
                By the Numbers
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { stat: "15+", label: "Years of experience" },
                  { stat: "500+", label: "Matters handled" },
                  { stat: "6", label: "Practice areas" },
                  { stat: "98%", label: "Client satisfaction" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-3xl font-heading text-accent mb-1">
                      {item.stat}
                    </p>
                    <p className="text-sm text-muted-foreground font-body">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading text-foreground mb-3">
              Our Values
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              The principles that guide how we practice law and serve our
              clients.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-lg p-6 shadow-sm border border-border"
              >
                <value.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-lg font-heading mb-2 text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="text-3xl font-heading text-foreground mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-muted-foreground font-body mb-8 max-w-lg mx-auto">
            We'd welcome the opportunity to learn about your legal needs and
            discuss how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="accent" size="lg">
              <Link to="/consultation">Book a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/attorneys">Meet Our Attorneys</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
