import SectionHeading from "../../common/SectionHeading/SectionHeading.jsx";
import CTAButtons from "../../common/CTAButtons/CTAButtons.jsx";
import { business } from "../../../data/business.js";
import "./ContactSection.scss";

export default function ContactSection() {
  return (
    <section className="contactSection container page-section">
      <div className="contactSection__box surface">
        <div>
          <SectionHeading
            title="Contactanos ahora"
            subtitle="Si es urgente, llamanos. Si preferís, escribinos por WhatsApp."
          />
          <p className="small">
            {business.address.full} · Tel: {business.phone.display}
          </p>
        </div>

        <div className="contactSection__actions">
          <CTAButtons />
        </div>
      </div>
    </section>
  );
}