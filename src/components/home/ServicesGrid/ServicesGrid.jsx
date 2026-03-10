import { Link } from "react-router-dom";
import { services } from "../../../data/services.js";
import SectionHeading from "../../common/SectionHeading/SectionHeading.jsx";
import "./ServicesGrid.scss";

export default function ServicesGrid({ limit = 8 }) {
  const visibleServices = services.slice(0, limit);

  return (
    <section className="servicesGrid container page-section">
      <SectionHeading
        title="Servicios"
        subtitle="Soluciones concretas para hogar, urgencias, cerraduras, llaves y seguridad en Rosario."
      />

      <div className="servicesGrid__grid">
        {visibleServices.map((service) => (
          <Link
            key={service.slug}
            to={`/servicios/${service.slug}`}
            className="servicesGrid__card surface"
            aria-label={`Ver servicio de ${service.name}`}
          >
            <div className="servicesGrid__thumb">
              <img
                src={service.cardImage}
                alt={service.name}
                loading="lazy"
                decoding="async"
                width="640"
                height="420"
              />
            </div>

            <div className="servicesGrid__body">
              <h3>{service.name}</h3>
              <p className="small">{service.short}</p>
              <div className="servicesGrid__more small">Ver servicio →</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}