import { Phone, Mail } from "lucide-react";
import { siteInfo } from "@/data/siteData";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground border-b border-primary-foreground/10">
      <div className="container">
        <div className="flex items-center justify-end gap-4 md:gap-6 h-10 text-xs font-body">
          <a
            href={`tel:${siteInfo.phone.replace(/\D/g, "")}`}
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>{siteInfo.phone}</span>
          </a>
          <a
            href={`mailto:${siteInfo.email}`}
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>{siteInfo.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
