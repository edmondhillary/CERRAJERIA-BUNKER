import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../../data/navigation.js";
import { business } from "../../../data/business.js";
import { buildWhatsAppUrl } from "../../../utils/buildWhatsAppUrl.js";
import "./Header.scss";

export default function Header() {
  const whatsappUrl = buildWhatsAppUrl({
    phoneDigits: business.whatsapp.phoneDigits,
    message: business.whatsapp.defaultMessage
  });

  return (
    <header className="header surface">
      <div className="container header__inner">
        <Link to="/" className="header__brand" aria-label="Ir al inicio">
          <img
            src="/images/brand/logo-bunker.png"
            alt="Cerrajería Bunker Rosario"
            className="header__logo"
            loading="eager"
          />
        </Link>

        <nav className="header__nav hide-mobile" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `header__link ${isActive ? "is-active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__ctas">
          <a className="btn btn--ghost hide-mobile" href={whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className="btn btn--primary" href={`tel:${business.phone.telE164}`}>
            Llamar
          </a>
        </div>
      </div>

      <div className="header__navMobile hide-desktop">
        <div className="container header__navMobileInner">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `header__linkMobile ${isActive ? "is-active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
  
    </header>
  );
}