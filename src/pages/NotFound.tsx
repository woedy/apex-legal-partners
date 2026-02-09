import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="page-header">
        <div className="container text-center">
          <h1 className="text-6xl md:text-8xl font-heading mb-4">404</h1>
          <p className="text-xl text-primary-foreground/70 font-body mb-8">
            The page you're looking for doesn't exist.
          </p>
          <Button asChild variant="accent" size="lg">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
