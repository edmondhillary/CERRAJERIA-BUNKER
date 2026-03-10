import { Link } from "react-router-dom";
import PageSEO from "../../hooks/usePageSEO.jsx";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <div className="container notFoundPage">
      <PageSEO
        title="Página no encontrada"
        description="Página no encontrada."
        noindex
      />

      <section className="notFoundPage__box surface">
        <h1>404</h1>
        <p className="small">
          La página que buscás no existe o cambió de dirección.
        </p>

        <div className="notFoundPage__actions">
          <Link to="/" className="btn btn--primary">
            Volver al inicio
          </Link>

          <Link to="/servicios" className="btn">
            Ver servicios
          </Link>
        </div>
      </section>
    </div>
  );
}