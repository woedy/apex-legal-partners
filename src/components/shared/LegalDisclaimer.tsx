import { cn } from "@/lib/utils";

interface LegalDisclaimerProps {
  variant?: "default" | "footer" | "results";
}

const LegalDisclaimer = ({ variant = "default" }: LegalDisclaimerProps) => {
  return (
    <div
      className={cn(
        "font-body text-xs leading-relaxed",
        variant === "footer" && "text-primary-foreground/30 text-center",
        variant === "results" &&
          "bg-muted border border-border rounded-lg p-4 text-muted-foreground",
        variant === "default" && "text-muted-foreground"
      )}
    >
      <p></p>
    </div>
  );
};

export default LegalDisclaimer;
