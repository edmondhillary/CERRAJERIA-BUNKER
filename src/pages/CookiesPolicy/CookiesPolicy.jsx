import PageSEO from "../../hooks/usePageSEO.jsx";
import "./CookiesPolicy.scss";

export default function CookiesPolicy() {
  return (
    <div className="container legalPage">
      <PageSEO
        title="Política de Cookies"
        description="Política de Cookies de Cerrajería Bunker."
      />

      <section className="legalPage__box surface">
        <h1>Política de Cookies</h1>
        <p className="small">
          Texto inicial de cookies. Después lo ajustás según las herramientas que uses.
        </p>
      </section>
    </div>
  );
}