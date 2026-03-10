import PageSEO from "../../hooks/usePageSEO.jsx";
import CTAButtons from "../../components/common/CTAButtons/CTAButtons.jsx";
import GoogleMapsShowcase from "../../components/common/GoogleMapsShowcase/GoogleMapsShowcase.jsx";
import { business } from "../../data/business.js";
import "./Contact.scss";

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s-6-5.4-6-11a6 6 0 1112 0c0 5.6-6 11-6 11Zm0-8.2a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6Z" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 3h3.1l1 4.1-1.9 1.9a15.7 15.7 0 006.1 6.1l1.9-1.9L21 14.3v3.1A2.6 2.6 0 0118.4 20C10.4 20 4 13.6 4 5.6A2.6 2.6 0 016.6 3Z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 6v6l4 2M12 22a10 10 0 100-20 10 10 0 000 20Z" />
    </svg>
  );
}

export default function Contact() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${business.address.street}, ${business.address.city}, ${business.address.region}`
  )}`;

  return (
    <div className="container contactPage">
      <PageSEO
        title="Contacto | Cerrajería Bunker Rosario"
        description="Cerrajería Bunker en Rosario. Visítanos en Moreno 492 o contacta por teléfono o WhatsApp para urgencias de cerrajería."
      />

      <section className="contactPage__hero surface">
        <div className="contactPage__heroTop">
          <div>
            <span className="badge">Moreno 492 · Rosario</span>
           
            <h1>Contacto</h1>
            <p className="contactPage__intro small">
              Estamos en <strong>Moreno 492, Rosario</strong>. Si necesitás un
              cerrajero urgente, llamanos directamente o escribinos por WhatsApp.
            </p>
          </div>

          <div className="contactPage__heroActions">
            <CTAButtons />
          </div>
        </div>

        <div className="contactPage__info">
          <article className="contactPage__infoBox surface">
            <div className="contactPage__infoHead">
              <span className="contactPage__icon">
                <IconPin />
              </span>
              <h3>Dirección</h3>
            </div>

            <div className="contactPage__infoBody">
              <p>{business.address.street}</p>
              <p>{business.address.city}</p>
              <p>{business.address.region}</p>
              <p>{business.address.country}</p>
            </div>

            <a
              className="contactPage__infoLink"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en Google Maps
            </a>
          </article>

          <article className="contactPage__infoBox surface">
            <div className="contactPage__infoHead">
              <span className="contactPage__icon">
                <IconPhone />
              </span>
              <h3>Teléfono</h3>
            </div>

            <div className="contactPage__infoBody">
              <p>
                <a href={`tel:${business.phone.telE164}`}>{business.phone.display}</a>
              </p>
            </div>

            <p className="contactPage__note small">Llamadas para urgencias y consultas.</p>
          </article>

          <article className="contactPage__infoBox surface">
            <div className="contactPage__infoHead">
              <span className="contactPage__icon">
                <IconClock />
              </span>
              <h3>Atención</h3>
            </div>

            <div className="contactPage__infoBody">
              <p>{business.hoursNote}</p>
            </div>

            <p className="contactPage__note small">
              Servicio rápido en Rosario y atención personalizada.
            </p>
          </article>
        </div>
      </section>

      <div className="contactPage__mapBlock">
        <GoogleMapsShowcase variant="image" />
      </div>
    </div>
  );
}