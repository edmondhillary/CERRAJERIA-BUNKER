import { Navigate, Link, useParams } from "react-router-dom";
import PageSEO from "../../hooks/usePageSEO.jsx";
import { services } from "../../data/services.js";
import ServiceHero from "../../components/common/ServiceHero/ServiceHero.jsx";
import ServiceContent from "../../components/common/ServiceContent/ServiceContent.jsx";
import FAQSection from "../../components/common/FAQSection/FAQSection.jsx";
import ContactSection from "../../components/home/ContactSection/ContactSection.jsx";
import GoogleMapsShowcase from "../../components/common/GoogleMapsShowcase/GoogleMapsShowcase.jsx";
import { buildFAQSchema } from "../../utils/schemaBuilders.js";
import "./ServiceDetail.scss";

export default function ServiceDetail() {
  const { serviceSlug } = useParams();

  const service = services.find((item) => item.slug === serviceSlug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="container serviceDetailPage">
      <PageSEO
        title={service.seoTitle}
        description={service.seoDescription}
        schema={buildFAQSchema({ items: service.faq })}
      />

      <ServiceHero service={service} />
      <ServiceContent service={service} />

      <section className="serviceDetailPage__related page-section">
        <h2 className="rule-red">También te puede interesar</h2>

        <div className="serviceDetailPage__relatedGrid">
          {relatedServices.map((item) => (
            <Link
              key={item.slug}
              to={`/servicios/${item.slug}`}
              className="serviceDetailPage__relatedCard surface"
            >
              <h3>{item.name}</h3>
              <p className="small">{item.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-section">
        <h2 className="rule-red">Preguntas frecuentes</h2>
      </section>

      <FAQSection items={service.faq} />
      <GoogleMapsShowcase variant="lite" />
      <ContactSection />
    </div>
  );
}