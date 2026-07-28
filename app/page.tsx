import TopUtilityBar from "@/components/TopUtilityBar";
import Navbar from "@/components/Navigation";
import Hero from "@/components/Hero";
 
import ServiceLocator from "@/components/ServiceLocator";
import DumpsterSizes from "@/components/DumpsterSizes";
import DumpsterProjects from "@/components/DumpsterProjects";
import DumpsterServices from "@/components/DumpsterServices"
import TrustBanner from "@/components/TrustBanner";
import FAQContactSection from "@/components/FAQContactSection";
import ServiceAreas from "@/components/ServiceAreas";
import TrustBannerRed from "@/components/TrustBannerRed";
import Footer from "@/components/Footer";
import WhyTemporaryDumpsters from "@/components/WhyTemporaryDumpsters";
import Testimonials from "@/components/Testimonials";
import OurClients from "@/components/OurClients";
import CustomerTrustBanner from "@/components/CustomerTrustBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <TopUtilityBar />
      <Navbar />

      <Hero />

      <ServiceLocator />

      <DumpsterSizes />

      <DumpsterProjects />

      <DumpsterServices />
       <TrustBanner />

      <WhyTemporaryDumpsters />

     
<CustomerTrustBanner />
      <Testimonials />

      <OurClients />

      <ServiceAreas />

      <TrustBannerRed />

      <FAQContactSection />

      <Footer />
    </main>
  );
}