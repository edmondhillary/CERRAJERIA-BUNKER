import PageSEO from "../../hooks/usePageSEO.jsx";
import "./PrivacyPolicy.scss";

export default function PrivacyPolicy() {
  return (
    <div className="container legalPage">
      <PageSEO
        title="Política de Privacidad"
        description="Política de Privacidad de Cerrajería Bunker."
      />

      <section className="legalPage__box surface">
        <h1>Política de Privacidad</h1>
        <p className="small">
          Texto inicial de política de privacidad. Acá después vas a poner la
          versión legal definitiva.
        </p>
      </section>
    </div>
  );
}