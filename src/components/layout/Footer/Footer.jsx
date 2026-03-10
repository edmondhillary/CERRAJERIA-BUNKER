import { Link } from "react-router-dom";
import { business } from "../../../data/business.js";
import { services } from "../../../data/services.js";
import "./Footer.scss";

export default function Footer() {
  const topServices = services.slice(0, 5);

  return (
    <footer className="footer surface">
      <div className="container footer__inner">
        <div className="footer__col">
          <div className="footer__title">{business.name}</div>
          <p className="small">
            {business.yearsExperience} años de experiencia en Rosario. Atención
            personalizada, trabajos a domicilio y urgencias 24 hs.
          </p>
        </div>

        <div className="footer__col">
          <div className="footer__title">Contacto</div>
          <p className="small">{business.address.full}</p>
          <p className="small">
            <a href={`tel:${business.phone.telE164}`}>Tel: {business.phone.display}</a>
          </p>
          <p className="small">
            <a href={business.maps.query} target="_blank" rel="noreferrer">
              Cómo llegar
            </a>
          </p>
        </div>

        <div className="footer__col">
          <div className="footer__title">Secciones</div>
          <div className="footer__links">
            <Link to="/">Inicio</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/sobre-nosotros">Sobre nosotros</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/preguntas-frecuentes">FAQ</Link>
          </div>
        </div>

        <div className="footer__col">
          <div className="footer__title">Servicios</div>
          <div className="footer__links">
            {topServices.map((service) => (
              <Link key={service.slug} to={`/servicios/${service.slug}`}>
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottomInner">
          <span className="small">
            © {new Date().getFullYear()} {business.name}
          </span>
          <span className="small">
            <Link to="/legal/privacidad">Privacidad</Link> ·{" "}
            <Link to="/legal/cookies">Cookies</Link> ·{" "}
            <Link to="/legal/terminos">Términos</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}