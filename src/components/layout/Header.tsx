import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import TopBar from "./TopBar";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Attorneys", href: "/attorneys" },
  { label: "Results", href: "/results" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <>
      <TopBar />
      <header
        className={cn(
          "fixed top-10 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        )}
      >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
            <span className="text-accent-foreground font-heading text-sm font-bold">A</span>
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "font-heading text-lg font-semibold leading-tight transition-colors",
                scrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              Apex Legal
            </span>
            <span
              className={cn(
                "text-[10px] tracking-[0.2em] uppercase font-body leading-none transition-colors",
                scrolled ? "text-muted-foreground" : "text-primary-foreground/60"
              )}
            >
              Partners
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "px-3 py-2 text-sm font-body font-medium rounded-md transition-colors",
                isActive(link.href)
                  ? scrolled
                    ? "text-accent"
                    : "text-accent"
                  : scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant="accent" size="sm" className="ml-3">
            <Link to="/consultation">Book a Consultation</Link>
          </Button>
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                scrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-card p-0">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="font-heading text-lg font-semibold text-foreground">
                  Menu
                </span>
              </div>
              <nav className="flex flex-col p-4 gap-1 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "px-3 py-3 text-base font-body rounded-md transition-colors",
                      isActive(link.href)
                        ? "text-accent font-medium bg-accent/5"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="p-4 border-t border-border">
                <Button asChild variant="accent" className="w-full">
                  <Link to="/consultation">Book a Consultation</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
    </>
  );
};

export default Header;
