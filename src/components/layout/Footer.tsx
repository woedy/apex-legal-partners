import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteInfo, practiceAreas } from "@/data/siteData";
import LegalDisclaimer from "@/components/shared/LegalDisclaimer";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-accent-foreground font-heading text-xs font-bold">A</span>
              </div>
              <span className="font-heading text-lg font-semibold">{siteInfo.name}</span>
            </div>
            <p className="text-primary-foreground/60 text-sm font-body leading-relaxed mb-6">
              {siteInfo.tagline} We provide sophisticated legal counsel with a
              client-first approach, serving businesses and individuals in New York
              and beyond.
            </p>
            <div className="flex gap-4">
              {["LinkedIn", "Twitter"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-primary-foreground/40 hover:text-accent text-xs font-body uppercase tracking-wider transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4 text-accent">
              Practice Areas
            </h4>
            <ul className="space-y-2">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    to={`/practice-areas/${area.slug}`}
                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm font-body transition-colors"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4 text-accent">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "About the Firm", href: "/about" },
                { label: "Our Attorneys", href: "/attorneys" },
                { label: "Case Results", href: "/results" },
                { label: "Insights & Articles", href: "/insights" },
                { label: "Contact Us", href: "/contact" },
                { label: "Book a Consultation", href: "/consultation" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm font-body transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4 text-accent">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span className="text-primary-foreground/60 text-sm font-body whitespace-pre-line">
                  {siteInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a
                  href={`tel:${siteInfo.phone}`}
                  className="text-primary-foreground/60 hover:text-primary-foreground text-sm font-body transition-colors"
                >
                  {siteInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="text-primary-foreground/60 hover:text-primary-foreground text-sm font-body transition-colors"
                >
                  {siteInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span className="text-primary-foreground/60 text-sm font-body">
                  {siteInfo.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer + Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6">
          <LegalDisclaimer variant="footer" />
          <p className="text-primary-foreground/30 text-xs font-body mt-4 text-center">
            © {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
