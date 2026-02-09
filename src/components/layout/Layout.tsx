import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "@/components/shared/BackToTop";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;
