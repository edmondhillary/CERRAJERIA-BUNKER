import { business } from "../../../data/business.js";
import { buildWhatsAppUrl } from "../../../utils/buildWhatsAppUrl.js";
import "./CTAStickyMobile.scss";

export default function CTAStickyMobile() {
  const whatsappUrl = buildWhatsAppUrl({
    phoneDigits: business.whatsapp.phoneDigits,
    message: business.whatsapp.defaultMessage
  });

  return (
    <div className="stickyCta hide-desktop" aria-label="Acciones rápidas">
      <a className="stickyCta__btn stickyCta__btn--call" href={`tel:${business.phone.telE164}`}>
        Llamar
      </a>

      <a
        className="stickyCta__btn stickyCta__btn--wa"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>

      <a
        className="stickyCta__btn"
        href={business.maps.query}
        target="_blank"
        rel="noreferrer"
      >
        Mapa
      </a>
    </div>
  );
}