import PageSEO from "../../hooks/usePageSEO.jsx";
import Hero from "../../components/home/Hero/Hero.jsx";
import TrustBar from "../../components/common/TrustBar/TrustBar.jsx";
import ServicesGrid from "../../components/home/ServicesGrid/ServicesGrid.jsx";
import WhyChooseUs from "../../components/home/WhyChooseUs/WhyChooseUs.jsx";
import GoogleMapsShowcase from "../../components/common/GoogleMapsShowcase/GoogleMapsShowcase.jsx";
import GoogleReviewsShowcase from "../../components/home/GoogleReviewsShowcase/GoogleReviewsShowcase.jsx";
import FAQSection from "../../components/common/FAQSection/FAQSection.jsx";
import ContactSection from "../../components/home/ContactSection/ContactSection.jsx";
import { globalFAQs } from "../../data/faqs.js";
import { buildFAQSchema } from "../../utils/schemaBuilders.js";
import "./Home.scss";
import FAQPreview from "../../components/FAQPreview/FAQPreview.jsx";

export default function Home() {
  return (
    <div className="homePage">
      <PageSEO schema={buildFAQSchema({ items: globalFAQs })} />

      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyChooseUs />
      <GoogleReviewsShowcase />
      <GoogleMapsShowcase variant="lite" />

      <section className="container homePage__faqTitle page-section">
        <h2 className="rule-red">Preguntas frecuentes</h2>
        <p className="small">
          Respuestas claras para decidir rápido y contactarnos sin perder tiempo.
        </p>
      </section>

      <FAQPreview />
      <ContactSection />
    </div>
  );
}