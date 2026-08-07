import Hero from "../components/home/Hero";
import TrustStrip from "../components/home/TrustStrip";
import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks";
import SymptomCheckerTeaser from "../components/home/SymptomCheckerTeaser";
import DoctorsPreview from "../components/home/DoctorsPreview";
import MedicineDeliveryPreview from "../components/home/MedicineDeliveryPreview";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import AppDownload from "../components/home/AppDownload";
import Partners from "../components/home/Partners";
import Faq from "../components/home/Faq";
import Newsletter from "../components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Features />
      <HowItWorks />
      <SymptomCheckerTeaser />
      <DoctorsPreview />
      <MedicineDeliveryPreview />
      <Stats />
      <Testimonials />
      <AppDownload />
      <Partners />
      <Faq />
      <Newsletter />
    </>
  );
}
