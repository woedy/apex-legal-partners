import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, GraduationCap, Scale, Globe } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { attorneys } from "@/data/siteData";

const AttorneyProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const attorney = attorneys.find((a) => a.slug === slug);

  if (!attorney) return <Navigate to="/attorneys" replace />;

  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <Link
            to="/attorneys"
            className="inline-flex items-center gap-1 text-primary-foreground/60 hover:text-primary-foreground text-sm font-body mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All Attorneys
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading mb-2">
              {attorney.name}
            </h1>
            <p className="text-accent font-body text-lg">{attorney.title}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Bio */}
            <div className="lg:col-span-2">
              <div className="prose prose-gray max-w-none">
                {attorney.bioLong.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-muted-foreground font-body leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {attorney.practiceAreas.map((area) => (
                  <Badge key={area} variant="secondary">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Avatar */}
              <div className="bg-muted rounded-lg aspect-square overflow-hidden border border-border">
                <img
                  src={attorney.imageUrl}
                  alt={attorney.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contact */}
              <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                <h3 className="font-heading text-foreground text-lg mb-3">
                  Contact
                </h3>
                <a
                  href={`mailto:${attorney.email}`}
                  className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent" /> {attorney.email}
                </a>
                <a
                  href={`tel:${attorney.phone}`}
                  className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" /> {attorney.phone}
                </a>
              </div>

              {/* Education */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-heading text-foreground text-lg mb-3 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-accent" /> Education
                </h3>
                <ul className="space-y-2">
                  {attorney.education.map((edu) => (
                    <li
                      key={edu}
                      className="text-sm font-body text-muted-foreground"
                    >
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Admissions */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-heading text-foreground text-lg mb-3 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-accent" /> Bar Admissions
                </h3>
                <ul className="space-y-1">
                  {attorney.admissions.map((adm) => (
                    <li
                      key={adm}
                      className="text-sm font-body text-muted-foreground"
                    >
                      {adm}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              {attorney.languages && (
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-heading text-foreground text-lg mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-accent" /> Languages
                  </h3>
                  <p className="text-sm font-body text-muted-foreground">
                    {attorney.languages.join(", ")}
                  </p>
                </div>
              )}

              <Button asChild variant="accent" className="w-full">
                <Link to="/consultation">Book a Consultation</Link>
              </Button>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AttorneyProfile;
