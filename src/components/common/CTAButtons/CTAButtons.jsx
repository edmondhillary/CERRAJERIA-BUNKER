import { business } from "../../../data/business.js";
import { buildWhatsAppUrl } from "../../../utils/buildWhatsAppUrl.js";
import "./CTAButtons.scss";

export default function CTAButtons() {
  const whatsappUrl = buildWhatsAppUrl({
    phoneDigits: business.whatsapp.phoneDigits,
    message: business.whatsapp.defaultMessage
  });

  return (
    <div className="ctaButtons">
      <a className="btn btn--primary" href={`tel:${business.phone.telE164}`}>
        Llamar ahora
      </a>

      <a
        className="btn btn--ghost"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>

      <a className="btn" href={business.maps.query} target="_blank" rel="noreferrer">
        Cómo llegar
      </a>
    </div>
  );
}