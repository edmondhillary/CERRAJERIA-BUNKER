import { Link } from "react-router-dom";
import PageSEO from "../../hooks/usePageSEO.jsx";
import CTAButtons from "../../components/common/CTAButtons/CTAButtons.jsx";
import { services } from "../../data/services.js";
import "./Services.scss";

export default function Services() {
  return (
    <div className="container servicesPage">
      <PageSEO
        title="Servicios de cerrajería en Rosario | Hogar, llaves y urgencias"
        description="Conocé los servicios: cerrajería del hogar, llaves en el acto, cajas fuertes, cerraduras computadas, puertas blindadas, herrajes, domicilio y urgencias."
      />

      <section className="servicesPage__hero surface">
        <div>
          <h1>Servicios de cerrajería en Rosario</h1>
          <p className="small">
            Elegí el servicio que necesitás. Si es urgente, llamanos. Si preferís,
            escribinos por WhatsApp.
          </p>
        </div>

        <div className="servicesPage__actions">
          <CTAButtons />
        </div>
      </section>

      <section className="servicesPage__grid">
        {services.map((service) => (
          <Link
            key={service.slug}
            to={`/servicios/${service.slug}`}
            className="servicesPage__card surface"
          >
            <div className="servicesPage__thumb">
              <img
                src={service.cardImage}
                alt={service.name}
                loading="lazy"
              />
            </div>

            <div className="servicesPage__body">
              <h3>{service.name}</h3>
              <p className="small">{service.short}</p>
              <div className="servicesPage__more small">Ver detalle →</div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}