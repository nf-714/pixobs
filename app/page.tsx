import AboutComponent from "@/components/about/about.component";
import CtaSectionComponent from "@/components/cta-section/cta-section.component";
import Footer from "@/components/footer/footer.component";
import Header from "@/components/header/header.component";
import TextRevealByWord from "@/components/magicui/text-reveal";
import { ServicesComponent } from "@/components/services/services.component";
import Testimonials from "@/components/testimonials/testimonials.component";
import WorksComponent from "@/components/works/works.component";

export default function Home() {
  return (
    <>
      <Header />

      <AboutComponent />
      <TextRevealByWord
        className="bg-white dark:bg-zinc-900 text-red-400"
        text="At PixObs, we believe in the power of visual storytelling and strategic marketing to transform brands. Founded by a team of passionate creatives and marketing experts, PixObs is dedicated to helping businesses of all sizes achieve their goals through high-quality video editing and cutting-edge digital marketing strategies."
      />
      <ServicesComponent />
      <WorksComponent />
      <Testimonials />
      <CtaSectionComponent />
      <Footer />
    </>
  );
}
