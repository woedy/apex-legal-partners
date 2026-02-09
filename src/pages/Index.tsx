import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import TrustSignals from "@/components/home/TrustSignals";
import PracticeAreasPreview from "@/components/home/PracticeAreasPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedAttorneys from "@/components/home/FeaturedAttorneys";
import RepresentativeMatters from "@/components/home/RepresentativeMatters";
import Testimonials from "@/components/home/Testimonials";
import HomeFAQ from "@/components/home/HomeFAQ";
import CTABanner from "@/components/home/CTABanner";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TrustSignals />
      <PracticeAreasPreview />
      <WhyChooseUs />
      <FeaturedAttorneys />
      <RepresentativeMatters />
      <Testimonials />
      <HomeFAQ />
      <CTABanner />
    </Layout>
  );
};

export default Index;
