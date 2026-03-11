import { business } from "../../../data/business.js";
import { buildWhatsAppUrl } from "../../../utils/buildWhatsAppUrl.js";
import "./CTAStickyMobile.scss";

export default function CTAStickyMobile() {
  const whatsappUrl = buildWhatsAppUrl({
    phoneDigits: business.whatsapp.phoneDigits,
    message: business.whatsapp.defaultMessage
  });

  return (
    <a
      className="whatsappFloat"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <img src="/images/icons/whatsapp.svg" alt="WhatsApp" />
    </a>
  );
}